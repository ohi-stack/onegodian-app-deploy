# Production Content Sync — May 30, 2026

## Deployment Evidence
Hostinger is deploying the public OneGodian App from:

- Repository: `ohi-stack/onegodian-app-deploy`
- Branch: `main`
- Root directory: `./`
- Framework: `Next.js`
- Node version: `20.x`
- Auto-deployment: enabled

## Confirmed Repository State
The deploy repository already contains a real-content homepage at `src/app/page.tsx` with:

- OneGodian App public/member positioning
- Dashboard, Galaxy, Registry, Time, Members, OMOS, Capital, Media, Products, Learning, and Ecosystem module cards
- Production status panel
- Ecosystem directory links
- Console separation language

## Remaining Content Gaps
The following routes still need deeper production content beyond compact placeholder cards:

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

## Required Public Content Standard
Every public/member page should include:

1. Clear page title and route purpose.
2. Real OneGodian ecosystem content.
3. Public/member-facing language only.
4. No operator-only Console controls.
5. Mobile-readable card layout.
6. Status labels for unfinished features: `Preview`, `Coming Soon`, `Documentation Mode`, or `In Development`.

## Priority Content Additions

### Dashboard
The dashboard should present:

- Ecosystem Status
- Member Resources
- Registry Access
- Certificate Viewer
- Product & Service Access
- Education Links
- Media Center
- Settings

### Ecosystem
The ecosystem page should include:

- OneGodian.org — public identity, institutional explanation, education, archives
- OneGodian.com — commerce, store, merchandise, books, memberships, founder products
- u.OneGodian.com — education, courses, certifications, onboarding
- app.OneGodian.com — unified public/member app gateway
- galaxy.OneGodian.com — galaxy, discovery, worldbuilding, interactive systems
- OMOS.OneGodian.com — OMOS protocol, specification, and alignment system
- QuantumOHI.com — enterprise-facing technology, infrastructure, OHI positioning
- QRV.Network — verification and credential infrastructure

### Digital Transformation & Media Platforms
Add or preserve this section:

- OneGodian Cloud™ — decentralized storage, processing, file management, media hosting, and ecosystem infrastructure.
- OneGodian Web3 Platform™ — decentralized web infrastructure for identity, registries, digital assets, verification, and platform interoperability.
- Vote on Everything™ — decentralized voting and governance participation for polls, proposals, member feedback, and structured participation.
- OneGodian Knowledge Base & OHI / AI LLM — documents, training, archives, FAQs, ecosystem guidance, and controlled AI-assisted support.

Required disclaimer:

> AI-enhanced does not mean AI-governed. All systems remain subject to OneGodian authorship, human review, OHI™ alignment, documentation standards, and clear operational control.

## Build Verification
Before every production push:

```bash
npm install
npm run lint
npm run build
```

## Live Route Verification
After Hostinger deployment completes:

```bash
curl -I https://app.onegodian.com/
curl -I https://app.onegodian.com/dashboard
curl -I https://app.onegodian.com/ecosystem
curl -I https://app.onegodian.com/registry
curl -I https://app.onegodian.com/tools
curl -I https://app.onegodian.com/api/health
curl -I https://app.onegodian.com/api/manifest
```

## Governance Boundary
`app.onegodian.com` is the public/member application. Operator/admin/runtime control surfaces belong on `console.onegodian.com`, not inside this deployment repository.
