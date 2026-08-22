import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact — Awakening' };

export default function Contact() {
  return (
    <main>
      <SiteHeader />
      <PageBanner
        eyebrow="Reach Out"
        title="We'd love to hear from you"
        blurb="New here, need prayer, or just have a question? Send us a note below."
      />

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">Address</p>
              <p className="text-sm text-parchment/70">
                Riverside Hall, 14 Meridian Way,
                <br />
                Austin, TX 78701
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">Email</p>
              <p className="text-sm text-parchment/70">hello@awakening.org</p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">Phone</p>
              <p className="text-sm text-parchment/70">+1 (512) 555-0142</p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">Gathering Times</p>
              <p className="text-sm text-parchment/70">Sundays, 9:30am &amp; 11:15am</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
