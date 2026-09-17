export const APP_POSITIONING = 'The OneGodian App™ — the public and member-facing gateway for OneGodian identity, education, membership, tools, certificates, products, media, and ecosystem access.';

export const appCards = [
  ['Members','Membership access, resources, certificates, dashboard, and support.','/members'],
  ['Contributors','Voluntary support for public-facing OneGodian infrastructure.','/contributors'],
  ['Creator Network','Creator, educator, affiliate, and community voice participation.','/creator-network'],
  ['Affiliate Dashboard','Referral link, campaign assets, updates, compliance, and application status.','/affiliate-dashboard'],
  ['Referral Links','Access approved referral-link tools and bridge resources.','/referral-links'],
  ['Contributor Wall','Recognition space for participating contributors.','/contributor-wall'],
  ['Certificates','Member and ecosystem certificate access.','/certificates'],
  ['Products','Gateway to OneGodian.com commerce and products.','/products'],
  ['Media','Public media, creator resources, and ecosystem storytelling.','/media'],
  ['Learning','Education gateway to OneGodian.org and OneGodian University.','/learning'],
  ['Registry','Public registry and verification pathways.','/registry'],
  ['Tools','Public/member-facing OneGodian tools.','/tools'],
  ['Settings','Member-facing app preferences and account settings.','/settings'],
] as const;

export const routes = ['/', '/dashboard','/members','/contributors','/creator-network','/affiliate-dashboard','/referral-links','/contributor-wall','/certificates','/products','/media','/learning','/registry','/tools','/settings','/ecosystem'];

export const wpBridgeShortcodes = [
  '[onegodian_membership_cta]','[onegodian_members_pricing]','[onegodian_membership_resources]',
  '[onegodian_member_certificates]','[onegodian_member_dashboard]','[onegodian_member_support]',
  '[onegodian_contributors_page]','[onegodian_contributor_tiers]','[onegodian_creator_network]',
  '[onegodian_affiliate_dashboard]','[onegodian_referral_link]','[onegodian_contributor_wall]',
  '[onegodian_contributor_disclaimer]'
];

export const contributorTiers = [
  ['Supporter','$11'],['Builder','$33'],['Sustainer','$77'],['Founder Circle','$111'],
  ['Infrastructure Partner','$333+'],['Custom Contribution','Any amount']
] as const;

export const contributorNotice = 'Contributions are voluntary support payments. They are not equity, securities, loans, bonds, investment contracts, or promises of financial return.';
