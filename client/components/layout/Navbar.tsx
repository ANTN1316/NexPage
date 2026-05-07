import { useState } from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "@/data/landing";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-[80px] flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-xl tracking-tight">
          Nex<span className="text-[#0B7A4B]">Page</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-base font-normal hover:text-[#0B7A4B] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#produto"
            className="px-6 py-3 rounded-lg border border-[#0B7A4B] text-[#0B7A4B] text-base font-normal hover:bg-[#0B7A4B]/10 transition-colors whitespace-nowrap"
          >
            Ver demonstração
          </a>
          <a
            href="#contato"
            className="px-6 py-3 rounded-lg border border-[#0B7A4B] bg-[#0B7A4B] text-white text-base font-normal hover:bg-[#0B7A4B]/90 transition-colors whitespace-nowrap"
          >
            Iniciar teste gratuito
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0F0F0F] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navigationLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-base font-normal py-2 hover:text-[#0B7A4B] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#produto"
              className="w-full px-6 py-3 rounded-lg border border-[#0B7A4B] text-[#0B7A4B] text-base font-normal text-center"
              onClick={() => setMenuOpen(false)}
            >
              Ver demonstração
            </a>
            <a
              href="#contato"
              className="w-full px-6 py-3 rounded-lg border border-[#0B7A4B] bg-[#0B7A4B] text-white text-base font-normal text-center"
              onClick={() => setMenuOpen(false)}
            >
              Iniciar teste gratuito
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
