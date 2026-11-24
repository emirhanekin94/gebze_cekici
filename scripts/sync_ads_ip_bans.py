import json
import os
import urllib.request
from google.ads.googleads.client import GoogleAdsClient

CUSTOMER_ID = os.getenv('GOOGLE_ADS_CUSTOMER_ID', '8754671480').replace('-', '').strip()
CAMPAIGN_ID = os.getenv('GOOGLE_ADS_CAMPAIGN_ID', '24538258041').strip()
FRAUD_LOG_URL = os.getenv(
    'FRAUD_LOG_URL',
    'https://gebzecekici.tr/.netlify/functions/fraud-log?token=gck_9f8e7d6c5b4a3210_gebze2026',
)


def get_client():
    creds = {
        'developer_token': os.environ['GOOGLE_ADS_DEVELOPER_TOKEN'],
        'client_id': os.environ['GOOGLE_ADS_CLIENT_ID'],
        'client_secret': os.environ['GOOGLE_ADS_CLIENT_SECRET'],
        'refresh_token': os.environ['GOOGLE_ADS_REFRESH_TOKEN'],
        'use_proto_plus': True,
    }
    login_id = os.getenv('GOOGLE_ADS_LOGIN_CUSTOMER_ID', '').replace('-', '').strip()
    if login_id:
        creds['login_customer_id'] = login_id
    return GoogleAdsClient.load_from_dict(creds)


def main():
    req = urllib.request.Request(FRAUD_LOG_URL, headers={'User-Agent': 'GebzeAdsGuard/1.0'})
    with urllib.request.urlopen(req, timeout=20) as resp:
        data = json.loads(resp.read().decode('utf-8'))

    flagged_ips = data.get('flaggedIps', [])
    print(f"Takip edilen IP: {data.get('totalTracked', 0)} | Supheli IP: {len(flagged_ips)}")
    if not flagged_ips:
        print('Banlanacak yeni supheli IP yok.')
        return

    client = get_client()
    ga = client.get_service('GoogleAdsService')
    camp_crit_service = client.get_service('CampaignCriterionService')
    camp_res = f'customers/{CUSTOMER_ID}/campaigns/{CAMPAIGN_ID}'

    q = f"""
        SELECT campaign_criterion.ip_block.ip_address
        FROM campaign_criterion
        WHERE campaign.id = {CAMPAIGN_ID}
          AND campaign_criterion.type = 'IP_BLOCK'
          AND campaign_criterion.status != 'REMOVED'
    """
    existing_ips = {
        r.campaign_criterion.ip_block.ip_address
        for r in ga.search(customer_id=CUSTOMER_ID, query=q)
    }

    ops = []
    slots = max(0, 500 - len(existing_ips))
    for ip in flagged_ips:
        if ip in existing_ips:
            continue
        if len(ops) >= slots:
            print('UYARI: 500 IP ban limitine ulasildi.')
            break
        op = client.get_type('CampaignCriterionOperation')
        cc = op.create
        cc.campaign = camp_res
        cc.negative = True
        cc.ip_block.ip_address = ip
        ops.append(op)

    if not ops:
        print('Tum supheli IP adresleri zaten engellenmis.')
        return

    mut_req = client.get_type('MutateCampaignCriteriaRequest')
    mut_req.customer_id = CUSTOMER_ID
    mut_req.operations.extend(ops)
    mut_resp = camp_crit_service.mutate_campaign_criteria(request=mut_req)
    print(f'OK: {len(mut_resp.results)} yeni supheli IP Google Ads kampanyasindan engellendi.')


if __name__ == '__main__':
    main()
