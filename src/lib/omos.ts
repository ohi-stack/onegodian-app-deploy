const DEFAULT_OMOS_URL = 'https://omos.onegodian.com';

export type OmosManifest = {
  id: string;
  name: string;
  fullName?: string;
  version: string;
  status: string;
  canonicalHost: string;
  routes?: { public?: string[]; api?: string[] };
  orchestration?: Record<string, unknown>;
  appBridge?: Record<string, unknown>;
  links?: Record<string, string>;
};

export function getOmosManifestUrl() {
  return process.env.OMOS_MANIFEST_URL || `${DEFAULT_OMOS_URL}/api/manifest`;
}

export function getOmosBaseUrl() {
  const explicit = process.env.OMOS_RUNTIME_URL || process.env.NEXT_PUBLIC_OMOS_URL;
  if (explicit) return explicit.replace(/\/$/, '');

  return getOmosManifestUrl().replace(/\/api\/manifest\/?$/, '');
}

export async function getOmosManifest(): Promise<OmosManifest> {
  const response = await fetch(getOmosManifestUrl(), {
    next: { revalidate: 60 },
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`OMOS manifest request failed: ${response.status}`);
  }

  return response.json();
}

export async function getOmosHealth() {
  const response = await fetch(`${getOmosBaseUrl()}/api/health`, {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`OMOS health request failed: ${response.status}`);
  }

  return response.json();
}
