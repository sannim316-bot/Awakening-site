export default function PageBanner({ eyebrow, title, blurb }) {
  return (
    <section className="relative overflow-hidden border-b border-line px-6 py-24 md:px-10 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(200,155,60,0.18),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(124,139,111,0.18),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">{eyebrow}</p>
        <h1 className="mb-5 font-display text-4xl leading-tight text-parchment md:text-5xl">{title}</h1>
        {blurb && <p className="max-w-xl text-sm leading-relaxed text-parchment/70">{blurb}</p>}
      </div>
    </section>
  );
}
