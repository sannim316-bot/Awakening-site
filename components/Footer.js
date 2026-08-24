import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-4 py-12 sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="The Household" className="h-24 w-auto" />
          <p className="mt-3 max-w-xs text-sm text-parchment/60">
            220001, Ile Ife, Osun State, Nigeria, Africa.
          </p>
        </div>
        <div className="min-w-0 break-words text-sm text-parchment/60">
          <p>+234 704 1600 950</p>
          <p>thehousehold.light@gmail.com</p>
          <p>www.thehousehold.org</p>
        </div>
        <SocialIcons />
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-line pt-6 text-xs text-parchment/40">
        &copy; {new Date().getFullYear()} The Household. All rights reserved.
      </p>
    </footer>
  );
}
