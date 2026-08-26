'use client';

import { useState } from 'react';

const TABS = [
  {
    id: 'why',
    label: 'Why Should You Give?',
    items: [
      'God loves a cheerful giver.',
      'Your giving makes the work easy and more impactful.',
      "Your giving helps us preserve people's faith and lives.",
      'Your giving helps us minister to the poor and needy.',
      "Your giving and partnership helps us show mankind God's love and will.",
      "Your giving helps us spread, publish, and establish God's word and intentions to nations beyond our geographic reach.",
    ],
  },
  {
    id: 'give-to-us',
    label: 'Give To Us',
    items: [
      { title: 'Offerings', body: 'A demonstration of gratuity to the Household.' },
      { title: 'Tithes', body: 'A commitment to God.' },
      { title: 'Seed of Faith', body: 'A sacrifice of prayer.' },
      { title: 'Commitment', body: 'A sense of belonging.' },
    ],
  },
  {
    id: 'partner',
    label: 'Partner With Us',
    items: [
      { title: 'Our Congresses', body: 'Let us gather.' },
      { title: 'Our Church Plantings', body: 'Let us build.' },
      { title: 'Our Missions', body: 'Let us reach out.' },
      { title: 'Our Need', body: 'Let us do.' },
    ],
  },
  {
    id: 'how',
    label: 'You Can Give',
    items: [
      {
        title: 'Online',
        body: 'Give a one-time or recurring transaction by card, bank transfer, or payment gateway.',
      },
      {
        title: 'In Person',
        body: 'Give in person by cash or cheque at any of our church locations or the administrative office.',
      },
      {
        title: 'By Mail or Logistics',
        body: 'Give materials, equipment, items, or other tangibles through road mail or cargo systems. Reach out to our administrative office at thehousehold.light@gmail.com or call +234 704 1600 950 for specific guidance.',
      },
    ],
  },
];

export default function GivingTabs() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeId);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            className={`border-b-2 px-4 py-3 text-xs uppercase tracking-widest2 transition-colors ${
              activeId === tab.id
                ? 'border-gold text-gold'
                : 'border-transparent text-parchment/60 hover:text-parchment'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-10">
        {active.id === 'why' ? (
          <ul className="mx-auto max-w-2xl space-y-4">
            {active.items.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-parchment/80">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {line}
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {active.items.map((item) => (
              <div key={item.title} className="border-t border-gold/40 pt-5">
                <h3 className="mb-2 font-display text-lg text-parchment">{item.title}</h3>
                <p className="text-sm leading-relaxed text-parchment/70">{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}