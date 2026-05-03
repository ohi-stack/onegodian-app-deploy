import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OneGodian Everything App',
  description: 'The central OneGodian ecosystem app for ODIN registry, planets, systems, tools, media, and platform interfaces.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
