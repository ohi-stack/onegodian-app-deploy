import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    platform: 'OneGodian App',
    status: 'operational',
    modules: [
      'dashboard',
      'ecosystem',
      'registry',
      'members',
      'products',
      'media',
      'capital',
      'omos',
      'learning',
    ],
    deployment: 'hostinger-auto-deploy',
    timestamp: new Date().toISOString(),
  });
}
