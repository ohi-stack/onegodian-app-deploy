import { NextResponse } from 'next/server';
import { deploymentStandard } from '@/lib/app-content';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'onegodian-app',
    domain: 'app.onegodian.com',
    status: 'healthy',
    surface: 'public-member-app',
    deployment: deploymentStandard,
    message: 'onegodian-app-deploy is the only deployment repository for app.onegodian.com',
    timestamp: new Date().toISOString(),
  });
}
