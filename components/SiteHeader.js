'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SocialIcons from './SocialIcons';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Giving', href: '/giving' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-ink px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Awakening" className="h-24 w-auto md:h-24" />
        </Link>

        <div className="flex items-center gap-6">
          <SocialIcons className="hidden sm:flex" />
          <div className="hidden h-6 w-px bg-line sm:block" />
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Open menu"
            className="flex items-center gap-3 text-sm uppercase tracking-widest2 text-parchment transition-colors hover:text-gold"
          >
            Menu
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-ink transition-opacity duration-500 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4 md:px-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Awakening" className="h-24 w-auto md:h-24" />
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-sm uppercase tracking-widest2 text-parchment transition-colors hover:text-gold"
          >
            Close
            <span className="text-lg leading-none">&times;</span>
          </button>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-14 md:grid-cols-2 md:px-10 md:py-20">
          <nav>
            <ul className="space-y-5">
              {NAV_LINKS.map((link, i) => (
                <li
                  key={link.href}
                  className={`transition-all duration-500 ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                  }`}
                  style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-parchment transition-colors hover:text-gold md:text-5xl"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8 self-end text-sm text-parchment/80">
            <div>
              <p className="mb-2 font-semibold uppercase tracking-widest2 text-gold">Address</p>
              <p>oko oba,<br />Agege</p>
            </div>
            <div>
              <p className="mb-2 font-semibold uppercase tracking-widest2 text-gold">Email</p>
              <p>awakening.com</p>
            </div>
            <div>
              <p className="mb-2 font-semibold uppercase tracking-widest2 text-gold">Contact</p>
              <p>+234 901 234 5678</p>
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
}
