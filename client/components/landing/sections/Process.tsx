import { processSteps } from "@/data/landing";

export default function Process() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24" id="processo">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <div className="w-full lg:w-[38%] reveal">
            <p className="text-[#0B7A4B] text-sm font-semibold uppercase mb-4">
              Como funciona
            </p>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              Um processo simples para tirar a página do plano e colocar no ar.
            </h2>
          </div>

          <div className="w-full lg:w-[62%] grid grid-cols-1 md:grid-cols-3 gap-5">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className="reveal polish-card rounded-2xl border border-[#242424] bg-[#101010] p-6 min-h-[260px] flex flex-col justify-between"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="text-[#03FF88] text-sm font-semibold">
                  {step.number}
                </span>
                <div className="mt-10">
                  <h3 className="text-white text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-white/70 text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
