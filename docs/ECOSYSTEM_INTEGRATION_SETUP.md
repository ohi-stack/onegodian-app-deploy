# OneGodian App Ecosystem Integration Setup

Production domain: `https://app.onegodian.com`

## Role

The OneGodian App is the public/member-facing experience layer. It mirrors ecosystem status, links to each property, exposes safe manifests, and routes users into commerce, education, Galaxy, Capital, OMOS, QuantumOHI, and verification surfaces.

This repo follows the current-version rule:

> If it is not fully operational, documented, and repeatable, it does not exist in the current version.

## Required sync targets

| Property | Role | Integration type | Status |
|---|---|---|---|
| `OMOS.OneGodian.com` | Protocol/specification node | Manifest + public docs sync | setup |
| `OneGodian.org` | Public identity/institutional site | WordPress plugin/content sync | setup |
| `OneGodian.com` | Store/commerce platform | WooCommerce/product sync | setup |
| `u.OneGodian.com` | LMS/e-learning | plugin/course sync | setup |
| `galaxy.OneGodian.com` | Galaxy console and planet-store gateway | manifest + registry sync | setup |
| `capital.OneGodian.com` | Capital portal | node + plugin + Zolfi/Instryx modules | setup |
| `QuantumOHI.com` | QuantumOHI platform | platform plugin + docs sync | setup |
| `QRV.Network` | Verification network | certificate and record verification sync | setup |

## App pages to maintain

- `/dashboard` — member dashboard and ecosystem status
- `/ecosystem` — ecosystem map
- `/plugins` — installed plugin inventory by property
- `/omos` — OMOS node mirror and protocol links
- `/galaxy` — Galaxy registry and store gateway
- `/capital` — Capital portal status and disclosure links
- `/quantumohi` — QuantumOHI platform status and docs
- `/education` — u.OneGodian.com LMS gateway
- `/commerce` — OneGodian.com product/store gateway
- `/docs` — public-safe documentation index
- `/api/health` — app health
- `/api/manifest` — app manifest
- `/api/ecosystem` — ecosystem property manifest
- `/api/plugins` — plugin/property inventory
- `/api/tools` — public/member tool manifest
- `/api/stats` — non-sensitive app/module status

## Environment variables

Use `.env.example` as the canonical environment contract. Production values must remain outside the repository.

## Sync rules

1. The App consumes manifests; it does not mutate privileged systems.
2. Operator controls remain outside the App.
3. Capital pages must display disclosure-first language.
4. Plugin state shown in App must come from a documented manifest or API response.
5. Every integration must have a documented source, sync cadence, and fallback state.
6. ONEGODIAN, LLC properties should be described as commercial/software/IP/economic infrastructure unless a separate INO governance context is explicitly required.

## Immediate implementation checklist

- [ ] Add `/api/manifest` and `/api/ecosystem` endpoints.
- [ ] Add `/api/plugins`, `/api/tools`, and `/api/stats` endpoints.
- [ ] Add `/ecosystem`, `/plugins`, `/omos`, `/galaxy`, `/capital`, `/quantumohi`, `/education`, and `/commerce` pages.
- [ ] Wire OMOS manifest from `https://omos.onegodian.com/manifest`.
- [ ] Wire Galaxy manifest from `https://galaxy.onegodian.com/manifest` once available.
- [ ] Wire Capital manifest from `https://capital.onegodian.com/manifest` once available.
- [ ] Add plugin inventory cards for OneGodian.org, OneGodian.com, u.OneGodian.com, galaxy.OneGodian.com, capital.OneGodian.com, and QuantumOHI.com.
- [ ] Add smoke tests for health and manifest endpoints.

## Production gate

The integration cannot be labeled production-ready until health, manifest, page routing, and at least one successful external manifest sync are documented and repeatable.
