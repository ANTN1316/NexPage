export default function DigitalEra() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="w-full lg:w-1/2 flex-shrink-0 reveal">
            <p className="text-white text-2xl lg:text-3xl font-semibold mb-4">
              Bem-vindo à era do digital em
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
                PRIMEIRO
              </p>
              <p
                className="font-semibold uppercase leading-none"
                style={{
                  fontSize: "clamp(56px, 9vw, 96px)",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#7F0AD8",
                  color: "transparent",
                }}
              >
                LUGAR!
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:pt-4 reveal">
            <p className="text-white text-lg lg:text-xl font-normal leading-relaxed">
              Na construção de sites, todos nós buscamos o mesmo objetivo: transformar visitas em oportunidades reais.
            </p>
            <p className="text-white/80 text-base font-light leading-relaxed">
              O digital representa uma evolução clara. Não apenas de alcançar esse objetivo, mas de ampliá-lo. Nossa abordagem é baseada em um sistema único com três pilares principais projetados para elevar o nível da presença online.
            </p>
            <p className="text-white/80 text-base font-light leading-relaxed">
              O design cria impacto imediato e reforça posicionamento de marca. A estrutura organiza informações com clareza e intenção. A performance garante velocidade, fluidez e consistência em toda navegação.
            </p>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 text-center reveal">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl mx-auto">
            Criação de sites com foco total em resultado para empresas, marcas e negócios.
          </h2>
        </div>
      </div>
    </section>
  );
}
