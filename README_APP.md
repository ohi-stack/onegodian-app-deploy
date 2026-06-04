# OneGodian App Deployment Surface

Domain: https://app.onegodian.com

Repository: `ohi-stack/onegodian-app-deploy`

## Purpose

This repository is the production deployment surface for the OneGodian App. Hostinger auto-deploys from this repository, so every production route, page, API endpoint, navigation update, and public/member-facing content update must exist here before the live app can update automatically.

## App Responsibility

The App is the public/member-facing ecosystem application layer.

Allowed areas:

- `/dashboard`
- `/ecosystem`
- `/registry`
- `/tools`
- `/members`
- `/certificates`
- `/products`
- `/media`
- `/settings`
- `/docs`
- `/api/health`
- `/api/manifest`
- `/api/tools`
- `/api/stats`

## Excluded Console Areas

Do not deploy internal command/control functions from this repository.

Excluded areas:

- ACC
- OCP
- OEG
- agents
- workflow administration
- approvals
- audit mutation
- adapters
- internal logs
- deployment controls
- kill-switch controls

Those belong to:

https://console.onegodian.com

## Deployment Rule

If it is intended to appear on `app.onegodian.com`, it must exist in this repository.

If it is intended for internal control, it must not exist in this repository.

## Verification Checklist

After each deployment:

- homepage renders real OneGodian App content
- mobile navigation works
- `/dashboard` renders
- `/ecosystem` renders
- `/registry` renders
- `/tools` renders
- `/members` renders
- `/certificates` renders
- `/products` renders
- `/media` renders
- `/docs` renders
- `/api/health` responds
- `/api/manifest` responds
- Console-only routes are not exposed
