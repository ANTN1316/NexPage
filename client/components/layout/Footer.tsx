import { brand, navigationLinks } from "@/data/landing";

export default function Footer() {
  return (
    <footer className="bg-[#101010] py-16 lg:py-20 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/GreenLogoDark.png"
              alt={brand.name}
              className="h-14 w-auto object-contain"
            />
            <p className="text-white text-sm mt-3">{brand.tagline}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
            {navigationLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="fluid-link hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white text-xs text-center">
            © {new Date().getFullYear()} {brand.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
