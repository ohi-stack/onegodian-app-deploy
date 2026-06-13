import { NextResponse } from 'next/server';
import { appPages, pluginBridges } from '@/lib/app-content';

export async function GET() {
  return NextResponse.json({
    service: 'onegodian-app-tools',
    domain: 'app.onegodian.com',
    tools: appPages.map((page) => ({
      id: page.route.replace('/', '') || 'home',
      name: page.title,
      route: page.route,
      status: page.status,
      actions: page.actions,
    })),
    wordpressPluginBridges: pluginBridges.map((bridge) => ({
      name: bridge.name,
      slug: bridge.slug,
      wordpressBaseUrl: bridge.wordpressBaseUrl,
      healthUrl: `${bridge.wordpressBaseUrl}${bridge.healthEndpoint}`,
      adminUrl: `${bridge.wordpressBaseUrl}${bridge.adminUrl}`,
      tools: bridge.tools,
      status: bridge.status,
    })),
    timestamp: new Date().toISOString(),
  });
}
