import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export const metadata = { title: 'Media — The Household' };

const MESSAGES = [
  { title: 'Steady in the Waiting', tag: 'Psalms of Ascent · Pt. 4' },
  { title: 'Bread for the Journey', tag: 'Psalms of Ascent · Pt. 3' },
  { title: 'Songs on the Way Up', tag: 'Psalms of Ascent · Pt. 2' },
  { title: 'Why We Climb Together', tag: 'Psalms of Ascent · Pt. 1' },
];

export default function Media() {
  return (
    <main>
      <SiteHeader />
      <PageBanner
        eyebrow="Watch & Listen"
        title="Messages"
        blurb="Catch up on recent teaching, or go back through a past series at your own pace."
      />

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
          {MESSAGES.map((m) => (
            <a
              key={m.title}
              href="#"
              className="group block border border-line transition-colors hover:border-gold"
            >
              <div className="relative aspect-video overflow-hidden bg-ink-soft">
                <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest2 text-parchment/30">
                  Add thumbnail here
                </p>
                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  ▶
                </span>
              </div>
              <div className="p-5">
                <p className="mb-1 text-xs uppercase tracking-widest2 text-gold">{m.tag}</p>
                <h3 className="font-display text-lg text-parchment">{m.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
