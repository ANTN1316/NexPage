import { pricingPlans } from "@/data/landing";

export default function Pricing() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24" id="precos">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 lg:mb-14 reveal">
          <p className="text-[#0B7A4B] text-sm font-semibold uppercase mb-4">
            PLANOS E PREÇOS
          </p>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl mx-auto">
            Escolha o formato certo para o seu momento.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <article
              key={plan.name}
              className={`reveal polish-card rounded-2xl border p-6 lg:p-8 flex flex-col min-h-[430px] ${
                plan.featured
                  ? "border-[#0B7A4B] bg-[#0B7A4B]"
                  : "border-[#242424] bg-[#101010]"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`text-2xl font-semibold ${
                      plan.featured ? "text-[#0F0F0F]" : "text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <span className="rounded-full bg-[#0F0F0F] px-3 py-1 text-xs font-semibold text-white">
                      Mais escolhido
                    </span>
                  )}
                </div>
                <p
                  className={`mt-5 text-4xl lg:text-5xl font-semibold ${
                    plan.featured ? "text-[#0F0F0F]" : "text-white"
                  }`}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-5 text-sm font-light leading-relaxed ${
                    plan.featured ? "text-[#0F0F0F]/75" : "text-white/70"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm ${
                      plan.featured ? "text-[#0F0F0F]" : "text-white"
                    }`}
                  >
                    <span className="mr-2">+</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`fluid-link mt-auto w-fit rounded-full border px-5 py-2.5 text-sm font-normal ${
                  plan.featured
                    ? "glass-button text-[#0F0F0F]"
                    : "solid-button text-white"
                }`}
              >
                Começar agora
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
