import { brand, navigationLinks } from "@/data/landing";

export default function Footer() {
  return (
    <footer className="bg-[#D9D9D9] py-20" id="contato">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#0F0F0F] text-2xl font-semibold">
              Nex<span style={{ color: "#7F0AD8" }}>{brand.highlight}</span>
            </p>
            <p className="text-[#0F0F0F]/60 text-sm mt-1">{brand.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-6 text-[#0F0F0F]/70 text-sm">
            {navigationLinks.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#0F0F0F] transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#produto"
              className="px-6 py-3 rounded-lg border border-[#7F0AD8] text-[#7F0AD8] text-sm font-normal hover:bg-[#7F0AD8]/10 transition-colors"
            >
              Ver demonstração
            </a>
            <a
              href="#contato"
              className="px-6 py-3 rounded-lg border border-[#7F0AD8] bg-[#7F0AD8] text-white text-sm font-normal hover:bg-[#7F0AD8]/90 transition-colors"
            >
              Iniciar projeto
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#0F0F0F]/20">
          <p className="text-[#0F0F0F]/40 text-xs text-center">
            © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
