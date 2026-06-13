import { NextResponse } from 'next/server';
import { getBridgeBySlug } from '@/lib/app-content';

export async function GET() {
  const bridge = getBridgeBySlug('onegodian-members');

  return NextResponse.json({
    module: 'OneGodian Members',
    slug: 'members',
    status: 'bridge-ready',
    route: '/members',
    bridge,
    appEndpoints: ['/api/members/manifest', '/api/members/health'],
    wordpressPages: [
      '/member-dashboard/',
      '/member-certificate/',
      '/member-resources/',
      '/membership-pricing/',
      '/my-account/'
    ],
    timestamp: new Date().toISOString(),
  });
}
