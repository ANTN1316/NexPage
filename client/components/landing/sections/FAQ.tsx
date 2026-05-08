import { faqItems } from "@/data/landing";

export default function FAQ() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24" id="faq">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div className="reveal">
            <p className="text-[#0B7A4B] text-sm font-semibold uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              Dúvidas comuns antes de começar um projeto digital.
            </h2>
            <p className="mt-5 text-white/70 text-base font-light leading-relaxed">
              A ideia é deixar o caminho claro desde o primeiro contato, com
              escopo, prazo e entrega bem definidos.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="reveal polish-card group rounded-2xl border border-[#242424] bg-[#101010] p-5 lg:p-6"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <summary className="cursor-pointer list-none text-white text-lg font-normal flex items-center justify-between gap-4">
                  {item.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-[#03FF88] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 pr-10 text-white/70 text-sm font-light leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
