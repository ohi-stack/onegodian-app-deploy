# OneGodian App Production Checklist

## Build

- npm install
- npm run lint
- npm run build
- npm run start

## Routes

- /dashboard
- /ecosystem
- /registry
- /tools
- /members
- /certificates
- /products
- /media
- /settings
- /docs

## APIs

- /api/health
- /api/manifest
- /api/tools
- /api/stats

## Navigation

- desktop navigation
- mobile navigation
- footer links
- ecosystem links

## Security

- SSL enabled
- secrets not committed
- environment variables configured
- no Console-only routes exposed

## Deployment

- commit pushed to main
- Hostinger deployment successful
- deployment logs reviewed
- live app verified

## Future Console Separation

Verify these remain absent from the App deployment:

- ACC
- OCP
- OEG
- agents
- approvals
- audit mutation
- internal logs
- adapter administration
