import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SocialIcons from '@/components/SocialIcons';

export const metadata = { title: 'Media — The Household' };

const MESSAGES = [
  { title: 'Steady in the Waiting', tag: 'Psalms of Ascent · Pt. 4' },
  { title: 'Bread for the Journey', tag: 'Psalms of Ascent · Pt. 3' },
  { title: 'Songs on the Way Up', tag: 'Psalms of Ascent · Pt. 2' },
  { title: 'Why We Climb Together', tag: 'Psalms of Ascent · Pt. 1' },
];

const STORY_IMAGES = ['/pic2.jpg', '/pic 3.jpg', '/pic 4.jpg', '/pic 5.jpg', '/pic 6.jpg', '/pic 1.jpg'];

export default function Media() {
  return (
    <main>
      <SiteHeader />
      <PageBanner
        eyebrow="Watch, Listen, and Follow"
        title="Messages and Events"
        blurb="Catch up on recent activities, or go into previous series, events, or activities at your own pace and comfort."
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

      <section className="border-y border-line bg-ink-soft px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm uppercase tracking-widest2 text-parchment/70">Listen On</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-parchment transition-colors hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.64 6.8l-1.6 7.55c-.12.54-.44.67-.9.42l-2.48-1.83-1.2 1.15c-.13.13-.24.24-.5.24l.18-2.55 4.64-4.19c.2-.18-.04-.28-.32-.1l-5.73 3.61-2.47-.77c-.54-.17-.55-.54.11-.8l9.65-3.72c.45-.17.84.1.7.79z" />
              </svg>
              Telegram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-parchment transition-colors hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.13 14.44a.62.62 0 01-.86.21c-2.35-1.44-5.3-1.76-8.79-.96a.63.63 0 01-.28-1.22c3.82-.87 7.1-.5 9.72 1.1.3.18.4.57.21.87zm1.17-2.6a.78.78 0 01-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 11-.45-1.5c3.63-1.1 8.14-.57 11.23 1.34.37.23.49.72.26 1.07zm.1-2.7c-3.23-1.92-8.55-2.1-11.63-1.16a.94.94 0 11-.55-1.8c3.53-1.07 9.41-.86 13.12 1.34a.94.94 0 11-.94 1.62z" />
              </svg>
              Spotify
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <p className="mx-auto mb-8 max-w-6xl text-xs uppercase tracking-widest2 text-gold">Media Stories</p>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {STORY_IMAGES.map((src) => (
            <div key={src} className="aspect-square overflow-hidden border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink-soft px-6 py-16 text-center md:px-10">
        <p className="mb-6 text-xs uppercase tracking-widest2 text-gold">Social Mediums</p>
        <SocialIcons size="lg" className="justify-center" />
      </section>

      <Footer />
    </main>
  );
}