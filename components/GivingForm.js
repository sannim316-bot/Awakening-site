'use client';

import { useState } from 'react';

const GIVING_TYPES = [
  'Love Offering',
  'Weekly/Monthly/Annual Commitment',
  'Congress Support',
  'Seed of Faith',
  'Tithes',
  'Church Planting/Equipment',
  'Missions',
];

const CURRENCIES = ['NGN', 'USD', 'GBP', 'EUR'];

const fieldClass =
  'w-full border border-line bg-transparent px-4 py-3 text-sm text-parchment outline-none transition-colors focus:border-gold';
const labelClass = 'mb-2 block text-xs uppercase tracking-widest2 text-gold';

export default function GivingForm() {
  const [sent, setSent] = useState(false);
  const [joinPartnership, setJoinPartnership] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your giving platform / form endpoint of choice.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mx-auto max-w-xl border border-gold/40 p-8 text-center">
        <p className="font-display text-xl text-parchment">Thank you for your gift</p>
        <p className="mt-2 text-sm text-parchment/70">
          {joinPartnership
            ? "We've received your details and will be in touch about the Partnership Community and the next Quarterly Partners/Financiers Meeting."
            : 'Someone from our team will follow up with the next steps.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="giving-name" className={labelClass}>
            Full Name
          </label>
          <input id="giving-name" name="name" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="giving-phone" className={labelClass}>
            Phone Number
          </label>
          <input id="giving-phone" name="phone" type="tel" required className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="giving-email" className={labelClass}>
          Email Address
        </label>
        <input id="giving-email" name="email" type="email" required className={fieldClass} />
      </div>

      <div className="grid gap-6 sm:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <label htmlFor="giving-type" className={labelClass}>
            Select Type
          </label>
          <select id="giving-type" name="type" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Choose a type
            </option>
            {GIVING_TYPES.map((type) => (
              <option key={type} value={type} className="bg-ink">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="giving-currency" className={labelClass}>
            Currency
          </label>
          <select id="giving-currency" name="currency" required defaultValue="NGN" className={fieldClass}>
            {CURRENCIES.map((c) => (
              <option key={c} value={c} className="bg-ink">
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="giving-amount" className={labelClass}>
            Amount
          </label>
          <input
            id="giving-amount"
            name="amount"
            type="number"
            min="0"
            step="0.01"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex items-start gap-3 border-t border-line pt-6">
        <input
          id="join-partnership"
          type="checkbox"
          checked={joinPartnership}
          onChange={(e) => setJoinPartnership(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-gold"
        />
        <label htmlFor="join-partnership" className="text-sm text-parchment/80">
          Ready to join the Partnership Community? Joining includes an invitation to attend our
          Quarterly Partners/Financiers Meeting.
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 border border-gold px-6 py-3 text-sm uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-ink"
      >
        {joinPartnership ? 'Join Now' : 'Submit Giving'}
      </button>
    </form>
  );
}