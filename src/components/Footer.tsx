const FOOTER_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Puntos de venta", href: "#puntos-de-venta" },
  { label: "Recetas", href: "#recetas" },
  { label: "Contacto", href: "#contacto" },
] as const;

type SocialIconName = "instagram" | "facebook" | "linkedin";

const SOCIAL_LINKS: { label: string; icon: SocialIconName }[] = [
  { label: "Instagram", icon: "instagram" },
  { label: "Facebook", icon: "facebook" },
  { label: "LinkedIn", icon: "linkedin" },
];

export function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[#1e1e96] px-6 py-12 text-[#f3e5bc] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-8">
        <nav aria-label="Navegación del pie de página">
          <ul className="flex flex-col items-center gap-2 md:items-start">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-alegreya text-[14px] uppercase leading-none transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3e5bc] sm:text-[16px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center">
          <img
            src="/logo-header.svg"
            alt="GINTHEÉS"
            className="h-auto w-[180px] sm:w-[205px]"
          />

          <p className="mt-5 font-alegreya text-[15px] uppercase text-[#c59e31] sm:text-[17px]">
            Contacto
          </p>

          <div className="mt-2 flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.icon}
                href="#"
                aria-label={`${social.label} — enlace pendiente`}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#c59e31] text-[#c59e31] transition-all duration-200 hover:bg-[#c59e31] hover:text-[#1e1e96] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3e5bc]"
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-center font-alegreya text-[12px] uppercase leading-[1.4] md:text-right md:text-[14px]">
          Todos los derechos reservados Kronos 2026
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.3" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M13.7 20v-7h2.35l.35-2.73H13.7V8.53c0-.79.22-1.33 1.37-1.33h1.47V4.76c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6v2.01H8.6V13h2.34v7h2.76Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M6.4 8.2A1.6 1.6 0 1 0 6.4 5a1.6 1.6 0 0 0 0 3.2ZM5 9.6h2.8V19H5V9.6Zm4.55 0h2.68v1.28h.04c.37-.7 1.28-1.55 2.64-1.55 2.82 0 3.34 1.86 3.34 4.28V19h-2.8v-4.78c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.23-1.82 2.52V19h-2.5V9.6Z" />
    </svg>
  );
}
