import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The OneGodian App',
  description:
    'The public and member-facing OneGodian application for dashboard access, time tools, dual dating, ecosystem navigation, registry records, planets, OMOS, products, media, learning, and certificates.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
