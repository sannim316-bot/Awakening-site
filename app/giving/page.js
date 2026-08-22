import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export const metadata = { title: 'Giving — Awakening' };

const METHODS = [
  { title: 'Online', body: 'Give a one-time or recurring gift securely by card or bank transfer.' },
  { title: 'In Person', body: 'Giving boxes are available at both entrances during every gathering.' },
  { title: 'By Mail', body: 'Checks can be mailed to 14 Meridian Way, Austin, TX 78701.' },
];

export default function Giving() {
  return (
    <main>
      <SiteHeader />
      <PageBanner
        eyebrow="Partner With Us"
        title="Give toward what God is building"
        blurb="Every gift — large or small — helps fund our weekly gatherings, the discipleship school, and practical care for neighbors in need."
      />

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {METHODS.map((m) => (
            <div key={m.title} className="border-t border-gold/40 pt-6">
              <h3 className="mb-3 font-display text-xl text-parchment">{m.title}</h3>
              <p className="text-sm leading-relaxed text-parchment/70">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink-soft px-6 py-16 text-center md:px-10">
        <h2 className="mx-auto mb-6 max-w-xl font-display text-3xl text-parchment">Ready to give?</h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-gold px-6 py-3 text-sm uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          Give Now
        </a>
        <p className="mt-4 text-xs text-parchment/40">Connect your giving platform link here</p>
      </section>

      <Footer />
    </main>
  );
}
