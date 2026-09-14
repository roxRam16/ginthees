import { useEffect, useState } from "react";
import { BotonComprar } from "./BotonComprar";

const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Recetas", href: "#recetas" },
  { label: "Puntos de venta", href: "#puntos-de-venta" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-texto-cuerpo shadow-[0_2px_8px_rgba(9,13,44,0.18)]">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo + nombre */}
        <a
          href="#"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-texto-menu"
          aria-label="GINTHEÉS — Inicio"
        >
          <img
            src="/logo-superior.svg"
            alt="GINTHEÉS"
            className="h-auto w-[130px] sm:w-[140px] lg:w-[152px]"
          />
        </a>

        {/* Links + botón agrupados a la derecha */}
        <div className="flex items-center gap-8 xl:gap-10">
          <ul className="hidden items-center gap-7 lg:flex xl:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative whitespace-nowrap font-alegreya text-[17px] tracking-[0.015em] text-texto-menu/90 transition-all duration-300 hover:text-texto-menu hover:tracking-[0.04em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-texto-menu after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-texto-menu after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón desktop */}
          <div className="hidden lg:block">
            <BotonComprarInline variant="dorado" />
          </div>
        </div>

        {/* Botón hamburguesa mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-texto-menu transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-texto-menu lg:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </nav>

      {/* Panel mobile */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden"
        >
          <div className="flex flex-col gap-2 bg-texto-cuerpo px-4 pb-6 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-3 font-alegreya text-[17px] tracking-[0.015em] text-texto-menu/80 transition-all duration-300 hover:bg-white/10 hover:text-texto-menu hover:tracking-[0.03em] hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-texto-menu"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3">
              <BotonComprarInline variant="dorado" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function BotonComprarInline({
  variant,
}: {
  variant: "dorado" | "azul";
}) {
  return <BotonComprar variant={variant} />;
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </>
      )}
    </svg>
  );
}
