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
  youtube: (
    <>
      <rect x="4.5" y="7" width="15" height="10" rx="2.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.5 9.8l4 2.2-4 2.2z" />
    </>
  ),
};

const links = {
  facebook: 'https://www.facebook.com/share/14mMnKwUfwT/',
  instagram: 'https://www.instagram.com/household_of_light?igsi=MXIwNDdkdDk2aWV0NA==&utm_source=ig_contact_invite',
  youtube: 'https://youtube.com/@thehouseholdnetwork?si=xp8N7HMMelZf9LP_',
};

export default function SocialIcons({ size = 'sm', className = '' }) {
  const dims = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Object.entries(icons).map(([name, path]) => (
        <a
          key={name}
          href={links[name]}
          target="_blank"
          rel="noopener noreferrer"
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