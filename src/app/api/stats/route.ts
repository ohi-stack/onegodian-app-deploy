import { NextResponse } from 'next/server';
import { appPages, deploymentStandard, pluginBridges } from '@/lib/app-content';

export async function GET() {
  return NextResponse.json({
    platform: 'OneGodian App',
    status: 'operational-staged',
    deployment: deploymentStandard,
    counts: {
      pages: appPages.length,
      wordpressPluginBridges: pluginBridges.length,
      apiEndpoints: 6,
    },
    modules: appPages.map((page) => page.route.replace('/', '') || 'home'),
    bridges: pluginBridges.map((bridge) => ({ slug: bridge.slug, name: bridge.name, status: bridge.status })),
    timestamp: new Date().toISOString(),
  });
}
