# OneGodian App Navigation & UI Upgrade

## Purpose

This document defines the upgraded navigation and user interface standard for `app.onegodian.com` and the connected OneGodian ecosystem surfaces.

The App is the public/member-facing product surface. It should feel clear, premium, fast, mobile-first, and connected to the entire ecosystem without exposing internal operator controls.

## Primary Navigation

Use this top-level navigation order:

1. Dashboard
2. Ecosystem
3. OMOS
4. Members
5. Products
6. Learning
7. Registry
8. Capital
9. Galaxy
10. Media
11. Tools
12. Settings

## Mobile Navigation

Use a bottom navigation bar with the five most important user actions:

1. Home
2. Products
3. Members
4. OMOS
5. More

The More screen should reveal:

- Ecosystem
- Registry
- Capital
- Galaxy
- Media
- Tools
- Certificates
- Settings

## Dashboard UI Sections

The dashboard should include:

### Welcome Panel

Title: `Welcome to the OneGodian App`

Copy: `Your central dashboard for OneGodian products, memberships, learning, OMOS tools, certificates, registry records, capital access, and ecosystem updates.`

Primary CTA: `Explore Ecosystem`
Secondary CTA: `View Products`

### Status Cards

- Membership Status
- Product Access
- Certificates
- OMOS Alignment
- Registry Records
- Capital Notices

### Ecosystem Grid

Cards:

- OneGodian.org — Education, archives, philosophy, and public explanation.
- OneGodian.com — Commerce, digital products, books, courses, and merchandise.
- U OneGodian — Courses, certifications, learning dashboards, and training.
- OMOS — Operational intelligence, identity architecture, and alignment tools.
- Capital — Capital products, disclosures, Zolfi, Instryx, and investor readiness.
- Galaxy — Lore, worlds, species, timelines, and exploratory systems.
- QuantumOHI — Enterprise-facing systems and technical positioning.
- QRV Network — Verification, credentials, registry infrastructure, and trust layer.

## Visual Design Standard

Use the premium OneGodian visual system:

- Deep navy / obsidian background
- Gold highlights
- Purple energy accents
- Cinematic cards
- Rounded glass panels
- High-contrast typography
- Clear CTAs
- Minimal clutter
- Mobile-first spacing

## Component Classes

Recommended reusable classes:

- `og-shell`
- `og-topbar`
- `og-sidebar`
- `og-mobile-nav`
- `og-card`
- `og-card-grid`
- `og-hero-panel`
- `og-status-card`
- `og-route-badge`
- `og-cta-primary`
- `og-cta-secondary`

## Route Ownership

### App Surface

Allowed:

- Member dashboards
- Product access
- Certificates
- Registry viewer
- OMOS viewer
- Capital notice viewer
- Learning overview
- Media gallery
- Tools launcher

### Console Surface

Not allowed inside App:

- ACC execution controls
- deployment controls
- operator approvals
- private logs
- adapter administration
- policy mutation
- kill-switch controls

## Production Acceptance Checklist

- Navigation renders on desktop and mobile.
- All top-level routes compile.
- All menu links resolve.
- Dashboard has real OneGodian content.
- No placeholder lorem ipsum remains.
- Mobile bottom navigation works.
- `/api/health` returns operational status.
- `/api/manifest` lists routes, plugins, and connected nodes.
- `/api/tools` lists user-facing tools only.
- `/api/stats` returns safe public/member-facing stats.
- App does not expose console-only functions.
