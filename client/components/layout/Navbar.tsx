import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "@/data/landing";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        visible || menuOpen
          ? "bg-[#0F0F0F]/90 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 h-[80px] flex items-center justify-between">
        <Link
          to="/"
          className="fluid-link"
          aria-label="NexPage"
        >
          <img
            src="/GreenLogo.png"
            alt="NexPage"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center gap-5 lg:gap-8">
          {navigationLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="fluid-link text-white text-sm lg:text-base font-normal hover:text-[#0B7A4B]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-500 ease-out ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-500 ease-out ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0F0F0F] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navigationLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="fluid-link text-white text-base font-normal py-2 hover:text-[#0B7A4B]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
