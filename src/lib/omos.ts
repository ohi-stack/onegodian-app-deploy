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

export function getOmosBaseUrl() {
  return (process.env.OMOS_RUNTIME_URL || DEFAULT_OMOS_URL).replace(/\/$/, '');
}

export async function getOmosManifest(): Promise<OmosManifest> {
  const response = await fetch(`${getOmosBaseUrl()}/api/manifest`, {
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
