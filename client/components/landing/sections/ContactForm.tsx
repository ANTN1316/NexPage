import { FormEvent } from "react";

const whatsappNumber = "5521999731008";

function getFormValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = getFormValue(formData, "name");
    const company = getFormValue(formData, "company");
    const pageType = getFormValue(formData, "pageType");
    const goal = getFormValue(formData, "goal");
    const timeline = getFormValue(formData, "timeline");
    const investment = getFormValue(formData, "investment");
    const details = getFormValue(formData, "details");

    const message = [
      "Olá, quero iniciar um projeto com a NexPage.",
      "",
      `Nome: ${name}`,
      `Empresa/marca: ${company}`,
      `Tipo de página: ${pageType}`,
      `Objetivo principal: ${goal}`,
      `Prazo desejado: ${timeline}`,
      `Investimento previsto: ${investment}`,
      "",
      `Detalhes: ${details || "Ainda quero alinhar os detalhes."}`,
    ].join("\n");

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;
  };

  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24" id="contato">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div className="reveal">
            <p className="type-eyebrow mb-4">
              Fale com a gente
            </p>
            <h2 className="type-section text-3xl sm:text-4xl lg:text-5xl">
              Conte o básico e seguimos pelo WhatsApp.
            </h2>
            <p className="type-body mt-5 text-base lg:text-lg">
              Com poucas respostas, já entendemos o tipo de página, prazo e
              investimento ideal.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="polish-card rounded-2xl border border-[#242424] bg-[#101010] p-5">
                <strong className="type-mono block text-2xl">24h</strong>
                <span className="type-ui mt-2 block">
                  retorno médio
                </span>
              </div>
              <div className="polish-card rounded-2xl border border-[#242424] bg-[#101010] p-5">
                <strong className="type-mono block text-2xl">100%</strong>
                <span className="type-ui mt-2 block">
                  conversa direta
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal polish-card rounded-2xl lg:rounded-3xl border border-[#242424] bg-[#101010] p-6 lg:p-8"
          >
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] md:grid-cols-2 gap-3 sm:gap-4">
              <label className="flex flex-col gap-2">
                <span className="type-ui text-ink-secondary/72">Nome</span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-[15px] font-medium tracking-[-0.01em] text-ink-subheading outline-none transition-colors placeholder:text-ink-disabled/42 focus:border-[#0B7A4B]"
                  placeholder="Seu nome"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="type-ui text-ink-secondary/72">Empresa ou marca</span>
                <input
                  required
                  name="company"
                  type="text"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-[15px] font-medium tracking-[-0.01em] text-ink-subheading outline-none transition-colors placeholder:text-ink-disabled/42 focus:border-[#0B7A4B]"
                  placeholder="Nome do negócio"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="type-ui text-ink-secondary/72">Tipo de página</span>
                <select
                  required
                  name="pageType"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-[15px] font-medium tracking-[-0.01em] text-ink-subheading outline-none transition-colors focus:border-[#0B7A4B]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Landing page</option>
                  <option>Site institucional</option>
                  <option>Página de vendas</option>
                  <option>Portfólio</option>
                  <option>Ainda não sei</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="type-ui text-ink-secondary/72">
                  Objetivo principal
                </span>
                <input
                  required
                  name="goal"
                  type="text"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-[15px] font-medium tracking-[-0.01em] text-ink-subheading outline-none transition-colors placeholder:text-ink-disabled/42 focus:border-[#0B7A4B]"
                  placeholder="Ex: captar leads, vender serviço"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="type-ui text-ink-secondary/72">Prazo desejado</span>
                <select
                  required
                  name="timeline"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-[15px] font-medium tracking-[-0.01em] text-ink-subheading outline-none transition-colors focus:border-[#0B7A4B]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Até 7 dias</option>
                  <option>Até 15 dias</option>
                  <option>Até 30 dias</option>
                  <option>Sem urgência</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="type-ui text-ink-secondary/72">
                  Investimento previsto
                </span>
                <select
                  required
                  name="investment"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-[15px] font-medium tracking-[-0.01em] text-ink-subheading outline-none transition-colors focus:border-[#0B7A4B]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Até R$ 1.500</option>
                  <option>R$ 1.500 a R$ 3.000</option>
                  <option>R$ 3.000 a R$ 5.000</option>
                  <option>Acima de R$ 5.000</option>
                </select>
              </label>

              <label className="col-span-full flex flex-col gap-2">
                <span className="type-ui text-ink-secondary/72">
                  Detalhes do projeto
                </span>
                <textarea
                  name="details"
                  rows={5}
                  className="resize-none rounded-xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-[15px] font-medium leading-relaxed tracking-[-0.01em] text-ink-subheading outline-none transition-colors placeholder:text-ink-disabled/42 focus:border-[#0B7A4B]"
                  placeholder="Conte o que você vende e quem quer alcançar."
                />
              </label>
            </div>

            <button
              type="submit"
              className="fluid-link solid-button type-ui mt-6 w-full rounded-full border px-6 py-3 text-ink-heading"
            >
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
