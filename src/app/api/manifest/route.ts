import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    app: 'OneGodian App',
    domain: 'app.onegodian.com',
    version: '1.0.0-production',
    modules: [
      'dashboard',
      'ecosystem',
      'registry',
      'members',
      'products',
      'media',
      'capital',
      'omos',
      'learning'
    ],
    apis: ['/api/health','/api/manifest','/api/tools','/api/stats']
  });
}
