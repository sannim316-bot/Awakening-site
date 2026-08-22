'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your email service or form endpoint of choice.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-gold/40 p-8 text-center">
        <p className="font-display text-xl text-parchment">Message sent</p>
        <p className="mt-2 text-sm text-parchment/70">
          Thanks for reaching out — someone from our team will reply soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest2 text-gold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-line bg-transparent px-4 py-3 text-sm text-parchment outline-none transition-colors focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest2 text-gold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-line bg-transparent px-4 py-3 text-sm text-parchment outline-none transition-colors focus:border-gold"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest2 text-gold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-line bg-transparent px-4 py-3 text-sm text-parchment outline-none transition-colors focus:border-gold"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 border border-gold px-6 py-3 text-sm uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-ink"
      >
        Send Message
      </button>
    </form>
  );
}
