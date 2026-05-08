import { FormEvent } from "react";

const whatsappNumber = "5521983364508";

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
            <p className="text-[#0B7A4B] text-sm font-semibold uppercase mb-4">
              Fale com a gente
            </p>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Preencha o briefing rápido e continue pelo WhatsApp.
            </h2>
            <p className="mt-5 text-white/70 text-base lg:text-lg font-light leading-relaxed">
              Assim a conversa já começa com contexto, objetivo e prioridade
              claros para montar a melhor proposta.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#242424] bg-[#101010] p-5">
                <strong className="block text-[#03FF88] text-2xl">24h</strong>
                <span className="mt-1 block text-white/60 text-sm">
                  retorno médio
                </span>
              </div>
              <div className="rounded-2xl border border-[#242424] bg-[#101010] p-5">
                <strong className="block text-[#03FF88] text-2xl">100%</strong>
                <span className="mt-1 block text-white/60 text-sm">
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
                <span className="text-white/70 text-sm">Nome</span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-white outline-none transition-colors focus:border-[#0B7A4B]"
                  placeholder="Seu nome"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-white/70 text-sm">Empresa ou marca</span>
                <input
                  required
                  name="company"
                  type="text"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-white outline-none transition-colors focus:border-[#0B7A4B]"
                  placeholder="Nome do negócio"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-white/70 text-sm">Tipo de página</span>
                <select
                  required
                  name="pageType"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-white outline-none transition-colors focus:border-[#0B7A4B]"
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
                <span className="text-white/70 text-sm">
                  Objetivo principal
                </span>
                <input
                  required
                  name="goal"
                  type="text"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-white outline-none transition-colors focus:border-[#0B7A4B]"
                  placeholder="Ex: captar leads, vender um serviço, lançar produto"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-white/70 text-sm">Prazo desejado</span>
                <select
                  required
                  name="timeline"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-white outline-none transition-colors focus:border-[#0B7A4B]"
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
                <span className="text-white/70 text-sm">
                  Investimento previsto
                </span>
                <select
                  required
                  name="investment"
                  className="h-12 rounded-xl border border-white/10 bg-[#0F0F0F] px-4 text-white outline-none transition-colors focus:border-[#0B7A4B]"
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
                <span className="text-white/70 text-sm">
                  Detalhes do projeto
                </span>
                <textarea
                  name="details"
                  rows={5}
                  className="resize-none rounded-xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-white outline-none transition-colors focus:border-[#0B7A4B]"
                  placeholder="Conte o que você vende, quem é seu público e qualquer detalhe importante."
                />
              </label>
            </div>

            <button
              type="submit"
              className="fluid-link solid-button mt-6 w-full rounded-full border px-6 py-3 text-sm font-normal text-white"
            >
              Confirmar e falar no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
