# OneGodian App — Public/Member Gateway Update

## Positioning
The OneGodian App™ — the public and member-facing gateway for OneGodian identity, education, membership, tools, certificates, products, media, and ecosystem access.

## Domain separation
- app.onegodian.com — public/member-facing app gateway
- console.onegodian.com — operator/admin/control plane
- capital.onegodian.com — capital operations
- onegodian.org — identity, education, community, documentation
- onegodian.com — commerce, products, services, payments

The app excludes ACC/operator controls, deployment controls, kill-switches, admin runtime mutation, internal logs, and privileged console functions.

## WordPress Members Plugin bridge
The manifest exposes these integration references:
- `[onegodian_membership_cta]`
- `[onegodian_members_pricing]`
- `[onegodian_membership_resources]`
- `[onegodian_member_certificates]`
- `[onegodian_member_dashboard]`
- `[onegodian_member_support]`
- `[onegodian_contributors_page]`
- `[onegodian_contributor_tiers]`
- `[onegodian_creator_network]`
- `[onegodian_affiliate_dashboard]`
- `[onegodian_referral_link]`
- `[onegodian_contributor_wall]`
- `[onegodian_contributor_disclaimer]`

## Contribution compliance
Contributions are voluntary support payments. They are not equity, securities, loans, bonds, investment contracts, or promises of financial return. The app does not implement contribution payment processing unless a real backend is separately connected.

## Public JSON
- /api/health
- /api/manifest
- /api/tools
- /api/stats
