import { portfolioItems } from "@/data/landing";
import { Activity, MousePointerClick, TrendingUp, type LucideIcon } from "lucide-react";

const portfolioArt: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Activity, label: "Leads" },
  { icon: TrendingUp, label: "Conversão" },
  { icon: MousePointerClick, label: "Contato" },
];

function PortfolioArt({
  icon: Icon,
  label,
  metric,
}: {
  icon: LucideIcon;
  label: string;
  metric: string;
}) {
  return (
    <div className="absolute bottom-4 right-4 z-10 min-w-[132px] rounded-xl border border-white/10 bg-[#0F0F0F]/84 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-md">
      <div className="flex items-center justify-between gap-3">
        <span className="type-ui text-[11px] text-ink-muted/62">{label}</span>
        <Icon className="h-4 w-4 text-ink-accent" strokeWidth={1.8} />
      </div>
      <span className="type-mono mt-2 block text-sm">{metric}</span>
      <div className="mt-3 flex items-end gap-1">
        {[10, 16, 13, 22, 28].map((height, index) => (
          <span
            key={`${height}-${index}`}
            className="w-full rounded-t-sm bg-[#03FF88]/45"
            style={{ height }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section
      className="bg-[#0F0F0F] py-16 lg:py-24 overflow-hidden"
      id="portfolio"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-14 reveal">
          <div>
            <p className="type-eyebrow mb-4">
              PROJETOS CONCLUÍDOS
            </p>
            <h2 className="type-section max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Páginas pensadas para apresentar bem e gerar contato.
            </h2>
          </div>
          <a
            href="#contato"
            className="fluid-link glass-button type-ui w-fit rounded-full border px-5 py-2.5 text-ink-heading"
          >
            Pedir orçamento
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className="reveal polish-card rounded-2xl border border-[#242424] overflow-hidden bg-[#121212]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="image-card h-[300px] lg:h-[380px]">
                <PortfolioArt {...portfolioArt[index]} metric={item.metric} />
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="image-card__overlay" />
              </div>
              <div className="p-5 border-t border-[#242424] flex items-end justify-between gap-4">
                <div>
                  <p className="type-ui text-ink-muted/62">{item.category}</p>
                  <h3 className="type-card-title mt-1 text-xl">
                    {item.title}
                  </h3>
                </div>
                <span className="type-mono whitespace-nowrap text-sm">
                  {item.metric}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
