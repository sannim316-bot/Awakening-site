import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import Reveal from '@/components/Reveal';

export const metadata = { title: 'About — The Household' };

/* Renders a scripture reference with its text in a quiet, set-apart block. */
function Scripture({ reference, children, className = '' }) {
  return (
    <blockquote className={`border-l border-gold/40 pl-5 ${className}`}>
      <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">{reference}</p>
      <p className="whitespace-pre-line text-sm italic leading-relaxed text-parchment/70">
        {children}
      </p>
    </blockquote>
  );
}

const ACTS =
  '[7]And upon the first day of the week, when the disciples came together to break bread, Paul preached unto them, ready to depart on the morrow; and continued his speech until midnight.\n[8]And there were many lights in the upper chamber, where they were gathered together.';

const ISAIAH =
  '[8]Thus saith the LORD, In an acceptable time have I heard thee, and in a day of salvation have I helped thee: and I will preserve thee, and give thee for a covenant of the people, to establish the earth, to cause to inherit the desolate heritages;\n[9]That thou mayest say to the prisoners, Go forth; to them that are in darkness, Shew yourselves. They shall feed in the ways, and their pastures shall be in all high places.';

const MISSION = [
  {
    letter: 'a',
    title: 'Emancipation',
    body: 'saving lost souls and territories through outreaches, and evangelism.',
  },
  {
    letter: 'b',
    title: 'Preservation',
    body: 'preserving faith and lives of people from perishability "decline in quality of Faith and Life" through renewal of mind by the word of Faith and commitment to helping people achieve life’s standard of living in the assembly of Faith.',
  },
  {
    letter: 'c',
    title: 'Liberation',
    body: 'To make people free by Truth (variety of knowledge) and standard education.',
  },
  {
    letter: 'd',
    title: 'Unity',
    body: 'building an alliance network in and for the body of Christ to establish Faith based systems and institutions on earth to preserve Faith and Life.',
  },
];

const MANDATE = [
  {
    title: 'To raise and preserve a people of faith for the coming of our Lord Jesus Christ.',
    reference: 'Luke 18:8',
    text: '[8]I tell you that he will avenge them speedily. Nevertheless when the Son of man cometh, shall he find faith on the earth?',
    answer: 'Yes!',
  },
  {
    title: 'To prepare the Saint for kingdom service and work.',
    reference: '2 Timothy 3:17',
    text: '[17]That the people of God may be perfect, thoroughly furnished unto all good works.',
  },
  {
    title: 'To establish a family of God as a transgenerational preservation strategy.',
    reference: 'Psalms 78:4-7',
    text: '[4]We will not hide them from their children, shewing to the generation to come the praises of the LORD, and his strength, and his wonderful works that he hath done.\n[5]For he established a testimony in Jacob, and appointed a law in Israel, which he commanded our fathers, that they should make them known to their children:\n[6]That the generation to come might know them, even the children which should be born; who should arise and declare them to their children:\n[7]That they might set their hope in God, and not forget the works of God, but keep his commandments:',
  },
  {
    title: 'To build unity systems for, and in the body of Christ.',
    lead: 'And So, he gave us, an Apostolic and teaching ministry...',
    reference: 'Ephesians 4:12-13',
    text: '[12]For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ:\n[13]Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fullness of Christ:',
  },
  {
    title:
      'To aid and pioneer territorial transformation and usher kingdom governance and leadership towards preservation of faith and life on earth.',
    reference: 'Matthew 5:13-16',
    text: '[13]Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men.\n[14]Ye are the light of the world. A city that is set on an hill cannot be hid.\n[15]Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house.\n[16]Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.',
    also: {
      reference: 'Matthew 28:18-20',
      text: '[18]And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth.\n[19]Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:\n[20]Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.',
    },
  },
];

const STORY = [
  'Beyond the many personal encounters, experiences, visions, and revelations through which God has spoken and revealed His purposes to us, there is a story, a story of obedience, divine sending, and a burden for a people and a territory.',
];

const STORY_2 = [
  'Our journey began in Atan, Ogun State, where Apostle Timothy Olugbenga, alongside Pastor Samuel Olawale, Pastor Israel Adebayo, Brother Temiloluwa Gboyega, and a few other brethren, were already serving together in fellowship and pursuing the purposes of God.',
  'But the Lord began to speak concerning a greater assignment.',
  'God placed Osun State, Nigeria upon our hearts as a harvest field. We understood Osun to be a place of peace, a territory that would become Our Jerusalem, and we received the command to carry the light of God into its towns, cities, and villages.',
];

