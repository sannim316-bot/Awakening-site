import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Awakening" className="h-24 w-auto" />
          <p className="mt-3 max-w-xs text-sm text-parchment/60">
           oko oba agege
          </p>
        </div>
        <div className="text-sm text-parchment/60">
          <p>awakening.com</p>
          <p>+234 123 456 7893</p>
        </div>
        <SocialIcons />
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-line pt-6 text-xs text-parchment/40">
        &copy; {new Date().getFullYear()} Awakening. All rights reserved.
      </p>
    </footer>
  );
}
