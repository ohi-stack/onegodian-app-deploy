# ONEGODIAN App Deploy Repository — Canonical Deployment Source

`ohi-stack/onegodian-app-deploy` is the canonical deployment repository for `app.onegodian.com`.

## Source Consolidation Rule

Useful route files, reusable UI components, bridge clients, API handlers, documentation, and deployment scripts from `ohi-stack/onegodian-app` must be moved into this repository before production deployment.

After consolidation, production deployment should read from this repository only.

## Required App Routes

The production app surface must include:

- `/dashboard`
- `/ecosystem`
- `/registry`
- `/members`
- `/products`
- `/media`
- `/capital`
- `/omos`
- `/learning`

## Required API Routes

The production API surface must include:

- `/api/health`
- `/api/manifest`
- `/api/tools`
- `/api/stats`

## WordPress Plugin Bridges

The app bridge layer must support:

- OneGodian Members
- OneGodian Platform
- OneGodian Capital

Bridge authentication should use the `X-OMOS-App-Key` header and environment variable based configuration.

## Production Rule

Do not deploy `ohi-stack/onegodian-app` directly to `app.onegodian.com` after this consolidation. Treat that repository as legacy/source-reference only unless intentionally archived or redirected.
