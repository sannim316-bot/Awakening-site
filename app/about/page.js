import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export const metadata = { title: 'About — Awakening' };

const VALUES = [
  {
    title: 'Scripture First',
    body: 'We shape our life together around the Bible — read honestly, taught clearly, and lived out practically.',
  },
  {
    title: 'Real Community',
    body: 'Faith grows in relationship. We meet in small groups where people are known, not just counted.',
  },
  {
    title: 'Open Doors',
    body: 'Wherever you are on your journey, there is a seat for you here — no pretending required.',
  },
];

export default function About() {
  return (
    <main>
      <SiteHeader />
      <PageBanner
        eyebrow="Who We Are"
        title="Our story, in brief"
        blurb="Awakening started around a kitchen table in 2014 and has grown into a community across Austin still committed to that same simple rhythm: gather, grow, go."
      />

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="border-t border-gold/40 pt-6">
              <h3 className="mb-3 font-display text-xl text-parchment">{v.title}</h3>
              <p className="text-sm leading-relaxed text-parchment/70">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square overflow-hidden bg-ink-soft">
  <img src="/pic2.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
</div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">Leadership</p>
            <h2 className="mb-4 font-display text-3xl text-parchment">Meet our pastors</h2>
            <p className="max-w-md text-sm leading-relaxed text-parchment/70">
              Our team leads with humility and open hands — as fellow learners, not distant
              figures. We would love the chance to meet you in person.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