const STORY_3 = [
  'With faith in the word of the Lord, we went into Osun State, Nigeria, leaving what was familiar and embracing the territory to which God had sent us.',
  'We came with a burden for souls, We came with a passion to raise men, We came with a mandate to establish the light of God, And we came with a responsibility to preserve the territory entrusted to us.',
  'Since then, the Lord has continued to lead us through different seasons of growth, challenges, fellowship, ministry, discipleship, prayer, evangelism, and the raising of people who will become expressions of Christ in their generation.',
  'What began as a simple response to a divine instruction has continued to grow into a wider Kingdom assignment.',
  'In the 2025–2026 season, the Lord brought us into a deeper dimension of commissioning into ministry, giving greater clarity to what He had begun. We became increasingly conscious that our presence in Osun was not accidental. We were not merely building a ministry in a particular location; we were responding to a divine assignment concerning a territory.',
];

const CONVICTIONS = [
  'We are sent through Osun State, Nigeria to the world,',
  'We believe Osun is a harvest,',
  'We believe Osun is our place of peace,',
  'We believe the light of God must shine across its towns, villages, communities, and generations,',
  'We believe men must be raised, families strengthened, communities transformed, and the purposes of God established,',
  'And we believe we have been entrusted with a preservation mandate, to stand in the place of light, truth, righteousness, and Kingdom influence for the sake of the territory.',
];

const STORY_CLOSE = [
  'Our story is therefore not simply about where we came from or where we are today.',
  'It is about why we are sent, It is a story of faith in God’s word.',
  'A story of obedience to divine instruction, A story of a people responding to a harvest, A story that is still being written, And as we continue this journey, our prayer is that the light of God will shine brighter across Osun State, Nigeria to the world; that towns and villages will encounter Christ; that men and women will be transformed; that leaders will be raised; that families will be strengthened; and that the purposes of God concerning this territory will be fulfilled.',
];

const LEADER = [
  'Timothy Olugbenga is a lover of God and His Kingdom, a teacher of faith and life, and a passionate kingdom establisher and advancer. He is committed to seeing people encounter God, discover their purpose, become equipped for life and kingdom service, and participate meaningfully in God’s purposes on the earth.',
  'Called and given to the ministry in his late teenage years. Timothy’s journey into ministry was marked by several profound experiences with God. Among these was a major encounter with Jesus in a trance-like experience, where he saw Jesus appear to him as Light. Through these and subsequent experiences, he received revelations concerning ministry, the Kingdom of God, and various expressions of God’s purpose for mankind and earth.',
  'These encounters birthed a strong burden in him to equip people and build systems that preserve and advance faith and life. His ministry therefore carries a distinct emphasis on spiritual formation, kingdom advancement, leadership, systems, people development, and the practical expression of faith in society.',
  'Timothy serves as the Lead Partner of The Awakening Global Agenda, a kingdom platform committed to awakening, equipping, unifying, and mobilizing people for God’s purposes across generations and territories. He is also the Family Head of The Household Church, where he provides spiritual leadership and shepherding, cultivating a family of believers committed to growing in Christ, walking in purpose, and advancing the Kingdom together.',
  'Known affectionately as “Apostle Light,” he carries a deep conviction that God has made him a light unto this generation. His ministry seeks not merely to communicate knowledge, but to illuminate people, direct destiny, establish foundations, and raise individuals who can become expressions of God’s wisdom and purpose in their generation.',
  'He is deeply passionate about people and carries a genuine love for their growth, transformation, and fulfillment in God. His vision extends beyond the building of individuals to the building of people, families, communities, institutions, and systems that can faithfully carry God’s purposes from one generation to another.',
];

