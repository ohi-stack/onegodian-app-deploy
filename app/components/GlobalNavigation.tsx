import Link from 'next/link';

const primaryItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/registry', label: 'Registry' },
  { href: '/members', label: 'Members' },
  { href: '/products', label: 'Products' },
  { href: '/capital', label: 'Capital' },
  { href: '/omos', label: 'OMOS' },
  { href: '/learning', label: 'Learning' },
];

const utilityItems = [
  { href: '/tools', label: 'Tools' },
  { href: '/media', label: 'Media' },
  { href: '/docs', label: 'Docs' },
  { href: '/settings', label: 'Settings' },
];

export default function GlobalNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">OneGodian</div>
          <div className="truncate text-lg font-bold tracking-tight text-white">App</div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {primaryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/dashboard"
          className="shrink-0 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/20"
        >
          Open Dashboard
        </Link>
      </div>

      <div className="border-t border-white/5 lg:hidden">
        <nav aria-label="Mobile navigation" className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:px-6">
          {[...primaryItems, ...utilityItems].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
