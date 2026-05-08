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
                  WebkitTextStrokeColor: "#0B7A4B",
                  color: "transparent",
                }}
              >
                LUGAR!
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:pt-4 reveal">
            <p className="text-white text-lg lg:text-xl font-normal leading-relaxed">
Microempreendedores enfrentam o desafio diário de se destacar. Nossa abordagem combina design minimalista, tecnologia avançada e atendimento personalizado.            </p>
            <p className="text-white/80 text-base font-light leading-relaxed">
O site é mais que presença digital — é ferramenta de conversão. Mapeamos objetivo, público, oferta e pontos de conversão antes de qualquer linha de código            </p>
            <p className="text-white/80 text-base font-light leading-relaxed">
Identidade visual em verde escuro e preto/branco, tipografia Inter, espaçamento padrão e estilo minimalista/moderno/comercial/premium. Performance garantida com páginas leves e responsivas.            </p>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 text-center reveal">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl mx-auto">
Desenvolvimento técnico avançado com foco em resultados para microempreendedores, marcas e negócios.          </h2>
        </div>
      </div>
    </section>
  );
}
