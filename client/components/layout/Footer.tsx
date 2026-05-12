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
            <p className="type-body mt-3 text-sm">{brand.tagline}</p>
          </div>

          <div className="type-ui flex flex-wrap justify-center gap-6">
            {navigationLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="fluid-link hover:text-ink-heading"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="type-mono text-center text-xs text-ink-muted/58">
            © {new Date().getFullYear()} {brand.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
