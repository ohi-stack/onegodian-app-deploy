# Merge Notes — onegodian-app into onegodian-app-deploy

Date: 2026-05-11

## Source Repositories

- Development/source repository: `ohi-stack/onegodian-app`
- Deployment repository: `ohi-stack/onegodian-app-deploy`

## Consolidation Decision

`onegodian-app-deploy` is now treated as the deployment-ready consolidated repository for `app.onegodian.com`.

The development repository defines the product boundary and domain separation rule for the OneGodian App. The deploy repository defines the Hostinger-compatible deployment layout.

## Preserved Source Rule

From `onegodian-app`:

- App = experience.
- Console = control.
- Public-facing and member-facing features may live in the App.
- Operator-facing, privileged, administrative, execution-governing, approval, audit mutation, adapter, deployment, and kill-switch features belong in the Console/Control Plane, not the App.

## Preserved Deploy Rule

From `onegodian-app-deploy`:

- The deploy repository must keep a valid Next.js app at repository root.
- Hostinger should build from the repository root.
- Required scripts remain `npm install`, `npm run lint`, `npm run build`, and `npm run start`.

## Allowed App Areas

The consolidated app may include:

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

## Restricted Console-Only Areas

Do not place these inside the OneGodian App:

- ACC privileged controls
- agent administration
- OCP authorization controls
- OEG execution routing
- workflow administration
- policy editing
- approvals
- audit mutation
- internal logs
- adapters
- deployment controls
- kill-switch controls

## Practical Merge Status

The deploy repository already contains the deployment-oriented package structure. This merge preserves deploy readiness while adding the source repository's domain separation policy, allowed route map, and app/control boundary.

## Next Required Work

1. Confirm actual app source files are present at the deploy repository root.
2. Run `npm install`.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Deploy only after checks pass.
6. Keep privileged control-plane features in `control.onegodian.com`, not `app.onegodian.com`.
