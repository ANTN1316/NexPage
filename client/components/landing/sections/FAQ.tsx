import { faqItems } from "@/data/landing";
import { Clock3, FileText, HelpCircle, PenLine, Smartphone } from "lucide-react";

const faqIcons = [Clock3, Smartphone, HelpCircle, PenLine, FileText];

export default function FAQ() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24" id="faq">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div className="reveal">
            <p className="type-eyebrow mb-4">
              FAQ
            </p>
            <h2 className="type-section text-3xl sm:text-4xl lg:text-5xl">
              Dúvidas comuns antes de começar.
            </h2>
            <p className="type-body mt-5 text-base">
              Respostas rápidas sobre prazo, publicação e ajustes futuros.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="reveal polish-card group rounded-2xl border border-[#242424] bg-[#101010] p-5 lg:p-6"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <summary className="type-card-title flex cursor-pointer list-none items-center justify-between gap-4 text-lg">
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(3,255,136,0.1),rgba(255,255,255,0.02))] text-ink-accent">
                      {(() => {
                        const Icon = faqIcons[index % faqIcons.length];
                        return <Icon className="h-5 w-5" strokeWidth={1.75} />;
                      })()}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-ink-accent transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="type-body mt-4 pr-10 text-sm">
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
