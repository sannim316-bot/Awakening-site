'use client';

import { useEffect, useState } from 'react';

const PANELS = [
  {
    id: 'about',
    image: '/pic 4.jpg',
    label: 'About Us',
    eyebrow: 'WHO WE ARE',
    title: 'A people learning to walk together',
    body: 'Awakening is a community finding steady ground in an unsteady world — through worship, honest friendship, and a sha.',
    href: '/about',
    tint: 'from-sage/70 via-sage/30',
  },
  {
    id: 'school',
    image: '/pic 5.jpg',
    label: 'Discipleship School',
    eyebrow: 'GROW',
    title: 'Discipleship School',
    body: 'A twelve-week track for anyone who wants to go deeper — scripture, prayer, and practical formation for everyday life and leadership.',
    href: '/about',
    tint: 'from-rust/70 via-rust/30',
  },
  {
    id: 'giving',
    image: '/pic 6.jpg',
    label: 'Giving',
    eyebrow: 'PARTNER',
    title: 'Give toward what God is building',
    body: 'Your generosity funds the weekly gatherings, the school, and our care for neighbors in need — every gift is stewarded with care.',
    href: '/giving',
    tint: 'from-gold/70 via-gold/30',
  },
  {
    id: 'contact',
    image: '/pic 3.jpg',
    label: 'Contact',
    eyebrow: "LET'S TALK",
    title: "We'd love to meet you",
    body: 'New here, need prayer, or just have a question? Reach out — a real person on our team will get back to you.',
    href: '/contact',
    tint: 'from-parchment/40 via-parchment/10',
  },
];

// Desktop: panels expand sideways (width). Mobile: panels expand downward (height).
const DESKTOP_COLLAPSED = 96;
const DESKTOP_EXPANDED = 480;
const MOBILE_COLLAPSED = 64;
const MOBILE_EXPANDED = 340;

export default function AccordionHero() {
  const [activeId, setActiveId] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mq.matches);
    const onChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <section className="border-b border-line">
      <div className="panel-row flex-col md:h-[600px] md:flex-row">
        {/* Fixed lead image panel */}
        <div className="panel relative h-72 w-full flex-none bg-ink-soft md:h-full md:min-w-[260px] md:flex-1">
          <img src="/pic 1.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,155,60,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(124,139,111,0.25),transparent_55%)]" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <h1 className="max-w-md font-display text-3xl leading-[1.05] text-parchment md:text-5xl">
              Come as you are.
              <br />
              Stay for the family.
            </h1>
            <p className="mt-4 max-w-sm text-sm text-parchment/70">
              Sundays at 9:30 &amp; 11:15am — Riverside Hall, Austin
            </p>
          </div>
        </div>

        {/* Accordion panels */}
        {PANELS.map((panel) => {
          const isActive = activeId === panel.id;
          const sizeStyle = isDesktop
            ? { width: isActive ? DESKTOP_EXPANDED : DESKTOP_COLLAPSED }
            : { height: isActive ? MOBILE_EXPANDED : MOBILE_COLLAPSED };

          return (
            <button
              key={panel.id}
              type="button"
              onMouseEnter={() => isDesktop && setActiveId(panel.id)}
              onMouseLeave={() => isDesktop && setActiveId(null)}
              onFocus={() => setActiveId(panel.id)}
              onBlur={() => setActiveId(null)}
              onClick={() => setActiveId(isActive ? null : panel.id)}
              className="panel group relative w-full border-t border-line text-left md:h-full md:w-auto md:border-l md:border-t-0"
              style={sizeStyle}
              aria-expanded={isActive}
            >
              <img src={panel.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-b ${panel.tint} to-ink-soft`} />

              {/* Collapsed label: horizontal row on mobile, rotated on desktop */}
              <span
                className={`absolute inset-0 flex items-center justify-between px-6 font-display text-lg text-parchment transition-opacity duration-300 md:hidden ${
                  isActive ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {panel.label}
                <span aria-hidden="true" className="text-gold">+</span>
              </span>
              <span
                className={`panel-label absolute inset-0 hidden items-center justify-center font-display text-lg text-parchment transition-opacity duration-300 md:flex ${
                  isActive ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {panel.label}
              </span>

              {/* Expanded content */}
              <div
                className={`relative flex h-full flex-col justify-end p-6 transition-opacity duration-500 md:p-10 ${
                  isActive ? 'opacity-100 delay-150' : 'pointer-events-none opacity-0'
                }`}
              >
                <div className="mb-4 h-px w-10 bg-gold" />
                <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">{panel.eyebrow}</p>
                <h2 className="mb-3 font-display text-2xl leading-tight text-parchment md:text-3xl">
                  {panel.title}
                </h2>
                <p className="mb-6 max-w-xs text-sm text-parchment/75">{panel.body}</p>
                <span className="inline-flex w-fit items-center gap-2 border-b border-gold pb-1 text-sm text-gold">
                  Explore
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}