export default function About() {
  return (
    <main>
      <SiteHeader />
      <PageBanner
        eyebrow="Who We Are"
        title="The Household"
        blurb="A family of faith sent through Osun State, Nigeria to the world to carry the light of God and equip people for life and kingdom service."
      />

      {/* About — anchoring scripture */}
      <section className="border-b border-line px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <Reveal className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pic 1.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(200,155,60,0.2),transparent_60%)]" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">About Us</p>
            <p className="mb-8 font-display text-base leading-relaxed text-parchment/90 md:text-lg">
              The Household is a weekly teaching and apostolic platform committed to equipping
              people in the Word of Faith and establishing them in the atmosphere for life, while
              ushering individuals into encounters with God and the realities of Heaven.
            </p>
            <Scripture reference="Acts 20:7-8">{ACTS}</Scripture>
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="border-b border-line bg-ink-soft px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">Our Vision</p>
            <h2 className="mb-10 max-w-3xl font-display text-3xl leading-tight text-parchment md:text-4xl">
              To preserve faith on earth towards the coming of our Lord Jesus Christ.
            </h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <Scripture reference="Isaiah 49:8-9">{ISAIAH}</Scripture>
            </Reveal>
            <Reveal delay={120}>
              <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">Core burden</p>
              <p className="mb-8 text-sm leading-relaxed text-parchment/70">
                To raise and preserve a people whose faith is alive, established, uncompromised, and
                fruitful until the return of Jesus Christ.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-parchment/70">
                This vision is strongly anchored in Jesus&rsquo; question:
              </p>
              <p className="mb-6 font-display text-xl leading-snug text-parchment">
                &ldquo;Nevertheless when the Son of man cometh, shall he find faith on the
                earth?&rdquo;
                <span className="ml-2 text-sm text-gold">&mdash; Luke 18:8</span>
              </p>
              <p className="text-sm leading-relaxed text-parchment/70">
                That Scripture gives the vision a profound prophetic dimension: The Household thrives
                not only to faith, but to participate in the preservation of faith on the earth until
                Christ returns.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-line px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">Our Mission</p>
            <h2 className="mb-12 max-w-2xl font-display text-3xl leading-tight text-parchment md:text-4xl">
              Four commitments we carry
            </h2>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2">
            {MISSION.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="border-t border-gold/40 pt-6">
                <p className="mb-2 text-xs uppercase tracking-widest2 text-gold">{item.letter}.</p>
                <h3 className="mb-3 font-display text-2xl leading-tight text-parchment">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-parchment/70">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mandate */}
      <section className="border-b border-line bg-ink-soft px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">Our Mandate</p>
            <h2 className="mb-12 max-w-2xl font-display text-3xl leading-tight text-parchment md:text-4xl">
              Our mandate Is
            </h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2">
            {MANDATE.map((item, i) => (
              <Reveal key={item.reference} delay={(i % 2) * 90}>
                <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-4 font-display text-xl leading-snug text-parchment">
                  {item.title}
                </h3>
                {item.lead && (
                  <p className="mb-4 text-sm leading-relaxed text-parchment/60">{item.lead}</p>
                )}
                <Scripture reference={item.reference}>{item.text}</Scripture>
                {item.answer && (
                  <p className="mt-3 pl-5 font-display text-lg text-gold">{item.answer}</p>
                )}
                {item.also && (
                  <Scripture reference={item.also.reference} className="mt-5">
                    {item.also.text}
                  </Scripture>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-b border-line px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">Our Story</p>
            <h2 className="mb-4 font-display text-3xl leading-tight text-parchment md:text-4xl">
              A Journey of Divine Sending, Light, and Preservation
            </h2>
            <p className="mb-10 text-sm uppercase tracking-widest2 text-parchment/50">
              This Is Our Story!
            </p>
          </Reveal>

          {STORY.map((para, i) => (
            <Reveal key={i}>
              <p className="mb-6 text-sm leading-relaxed text-parchment/70">{para}</p>
            </Reveal>
          ))}

          {STORY_2.map((para, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="mb-6 text-sm leading-relaxed text-parchment/70">{para}</p>
            </Reveal>
          ))}

          <Reveal>
            <p className="my-10 border-l border-gold/40 pl-6 font-display text-2xl leading-snug text-parchment">
              It was more than a relocation, It was a sending.
            </p>
          </Reveal>

          {STORY_3.map((para, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="mb-6 text-sm leading-relaxed text-parchment/70">{para}</p>
            </Reveal>
          ))}

          <Reveal>
            <p className="mb-6 mt-12 text-xs uppercase tracking-widest2 text-gold">
              Today, our conviction remains clear
            </p>
            <ul className="mb-12 space-y-4">
              {CONVICTIONS.map((line) => (
                <li
                  key={line}
                  className="border-l border-gold/30 pl-5 text-sm leading-relaxed text-parchment/70"
                >
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden border border-line bg-ink-soft px-6 py-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,155,60,0.18),transparent_65%)]" />
            <p className="relative font-display text-3xl leading-tight text-parchment md:text-4xl">
              We Represent Light through Osun State, Nigeria to the World.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl">
          {STORY_CLOSE.map((para, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="mb-6 text-sm leading-relaxed text-parchment/70">{para}</p>
            </Reveal>
          ))}
          <Reveal>
            <p className="mt-4 font-display text-2xl text-gold">We are sent!</p>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
          <Reveal className="relative aspect-[3/4] overflow-hidden bg-ink-soft md:sticky md:top-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/apostle-light.png"
              alt="Apostle Timothy Olugbenga"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">
              Meet Our Family Head
            </p>
            <h2 className="mb-2 font-display text-3xl leading-tight text-parchment md:text-4xl">
              Apostle Timothy Olugbenga
            </h2>
            <p className="mb-8 text-sm uppercase tracking-widest2 text-parchment/50">
              Apostle Light
            </p>
            {LEADER.map((para, i) => (
              <p key={i} className="mb-5 text-sm leading-relaxed text-parchment/70">
                {para}
              </p>
            ))}
            <p className="mt-8 border-l border-gold/40 pl-5 text-sm leading-relaxed text-parchment">
              At the heart of his life and ministry is a simple but profound burden: to know God,
              make Him known, equip His people, and help establish His purposes on the earth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-line bg-ink-soft px-6 py-16 text-center md:px-10">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-widest2 text-gold">Join The Household</p>
          <h2 className="mx-auto mb-5 max-w-xl font-display text-3xl leading-tight text-parchment md:text-4xl">
            There is room for you in this family
          </h2>
          <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-parchment/70">
            Come and gather with us, grow in the Word of Faith, and take your place in what God is
            doing through Osun State, Nigeria to the world.
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
