import { processSteps } from "@/data/landing";

export default function Process() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24" id="processo">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <div className="w-full lg:w-[38%] reveal">
            <p className="type-eyebrow mb-4">
              Nosso processo
            </p>
            <h2 className="type-section text-3xl sm:text-4xl lg:text-5xl">
              Do briefing ao site no ar, sem complicar.
            </h2>
          </div>

          <div className="w-full lg:w-[62%] grid grid-cols-1 md:grid-cols-3 gap-5">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className="reveal polish-card rounded-2xl border border-[#242424] bg-[#101010] p-6 min-h-[260px] flex flex-col justify-between"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="type-mono text-sm">
                  {step.number}
                </span>
                <div className="mt-10">
                  <h3 className="type-card-title text-xl">
                    {step.title}
                  </h3>
                  <p className="type-body mt-3 text-sm">
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
