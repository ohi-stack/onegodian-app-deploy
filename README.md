# onegodian-app-deploy

Deployment-ready Next.js application for `app.onegodian.com`.

This repository is the Hostinger-compatible deployment mirror for the OneGodian Everything App. The development source of truth remains:

```txt
ohi-stack/onegodian-app
```

The deployable source path in the development repo is:

```txt
apps/web
```

This deployment repository should contain the contents of `apps/web` at the repository root so Hostinger can detect the app as a valid Next.js project.

## Required root structure

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
