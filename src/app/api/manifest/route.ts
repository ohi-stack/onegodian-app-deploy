import { NextResponse } from 'next/server';
import { universityCourseCount, universitySchools } from '@/data/universityCatalog';

export async function GET() {
  return NextResponse.json({
    app: 'OneGodian App',
    domain: 'app.onegodian.com',
    version: '1.2.0-production',
    modules: [
      'dashboard',
      'university',
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
    university: {
      route: '/university',
      canonicalLms: 'https://u.onegodian.org',
      schools: universitySchools.length,
      courses: universityCourseCount,
      enrollmentAuthority: 'University of OneGodian LMS',
      appRole: 'catalog-and-routing-gateway'
    },
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
