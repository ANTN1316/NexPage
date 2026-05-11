export default function DigitalEra() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="w-full lg:w-1/2 flex-shrink-0 reveal">
            <p className="text-white text-2xl lg:text-3xl font-semibold mb-4">
              Seu negócio com presença digital de
            </p>
            <div className="overflow-hidden">
              <p
                className="text-white font-semibold uppercase leading-none"
                style={{
                  fontSize: "clamp(56px, 9vw, 96px)",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#FFF",
                }}
              >
                VERDADE
              </p>
              <p
                className="font-semibold uppercase leading-none"
                style={{
                  fontSize: "clamp(56px, 9vw, 96px)",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#0B7A4B",
                  color: "transparent",
                }}
              >
                NO AR.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:pt-4 reveal">
            <p className="text-white text-lg lg:text-xl font-normal leading-relaxed">
              A NexPage cria páginas objetivas para quem precisa explicar bem o
              que vende e receber contatos com mais facilidade.
            </p>
            <p className="text-white/80 text-base font-light leading-relaxed">
              Antes do layout, alinhamos oferta, público e ação principal. Assim
              cada seção tem uma função clara.
            </p>
            <p className="text-white/80 text-base font-light leading-relaxed">
              O resultado é um site leve, responsivo e profissional, sem excesso
              de texto nem aparência genérica.
            </p>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 text-center reveal">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl mx-auto">
            Design direto, boa performance e foco em contato real.
          </h2>
        </div>
      </div>
    </section>
  );
}
