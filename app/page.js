import SiteHeader from '@/components/SiteHeader';
import AccordionHero from '@/components/AccordionHero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <AccordionHero />

      {/* Service times strip */}
      <section className="border-b border-line px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            { label: 'Sunday Gathering', value: '9:30am & 11:15am' },
            { label: 'Wednesday Prayer', value: '7:00pm' },
            { label: 'Discipleship School', value: 'Tuesdays, 6:30pm' },
          ].map((item) => (
            <div key={item.label} className="border-l border-gold/40 pl-6">
              <p className="text-xs uppercase tracking-widest2 text-gold">{item.label}</p>
              <p className="mt-2 font-display text-2xl text-parchment">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest message */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(200,155,60,0.2),transparent_60%)]" />
            <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest2 text-parchment/30">
              Add sermon photo here
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">Latest Message</p>
            <h2 className="mb-4 font-display text-3xl leading-tight text-parchment md:text-4xl">
              Steady in the Waiting
            </h2>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-parchment/70">
              A message on holding faith and patience together, from our ongoing series on
              the Psalms of ascent.
            </p>
            <a
              href="/media"
              className="inline-flex w-fit items-center gap-2 border-b border-gold pb-1 text-sm text-gold transition-colors hover:text-gold-soft"
            >
              Watch the full message
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-line bg-ink-soft px-6 py-16 text-center md:px-10">
        <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">New Here?</p>
        <h2 className="mx-auto mb-6 max-w-xl font-display text-3xl leading-tight text-parchment md:text-4xl">
          We&apos;d love to save you a seat this Sunday.
        </h2>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 border border-gold px-6 py-3 text-sm uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          Plan Your Visit
        </a>
      </section>

      <Footer />
    </main>
  );
}
