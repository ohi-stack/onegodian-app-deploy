import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    app: 'OneGodian App',
    domain: 'app.onegodian.com',
    version: '1.1.0-production',
    modules: [
      'dashboard',
      'belief-mapper',
      'ecosystem',
      'registry',
      'members',
      'products',
      'media',
      'capital',
      'omos',
      'learning'
    ],
    beliefMapper: {
      route: '/belief-mapper',
      mode: 'seven-dimension-reflection',
      publicStages: ['Explorer', 'Reflector', 'Aligned', 'Guide'],
      wordpressManifest: 'https://onegodian.org/wp-json/onegodian/v1/belief-mapper/manifest',
      resources: 'https://onegodian.org/belief-mapper-resources/',
      certificateInformation: 'https://onegodian.org/belief-mapper-certificate/',
      dataStorage: 'none-in-public-app'
    },
    apis: ['/api/health','/api/manifest','/api/tools','/api/stats']
  });
}
