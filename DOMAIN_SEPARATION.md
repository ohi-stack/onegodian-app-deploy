# OneGodian App Deployment Domain Separation

## Purpose

This repository is the Hostinger-connected deployment repository for:

```txt
https://app.onegodian.com
```

It must remain public/member-facing only.

## Source Relationship

Development source of truth:

```txt
ohi-stack/onegodian-app
```

Deployment repository:

```txt
ohi-stack/onegodian-app-deploy
```

Hostinger deploys from this repository, branch `main`, root directory `./`.

## App vs Console Rule

```txt
App = experience.
Console = control.
```

## app.onegodian.com Allowed Areas

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

## Console-Only Areas Excluded from This Deploy Repo

These must not be deployed through `onegodian-app-deploy`:

- ACC
- agent administration
- OCP
- OEG
- workflow execution controls
- approvals
- audit mutation
- adapters
- internal logs
- deployment controls
- kill-switch controls

Console-only features belong at:

```txt
https://console.onegodian.com
```

## Deployment Rule

Every production content or route update intended for `app.onegodian.com` must be present in this repository before Hostinger can auto-deploy it.

The current Hostinger deployment configuration is:

```txt
Repository: ohi-stack/onegodian-app-deploy
Branch: main
Root directory: ./
Framework: Next.js
Node: 20.x
Auto-deployment: enabled
```

## Production Verification

After each push to `main`, verify:

- build completes successfully
- public routes render
- `/api/health` responds
- `/api/manifest` responds
- no Console-only routes are exposed
- mobile navigation works
- homepage contains real OneGodian content
