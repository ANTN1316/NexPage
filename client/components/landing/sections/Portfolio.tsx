import { portfolioItems } from "@/data/landing";

export default function Portfolio() {
  return (
    <section
      className="bg-[#0F0F0F] py-16 lg:py-24 overflow-hidden"
      id="portfolio"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-14 reveal">
          <div>
            <p className="text-[#0B7A4B] text-sm font-semibold uppercase mb-4">
              PROJETOS CONCLUÍDOS
            </p>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-2xl">
              Páginas pensadas para apresentar bem e gerar contato.
            </h2>
          </div>
          <a
            href="#contato"
            className="fluid-link glass-button w-fit rounded-full border px-5 py-2.5 text-sm font-normal text-white"
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
                  <p className="text-white/50 text-sm">{item.category}</p>
                  <h3 className="text-white text-xl font-semibold mt-1">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[#03FF88] text-sm font-semibold whitespace-nowrap">
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
