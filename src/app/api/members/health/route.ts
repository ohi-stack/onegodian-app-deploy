import { NextResponse } from 'next/server';
import { getBridgeBySlug } from '@/lib/app-content';

export const dynamic = 'force-dynamic';

export async function GET() {
  const bridge = getBridgeBySlug('onegodian-members');
  const source = `${bridge?.wordpressBaseUrl || 'https://onegodian.org'}${bridge?.healthEndpoint || '/wp-json/onegodian-members/v1/health'}`;

  try {
    const response = await fetch(source, { cache: 'no-store' });
    const contentType = response.headers.get('content-type') || '';
    const payload = contentType.includes('application/json') ? await response.json() : { raw: await response.text() };

    return NextResponse.json({
      ok: response.ok,
      status: response.status,
      source,
      bridge: bridge?.name,
      plugin: payload,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        source,
        bridge: bridge?.name,
        error: error instanceof Error ? error.message : 'Unknown OneGodian Members bridge error',
        timestamp: new Date().toISOString(),
      },
      { status: 502 }
    );
  }
}
