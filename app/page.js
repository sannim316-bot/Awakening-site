import SiteHeader from "@/components/SiteHeader";
import AccordionHero from "@/components/AccordionHero";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    day: "Sundays",
    name: "Character and Community Study",
    time: "9:00AM - 10:30AM",
  },
  { day: "Fridays", name: "Life and Light Service", time: "4:30PM - 7:00PM" },
  {
    day: "Mondays - Thursdays",
    name: "Discovery Class",
    time: "4:00PM - 5:30PM",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <AccordionHero />

      {/* Service times strip */}
      <section className="border-b border-line px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {SERVICES.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 90}
              className="border-l border-gold/40 pl-6"
            >
              <p className="text-xs uppercase tracking-widest2 text-gold">
                {item.day}
              </p>
              <p className="mt-2 font-display text-2xl leading-tight text-parchment">
                {item.name}
              </p>
              <p className="mt-2 text-sm text-parchment/70">{item.time}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Strongholds */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <Reveal className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pic 4.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(200,155,60,0.2),transparent_60%)]" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">
              Our Strongholds
            </p>
            <h2 className="mb-4 font-display text-3xl leading-tight text-parchment md:text-4xl">
              Our Schools and Development Programmes
            </h2>
            <p className="mb-4 max-w-md text-sm leading-relaxed text-parchment/70">
              Our collective edu-strategies for empowerment and liberation.
              Advance knowledge and life in ministry, industry, leadership,
              national development, and building.
            </p>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-parchment/70">
              For people who yearn to be usable vessels of Kingdom advancement
              and representatives of Christ on Earth.
            </p>
            <a
              href="/about"
              className="inline-flex w-fit items-center gap-2 border-b border-gold pb-1 text-sm text-gold transition-colors hover:text-gold-soft"
            >
              Explore our strongholds
              <span aria-hidden="true">&rarr;</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-line bg-ink-soft px-6 py-16 text-center md:px-10">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">
            Reach Out
          </p>
          <h2 className="mx-auto mb-5 max-w-xl font-display text-3xl leading-tight text-parchment md:text-4xl">
            We&apos;d love to meet you, would you?
          </h2>
          <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-parchment/70">
            New here? Need a family, a fellowship place, or a place and people
            to grow and build a life of faith with? Reach out to us — a real
            functional person will get back to you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-gold px-6 py-3 text-sm uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Reach Out
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
