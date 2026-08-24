'use client';

import { useEffect, useRef, useState } from 'react';

const PANELS = [
  {
    id: 'about',
    image: '/pic 4.jpg',
    label: 'About Us',
    eyebrow: 'WHO WE ARE',
    title: 'A family of Faith, a place of encounter',
    body: 'The Household is a community and platform of Faith and life, where people are preserved through the word and spirit of GOD, fellowship with the brethren, prayers, and breaking of bread.',
    href: '/about',
    tint: 'from-sage/70 via-sage/30',
  },
  {
    id: 'discovery',
    image: '/pic 5.jpg',
    label: 'Discovery Class',
    eyebrow: 'BEGIN',
    title: 'Discovery Class',
    body: 'A six week track of transition from unanswered questions to clarified answers on purpose discovery, through the revelation of Christ — for those who want to begin their journey of faith in clarity and precision of purpose and destiny pathways.',
    href: '/about',
    tint: 'from-rust/70 via-rust/30',
  },
  {
    id: 'giving',
    image: '/pic 6.jpg',
    label: 'Giving',
    eyebrow: 'PARTNER',
    title: 'Give to what we are building with God',
    body: 'Your cheerful and willing giving helps sustain the strong community of faith that sustains the spirit, soul, and body of the saints and our developments.',
    href: '/giving',
    tint: 'from-gold/70 via-gold/30',
  },
  {
    id: 'contact',
    image: '/pic 3.jpg',
    label: 'Reach Out',
    eyebrow: "LET'S TALK",
    title: "We'd love to meet you, would you?",
    body: 'New here? Need a family, a fellowship place, or a place and people to grow and build a life of faith with? Reach out to us — a real functional person will get back to you.',
    href: '/contact',
    tint: 'from-parchment/40 via-parchment/10',
  },
];

const PILLARS = ['Love', 'Purpose', 'Encounter', 'Faith', 'Great Grace'];

// Desktop: panels expand sideways (width). Mobile: panels expand downward (height).
// Desktop widths are derived from the viewport so an expanded panel never pushes
// the row into a horizontal scroll on tablets and small laptops.
const MOBILE_COLLAPSED = 64;
const MOBILE_MIN_EXPANDED = 320;
const MOBILE_PADDING = 48; // p-6 top + bottom

function desktopSizes(vw) {
  return {
    collapsed: vw < 1024 ? 64 : 96,
    expanded: Math.round(Math.max(300, Math.min(520, vw * 0.4))),
  };
}

export default function AccordionHero() {
  const [activeId, setActiveId] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [sizes, setSizes] = useState({ collapsed: 96, expanded: 480 });
  const [mobileHeights, setMobileHeights] = useState({});
  const contentRefs = useRef({});
  // Which panel was open when the tap started — captured before focus can change it.
  const activeAtPointerDown = useRef(null);

  // Track the breakpoint and derive desktop panel widths from the viewport.
  useEffect(() => {
    const onResize = () => {
      const vw = window.innerWidth;
      setIsDesktop(vw >= 768);
      setSizes(desktopSizes(vw));
    };
    onResize();
    setMounted(true);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Measure each panel's copy so a mobile panel opens to exactly the height its
  // text needs. Runs after the mobile layout has rendered, otherwise the panels
  // would still be at their desktop widths and every stack would measure tall.
  useEffect(() => {
    if (isDesktop) return undefined;
    const measure = () => {
      setMobileHeights((prev) => {
        const next = {};
        let changed = false;
        for (const [id, el] of Object.entries(contentRefs.current)) {
          if (!el) continue;
          next[id] = el.offsetHeight;
          if (prev[id] !== next[id]) changed = true;
        }
        return changed ? next : prev;
      });
    };
    measure();
    window.addEventListener('resize', measure);
    // Re-measure once webfonts settle — Fraunces reflows the headings.
    if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {});
    return () => window.removeEventListener('resize', measure);
  }, [isDesktop]);

  return (
    <section className="border-b border-line">
      <div className="panel-row flex-col md:h-[600px] md:flex-row">
        {/* Fixed lead image panel */}
        <div className="panel relative h-96 w-full flex-none bg-ink-soft md:h-full md:min-w-[200px] md:flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/pic 1.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,155,60,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(124,139,111,0.25),transparent_55%)]" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <h1 className="max-w-md font-display text-3xl leading-[1.05] text-parchment md:text-5xl">
              Welcome Into The Household
            </h1>
            <p className="mt-3 font-display text-xl text-gold md:text-2xl">A Place Of Encounter</p>
            <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-widest2 text-parchment/70 md:text-xs">
              {PILLARS.map((pillar, i) => (
                <li key={pillar} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden="true" className="h-3 w-px bg-gold/50" />}
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accordion panels */}
        {PANELS.map((panel) => {
          const isActive = activeId === panel.id;
          const mobileExpanded = Math.max(
            MOBILE_MIN_EXPANDED,
            (mobileHeights[panel.id] || 0) + MOBILE_PADDING,
          );
          const sizeStyle = isDesktop
            ? { width: isActive ? sizes.expanded : sizes.collapsed }
            : { height: isActive ? mobileExpanded : MOBILE_COLLAPSED };

          return (
            <a
              key={panel.id}
              href={panel.href}
              onMouseEnter={() => isDesktop && setActiveId(panel.id)}
              onMouseLeave={() => isDesktop && setActiveId(null)}
              onPointerDown={() => {
                activeAtPointerDown.current = activeId;
              }}
              onFocus={() => setActiveId(panel.id)}
              onBlur={() => setActiveId(null)}
              onClick={(e) => {
                // Desktop: the whole panel is the link. Touch: tapping the panel
                // opens or closes it, and only the Explore affordance navigates.
                if (isDesktop || e.detail === 0) return;
                if (e.target.closest('[data-explore]')) return;
                e.preventDefault();
                const wasOpen = activeAtPointerDown.current === panel.id;
                setActiveId(wasOpen ? null : panel.id);
              }}
              className="panel group relative block h-16 w-full border-t border-line text-left md:h-full md:w-24 md:border-l md:border-t-0"
              style={mounted ? sizeStyle : undefined}
              aria-expanded={isActive}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
                <div
                  ref={(el) => {
                    contentRefs.current[panel.id] = el;
                  }}
                >
                  <div className="mb-4 h-px w-10 bg-gold" />
                  <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">{panel.eyebrow}</p>
                  <h2 className="mb-3 font-display text-2xl leading-tight text-parchment md:text-3xl">
                    {panel.title}
                  </h2>
                  <p className="mb-6 max-w-xs text-sm text-parchment/75">{panel.body}</p>
                  <span
                    data-explore
                    className="inline-flex w-fit items-center gap-2 border-b border-gold pb-1 text-sm text-gold"
                  >
                    Explore
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
