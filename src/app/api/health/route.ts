import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'onegodian-app',
    domain: 'app.onegodian.com',
    status: 'healthy',
    surface: 'public-member-app',
    timestamp: new Date().toISOString(),
  });
}
