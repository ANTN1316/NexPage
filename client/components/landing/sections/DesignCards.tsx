import { designCards } from "@/data/landing";
import { Cpu, LayoutDashboard, MessageCircle, type LucideIcon } from "lucide-react";

const designArt: Array<{ icon: LucideIcon; meta: string; bars: string[] }> = [
  {
    icon: LayoutDashboard,
    meta: "Showcase",
    bars: ["w-9/12", "w-7/12", "w-10/12"],
  },
  {
    icon: MessageCircle,
    meta: "Lead flow",
    bars: ["w-8/12", "w-11/12", "w-6/12"],
  },
  {
    icon: Cpu,
    meta: "Stack",
    bars: ["w-10/12", "w-8/12", "w-9/12"],
  },
];

function DotsDecoration() {
  return (
    <svg width="29" height="7" viewBox="0 0 29 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3.5" cy="3.5" r="3.5" fill="#0B7A4B" />
      <circle cx="14.5" cy="3.5" r="3.5" fill="#0B7A4B" />
      <circle cx="25.5" cy="3.5" r="3.5" fill="#0B7A4B" />
    </svg>
  );
}

function ProductArt({ icon: Icon, meta, bars }: (typeof designArt)[number]) {
  return (
    <div className="absolute left-4 top-4 z-10 w-[150px] rounded-xl border border-white/10 bg-[#0F0F0F]/82 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="type-mono text-[10px] text-ink-muted/58">{meta}</span>
        <Icon className="h-4 w-4 text-ink-accent" strokeWidth={1.8} />
      </div>
      <div className="mt-3 grid gap-1.5">
        {bars.map((bar, index) => (
          <span
            key={`${bar}-${index}`}
            className={`h-1.5 rounded-full bg-white/10 ${bar}`}
          >
            <span className="block h-full w-2/3 rounded-full bg-[#03FF88]/55" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DesignCards() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24 overflow-hidden" id="produto">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {designCards.map((card, index) => (
            <article
              key={card.title}
              className="reveal polish-card rounded-2xl border border-[#242424] overflow-hidden flex flex-col bg-[#121212]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between px-5 py-5 border-b border-[#242424]">
                <h3 className="type-card-title text-lg">{card.title}</h3>
                <DotsDecoration />
              </div>
              <div className="image-card flex-1 min-h-[220px] lg:min-h-[300px]">
                <ProductArt {...designArt[index]} />
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="image-card__overlay" />
              </div>
              <div className="px-5 py-5 border-t border-[#242424]">
                <p className="type-body text-center text-base">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
