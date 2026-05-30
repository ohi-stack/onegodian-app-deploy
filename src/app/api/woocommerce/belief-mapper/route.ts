import { NextResponse } from 'next/server';

const requiredEnv = [
  'NEXT_PUBLIC_WORDPRESS_URL',
  'WOOCOMMERCE_CONSUMER_KEY',
  'WOOCOMMERCE_CONSUMER_SECRET',
  'BELIEF_MAPPER_PREMIUM_PRODUCT_ID',
];

function getConfig() {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  return {
    missing,
    wordpressUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL,
    premiumProductId: process.env.BELIEF_MAPPER_PREMIUM_PRODUCT_ID,
    premiumPlusProductId: process.env.BELIEF_MAPPER_PREMIUM_PLUS_PRODUCT_ID,
  };
}

export async function GET() {
  const config = getConfig();

  if (config.missing.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        module: 'belief_mapper_woocommerce_bridge',
        message: 'WooCommerce bridge environment variables are not fully configured.',
        missing: config.missing,
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    module: 'belief_mapper_woocommerce_bridge',
    wordpressUrl: config.wordpressUrl,
    products: {
      premium: config.premiumProductId,
      premiumPlus: config.premiumPlusProductId || null,
    },
    checkoutRoutes: {
      premium: `/api/woocommerce/belief-mapper/checkout?tier=premium`,
      premiumPlus: `/api/woocommerce/belief-mapper/checkout?tier=premium-plus`,
    },
  });
}
