import { NextResponse } from 'next/server';
import { appPages, deploymentStandard, pluginBridges } from '@/lib/app-content';

export async function GET() {
  return NextResponse.json({
    app: 'OneGodian App',
    domain: 'app.onegodian.com',
    version: '1.1.0-production-staged',
    deployment: deploymentStandard,
    pages: appPages.map((page) => ({ title: page.title, route: page.route, status: page.status })),
    apis: ['/api/health', '/api/manifest', '/api/tools', '/api/stats', '/api/members/health', '/api/members/manifest'],
    wordpressPluginBridges: pluginBridges.map((bridge) => ({
      name: bridge.name,
      slug: bridge.slug,
      wordpressBaseUrl: bridge.wordpressBaseUrl,
      healthEndpoint: bridge.healthEndpoint,
      manifestEndpoint: bridge.manifestEndpoint,
      status: bridge.status,
    })),
    timestamp: new Date().toISOString(),
  });
}
