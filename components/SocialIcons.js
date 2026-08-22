const icons = {
  facebook: (
    <path d="M13.5 9H15V6.5h-1.8C11.1 6.5 10 7.6 10 9.5V11H8.5v2.5H10V19h2.5v-5.5H14l.5-2.5h-2V9.6c0-.4.2-.6.6-.6z" />
  ),
  instagram: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.2" cy="7.8" r="0.9" />
    </>
  ),
  twitter: (
    <path d="M19 7.3c-.5.2-1 .4-1.6.5.6-.4 1-.9 1.2-1.6-.5.3-1.1.6-1.8.7A2.8 2.8 0 0 0 12 9c0 .2 0 .4.1.6-2.3-.1-4.4-1.2-5.7-2.9-.2.4-.4.9-.4 1.4 0 1 .5 1.8 1.2 2.3-.4 0-.9-.1-1.2-.3v.1c0 1.3 1 2.5 2.2 2.7-.2.1-.5.1-.8.1l-.5-.1c.4 1.1 1.4 1.9 2.7 1.9-1 .8-2.2 1.2-3.6 1.2H5c1.2.8 2.7 1.3 4.2 1.3 5.1 0 7.9-4.2 7.9-7.9v-.4c.5-.4 1-.9 1.4-1.4z" />
  ),
  youtube: (
    <>
      <rect x="4.5" y="7" width="15" height="10" rx="2.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.5 9.8l4 2.2-4 2.2z" />
    </>
  ),
};

export default function SocialIcons({ size = 'sm', className = '' }) {
  const dims = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Object.entries(icons).map(([name, path]) => (
        <a
          key={name}
          href="#"
          aria-label={name}
          className={`${dims} flex items-center justify-center rounded-full border border-line text-parchment/70 transition-colors hover:border-gold hover:text-gold`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            {path}
          </svg>
        </a>
      ))}
    </div>
  );
}
