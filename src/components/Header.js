import { useState } from 'react';
import logo from '../image/Amit Neon Sound System Logo.png';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950 text-white shadow-lg">
      <div className="flex w-full items-center justify-between gap-2 px-3 py-4 sm:gap-4 sm:px-6">
        <a href="#home" onClick={() => setMenuOpen(false)} className="group flex shrink-0 items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 sm:gap-3">
          <img src={logo} alt="Amit Sound System logo" width="1254" height="1254" className="h-12 w-12 shrink-0 rounded-lg object-contain sm:h-20 sm:w-20" />
          <span className="brand-name">
            <span className="brand-name-primary">Amit</span>
            <span className="brand-name-secondary">Sound System</span>
            <span className="brand-name-accent" aria-hidden="true" />
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map(({ label, href }) => (
            <a key={label} href={href} className="navigation-link rounded text-sm font-medium text-slate-300 hover:text-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"><span className="navigation-label">{label}</span></a>
          ))}
        </nav>

        <a href="#book-event" className="hidden rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 lg:inline-flex">Book an Event <span className="ml-2" aria-hidden="true">↗</span></a>

        <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} className="ml-auto shrink-0 rounded-lg border border-slate-700 p-2 text-slate-200 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 lg:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <img src={logo} alt="" aria-hidden="true" width="1254" height="1254" className="h-12 w-12 shrink-0 rounded-lg object-contain sm:h-20 sm:w-20" />
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="space-y-1 border-t border-white/10 px-5 pb-5 pt-3 lg:hidden">
          {navigation.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)} className="navigation-link block rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-400"><span className="navigation-label">{label}</span></a>
          ))}
          <a href="#book-event" onClick={() => setMenuOpen(false)} className="mt-3 block rounded-lg bg-amber-400 px-4 py-3 text-center text-sm font-bold text-slate-950 hover:bg-amber-300">Book an Event ↗</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
