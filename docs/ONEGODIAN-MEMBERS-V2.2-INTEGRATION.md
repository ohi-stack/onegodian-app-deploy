# OneGodian Members v2.2.0 — App Deployment Integration

Updated: September 29, 2026

## Purpose

This deployment record keeps `ohi-stack/onegodian-app-deploy` aligned with the current OneGodian Members WordPress integration without moving WordPress membership authority into the App deployment repository.

## Canonical sources

- Members plugin source: `ohi-stack/onegodian-platform-plugin/main`
- Members version: `2.2.0`
- Installable package name: `onegodian-members-v2.2.0-production.zip`
- App source repository: `ohi-stack/onegodian-app`
- App production deployment repository: `ohi-stack/onegodian-app-deploy`
- WordPress runtime: `https://onegodian.org`
- App runtime: `https://app.onegodian.com`

## Canonical WordPress routes

- Member Dashboard: `https://onegodian.org/member-dashboard/`
- Member Profile: `https://onegodian.org/member-profile/`
- Community Directory: `https://onegodian.org/members/`
- Login / Account: `https://onegodian.org/my-account/`
- Identity & Belief Mapper: `https://onegodian.org/belief-mapper/`
- OneGodian Journey: `https://onegodian.org/onegodian-journey/`
- OneGodian Time: `https://onegodian.org/onegodian-time/`
- OneGodian Date Converter: `https://onegodian.org/onegodian-date-converter/`

Important: `/members/` is the community/member directory. It is not the member dashboard.

## App responsibility

The deployed App may provide member-facing discovery, routing, summaries, and API-backed experiences where the relevant bridge is implemented and verified.

The App must not silently become authoritative for:

- WooCommerce orders
- WordPress membership recognition
- private Mapper answers
- BuddyPress community state
- protected WordPress content
- credential issuance

## Mapper surfaces

The App Lite Belief Mapper and the authenticated Members Mapper are separate surfaces.

The Lite App experience may remain a low-friction educational reflection with its own protocol/API contract.

The Members v2.2.0 WordPress experience uses seven administrator-configurable question slots, private consent-gated responses, and self-selected Journey stages. No automatic identity assignment is permitted.

## OTS-V5

The App may display OTS-V5 companion dates or link to the WordPress Time tools. Gregorian timestamps remain source-of-record values for interoperability unless a later approved contract states otherwise.

## Deployment boundary

Repository synchronization does not establish that the WordPress plugin has been installed or staging-verified on the live OneGodian.org environment.

A production App build must continue to pass repository-root install, lint, build, and runtime smoke checks independently of the WordPress plugin deployment.
