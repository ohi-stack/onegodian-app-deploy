import { appFooterNavigation, appNavigation } from '@/data/appNavigation';

export function AppNavigation() {
  return (
    <header className="app-nav-shell">
      <a className="brand-mark" href="/">OneGodian App</a>
      <nav className="app-nav-links" aria-label="OneGodian App Navigation">
        {appNavigation.map((item) => (
          <a href={item.href} key={item.href}>{item.label}</a>
        ))}
      </nav>
    </header>
  );
}

export function AppFooter() {
  return (
    <footer className="app-footer-shell">
      {appFooterNavigation.map((group) => (
        <section key={group.title}>
          <h2>{group.title}</h2>
          <nav aria-label={`${group.title} footer navigation`}>
            {group.links.map((link) => (
              <a href={link.href} key={link.href}>{link.label}</a>
            ))}
          </nav>
        </section>
      ))}
    </footer>
  );
}
