import { pricingPlans } from "@/data/landing";

export default function Pricing() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24" id="precos">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 lg:mb-14 reveal">
          <p className="type-eyebrow mb-4">
            PLANOS E PREÇOS
          </p>
          <h2 className="type-section mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
            Escolha o formato certo para o seu momento.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <article
              key={plan.name}
              data-featured-card={plan.featured ? "true" : undefined}
              className={`reveal polish-card rounded-2xl border p-6 lg:p-8 flex flex-col min-h-[430px] ${
                plan.featured
                  ? "border-[#0B7A4B] bg-[#101611]"
                  : "border-[#242424] bg-[#101010]"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`type-card-title text-2xl ${
                      plan.featured ? "text-ink-heading" : ""
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <span className="type-ui rounded-full border border-[#03FF88]/25 bg-[#03FF88]/10 px-3 py-1 text-xs text-ink-accent">
                      Mais escolhido
                    </span>
                  )}
                </div>
                <p
                  className={`type-mono mt-5 text-4xl lg:text-5xl ${
                    plan.featured ? "text-ink-accent" : ""
                  }`}
                >
                  {plan.price}
                </p>
                <p
                  className={`type-body mt-5 text-sm ${
                    plan.featured ? "text-ink-body/78" : ""
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`type-ui leading-relaxed ${
                      plan.featured ? "text-ink-subheading/88" : "text-ink-subheading/86"
                    }`}
                  >
                    <span className="mr-2">+</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`fluid-link type-ui mt-auto w-fit rounded-full border px-5 py-2.5 ${
                  plan.featured
                    ? "glass-button text-ink-heading"
                    : "solid-button text-ink-heading"
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
