# onegodian-app-deploy

Deployment-ready Next.js application for `app.onegodian.com`.

This repository is now the production-facing source of truth for the OneGodian Everything App deployment.

The earlier development/source repository was:

```txt
ohi-stack/onegodian-app
```

The deploy repository now carries the consolidated app direction for Hostinger-compatible deployment, route standards, domain separation, and public/member-facing app behavior.

## Production domain

```txt
https://app.onegodian.com
```

## Purpose

The OneGodian App is the public and member-facing experience layer for the OneGodian ecosystem.

It provides identity-facing and member-facing application routes, including dashboards, ecosystem navigation, registry viewing, products, certificates, tools, media, settings, documentation, and connected platform access.

## Domain Separation Rule

App = experience.

Console = control.

The OneGodian App must not contain internal command-console features, privileged operator tools, ACC execution controls, OCP policy mutation, OEG execution routing, adapter administration, approval queues, kill-switch controls, internal audit/log mutation tools, deployment controls, or administrative command surfaces.

Internal command/control functions belong under the separate OneGodian Console surface at:

```txt
https://console.onegodian.com
```

## Allowed App Areas

Public/member-facing features may live in the app, including:

```txt
/dashboard
/ecosystem
/registry
/tools
/members
/certificates
/products
/media
/settings
/docs
/galaxy
/time
/time/dual-dating
/omos
/capital
/learning
/api/health
/api/manifest
/api/tools
/api/stats
```

## Restricted Console-Only Areas

Do not place these inside the OneGodian App:

```txt
ACC
agent administration
OCP authorization controls
OEG execution routing
workflow administration
policy editing
approvals
audit mutation
internal logs
adapters
deployment controls
kill-switch controls
```

## Required root structure

Hostinger should detect this repository as a valid Next.js project from the repository root.

```txt
package.json
package-lock.json
next.config.js
tsconfig.json
tailwind.config.ts
postcss.config.js
src/
prisma/
public/
.env.example
```

## Required scripts

```bash
npm install
npm run lint
npm run build
npm run start
```

## Environment variables

Set these in Hostinger or the cloud hosting panel. Do not commit real secrets.

```env
NEXT_PUBLIC_APP_URL=https://app.onegodian.com
NEXTAUTH_URL=https://app.onegodian.com
NEXTAUTH_SECRET=
AUTH_TRUST_HOST=true
DATABASE_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Hostinger deployment settings

```txt
Repository: ohi-stack/onegodian-app-deploy
Root directory: .
Install command: npm install
Build command: npm run build
Start command: npm run start
Node version: 20 LTS or 22 LTS
```

## DNS

Use the DNS target supplied by Hostinger.

For CNAME routing:

```txt
Type: CNAME
Name: app
Value: Hostinger-provided target
```

For IP routing:

```txt
Type: A
Name: app
Value: server IP
```

## Deployment rule

Only deploy after:

```bash
npm install
npm run lint
npm run build
```

all pass from the repository root.

## Current standard

If a feature is public-facing or member-facing, it may live in the App.

If a feature is operator-facing, privileged, administrative, or execution-governing, it belongs in the Console.

## Production priority

Keep `app.onegodian.com` synchronized with this deploy repository after every content, routing, integration, or UI update.
