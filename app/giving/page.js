import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import GivingTabs from '@/components/GivingTabs';
import GivingForm from '@/components/GivingForm';

export const metadata = { title: 'Giving — The Household' };

export default function Giving() {
  return (
    <main>
      <SiteHeader />
      <PageBanner
        eyebrow="Join Hands With Us"
        title="Give toward what God is building here"
        blurb="Every gift — large or small — helps fund our weekly gatherings, our missions, and practical care for neighbors in need."
      />

      <section className="border-b border-line px-6 py-16 md:px-10">
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xl italic leading-relaxed text-parchment md:text-2xl">
            &ldquo;He which soweth sparingly shall reap also sparingly; and he which soweth bountifully
            shall reap also bountifully. Every man according as he purposeth in his heart, so let him
            give; not grudgingly, or of necessity: for God loveth a{' '}
            <span className="text-gold">cheerful giver</span>. And God is able to make all grace abound
            toward you; that ye, always having all sufficiency in all things, may abound to every good
            work.&rdquo;
          </p>
        </blockquote>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <GivingTabs />
        </div>
      </section>

      <section id="give-now" className="border-t border-line bg-ink-soft px-6 py-20 md:px-10">
        <h2 className="mx-auto mb-12 max-w-xl text-center font-display text-3xl text-parchment">
          Ready to give?
        </h2>
        <GivingForm />
      </section>

      <Footer />
    </main>
  );
}