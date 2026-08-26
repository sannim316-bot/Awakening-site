import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Reach Out to Us — The Household' };

const PATHWAYS = [
  {
    n: '01',
    title: 'Complaints & Reports',
    body: 'For raising concerns, reporting experiences, or bringing matters requiring attention to the leadership of the Household — including safeguarding matters and misconduct reports.',
  },
  {
    n: '02',
    title: 'Our Holding Centers',
    body: 'Discover and connect with our physical locations and ministry centers — locations, gatherings, contact information, and meeting schedules.',
  },
  {
    n: '03',
    title: 'Speak with a Pastor',
    body: 'For matters requiring pastoral attention, spiritual guidance, or personal support — prayer, counsel, direction, or encouragement.',
  },
  {
    n: '04',
    title: 'Book a Counselling Session',
    body: 'For matters that require a more intentional and private counselling setting with an appropriate member of the ministry\u2019s counselling or pastoral team.',
  },
  {
    n: '05',
    title: 'Courtship Submission',
    body: 'For couples seeking spiritual guidance, accountability, supervision, and pastoral covering throughout their courtship journey.',
  },
  {
    n: '06',
    title: 'New Membership Guide',
    body: 'For those who have recently joined the Household or are considering becoming part of the family — who we are, what we believe, and how to belong.',
  },
  {
    n: '07',
    title: 'Community Inquiry',
    body: 'For anyone seeking to find where they belong within the wider Household community — strongholds, fellowships, and other expressions.',
  },
  {
    n: '08',
    title: 'Administrative Office',
    body: 'For official, operational, financial, organizational, partnership, and documentation matters that do not fall under pastoral, counselling, or community engagement.',
  },
];

export default function Contact() {
  return (
    <main>
      <SiteHeader />
      <PageBanner
        eyebrow="Reach Out"
        title="We'd love to hear from you"
        blurb="Whatever brought you here, there is a clear pathway for you. Choose the area that best describes your need below."
      />

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PATHWAYS.map((p) => (
            <div key={p.n} className="flex flex-col border border-line p-6 transition-colors hover:border-gold">
              <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">{p.n}</p>
              <h3 className="mb-3 font-display text-xl text-parchment">{p.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-parchment/70">{p.body}</p>
              <a
                href="#reach-out-form"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold transition-colors hover:text-parchment"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="reach-out-form" className="border-t border-line px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">Address</p>
              <p className="text-sm text-parchment/70">
                220001, Ile Ife,
                <br />
                Osun State, Nigeria, Africa.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">Email</p>
              <p className="text-sm text-parchment/70">thehousehold.light@gmail.com</p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">Phone</p>
              <p className="text-sm text-parchment/70">+234 704 1600 950</p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">Gathering Times</p>
              <p className="text-sm text-parchment/70">
                Sundays, 9:00AM - 10:30AM
                <br />
                Fridays, 4:30PM - 7:00PM
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}