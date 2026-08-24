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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <header
        className={`sticky top-0 z-40 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line bg-ink px-4 transition-all duration-300 sm:px-6 md:px-10 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="The Household"
            className={`w-auto transition-all duration-300 ${
              scrolled ? 'h-10 sm:h-12 md:h-14' : 'h-14 sm:h-16 md:h-20'
            }`}
          />
        </Link>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
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
        className={`fixed inset-0 z-50 overflow-y-auto bg-ink transition-opacity duration-500 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line px-4 py-4 sm:px-6 md:px-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="The Household" className="h-14 w-auto shrink-0 sm:h-16 md:h-20" />
          <button
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center gap-2 text-sm uppercase tracking-widest2 text-parchment transition-colors hover:text-gold"
          >
            Close
            <span className="text-lg leading-none">&times;</span>
          </button>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-2 md:px-10 md:py-20">
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

          <div className="space-y-8 self-end break-words text-sm text-parchment/80">
            <div>
              <p className="mb-2 font-semibold uppercase tracking-widest2 text-gold">Address</p>
              <p>220001, Ile Ife,<br />Osun State, Nigeria, Africa.</p>
            </div>
            <div>
              <p className="mb-2 font-semibold uppercase tracking-widest2 text-gold">Email</p>
              <p>thehousehold.light@gmail.com</p>
              <p>www.thehousehold.org</p>
            </div>
            <div>
              <p className="mb-2 font-semibold uppercase tracking-widest2 text-gold">Contact</p>
              <p>+234 704 1600 950</p>
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
}
