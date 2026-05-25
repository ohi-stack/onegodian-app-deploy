# Deployment Manifest Standard

Repository: `ohi-stack/onegodian-app-deploy`

## Purpose

Every production deployment for `app.onegodian.com` should expose a deterministic manifest contract for:

- monitoring,
- uptime validation,
- deployment auditing,
- runtime verification,
- and infrastructure debugging.

## Required Endpoint

```txt
/api/manifest
```

## Minimum JSON Contract

```json
{
  "name": "onegodian-app",
  "role": "public-member-experience-layer",
  "environment": "production",
  "version": "1.0.0",
  "domain": "app.onegodian.com",
  "status": "operational",
  "timestamp": "ISO-8601",
  "routes": [
    "/dashboard",
    "/ecosystem",
    "/registry",
    "/tools",
    "/members",
    "/certificates",
    "/products",
    "/media",
    "/settings",
    "/docs"
  ]
}
```

## Health Endpoint

The following endpoint should always exist:

```txt
/api/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "onegodian-app",
  "environment": "production"
}
```

## Security Rules

The manifest and health endpoints must NOT expose:

- secrets,
- database credentials,
- internal IP addresses,
- deployment tokens,
- private operator routes,
- adapter infrastructure,
- internal logs,
- ACC execution systems,
- console tooling.

## Production Objective

The deployment repository should eventually support:

- deterministic deployments,
- rollback visibility,
- runtime verification,
- uptime monitoring,
- and infrastructure observability.

Production credibility depends on predictable operational behavior, not conceptual scale.
