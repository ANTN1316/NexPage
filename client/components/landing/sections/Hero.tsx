const cubeClasses = [
  "border-[3px] border-[#383838]",
  "bg-[#737373]",
  "bg-[#303030]",
  "bg-[#1B1B1B]",
  "bg-[#474747]",
  "bg-[#575757]",
  "bg-[#1B1B1B]",
  "bg-[#1B1B1B] hidden sm:block",
  "bg-[#353333]",
  "bg-[#8D8D8D]",
  "bg-[#303030]",
  "bg-transparent hidden sm:block",
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0F0F0F] pt-[80px] overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 60% 50%, #1A1A1A 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.8,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-80px)] gap-12 py-16 lg:py-0">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start flex-shrink-0">
            <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:gap-[21px] w-full max-w-[520px] lg:max-w-none">
              {cubeClasses.map((cubeClass, index) => (
                <div
                  key={index}
                  className={`reveal polish-tile aspect-square rounded-xl lg:rounded-2xl ${cubeClass}`}
                  style={{ transitionDelay: `${index * 45}ms` }}
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 reveal">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#7F0AD8]/40 bg-[#7F0AD8]/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#B86CFF]">
              <span className="h-2 w-2 rounded-full bg-[#03FF88] animate-pulse" />
              estratégia, design e código
            </div>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase leading-tight">
              A nova era da presença digital chegou.
            </h1>
            <p className="text-white text-base font-normal max-w-xs">
              Descubra uma maneira totalmente nova de construir sites que convertem.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="#produto"
                className="px-6 py-4 rounded-lg border border-[#7F0AD8] text-[#7F0AD8] text-base font-normal hover:bg-[#7F0AD8]/10 transition-colors"
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                className="px-6 py-4 rounded-lg border border-[#7F0AD8] bg-[#7F0AD8] text-white text-base font-normal hover:bg-[#7F0AD8]/90 transition-colors"
              >
                Iniciar projeto
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 max-w-md">
              {["42+ projetos", "7 dias média", "97% satisfação"].map((metric) => (
                <div key={metric} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs text-white/70">
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
