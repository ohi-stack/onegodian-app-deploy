import { NextResponse } from 'next/server'; import { routes, wpBridgeShortcodes } from '@/data/appRegistry';
export async function GET(){return NextResponse.json({
 app:'OneGodian App', version:'1.3.0-member-gateway', domain:'app.onegodian.com',
 domainRole:'public/member-facing app gateway',
 modules:['identity','membership','contributors','creator-network','affiliate','certificates','products','media','learning','registry','tools','settings','ecosystem'],
 routes,
 wordpressPluginBridge:{source:'OneGodian Members Plugin v1.7.x contributor/creator/affiliate work',shortcodes:wpBridgeShortcodes},
 domainSeparation:{
  app:'public/member-facing app gateway',
  console:'operator/admin/control plane',
  capital:'capital operations',
  org:'identity, education, community, documentation',
  com:'commerce, products, services, payments'
 },
 compliance:{contributions:'Voluntary support only; no equity, securities, loans, bonds, investment contracts, or promised returns.',payments:'This app does not process contributions directly unless a payment backend is connected.',privilegedControls:'Excluded from app surface.'},
 apis:['/api/health','/api/manifest','/api/tools','/api/stats']
});}