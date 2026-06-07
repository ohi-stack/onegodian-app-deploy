import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    service: 'onegodian-app-tools',
    domain: 'app.onegodian.com',
    tools: [
      {
        id: 'registry',
        name: 'Registry Viewer',
        route: '/registry',
        status: 'production-staged',
      },
      {
        id: 'members',
        name: 'Member Access',
        route: '/members',
        status: 'production-staged',
      },
      {
        id: 'learning',
        name: 'Learning Gateway',
        route: '/learning',
        status: 'production-staged',
      },
      {
        id: 'capital',
        name: 'Capital Readiness',
        route: '/capital',
        status: 'production-staged',
      },
      {
        id: 'omos',
        name: 'OMOS Runtime Reference',
        route: '/omos',
        status: 'production-staged',
      },
    ],
    timestamp: new Date().toISOString(),
  });
}
