import { competitors } from "@/data/landing";

export default function Leaders() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24" id="precos">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-[38%] flex-shrink-0 reveal">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold italic leading-snug mb-6">
              Somos <span className="not-italic italic">líderes</span> em todas as categorias
            </h2>
            <p className="text-white text-base lg:text-lg font-normal leading-relaxed">
              Em presença digital, clareza de comunicação e qualidade visual, nosso trabalho se destaca pela soma de estratégia, design e desenvolvimento.
            </p>
          </div>

          <div className="w-full lg:w-[62%] flex flex-col gap-4">
            {competitors.map((comp, index) => (
              <div
                key={comp.name}
                className="reveal flex flex-col gap-1"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="relative h-12 rounded-md bg-[#1F1F1F] overflow-hidden flex items-center">
                  <div
                    className="absolute inset-y-0 left-0 rounded-md transition-all duration-700"
                    style={{
                      width: `${comp.percentage}%`,
                      background: comp.isLeader ? "#03FF88" : "#323232",
                    }}
                  />
                  <span
                    className="relative z-10 ml-4 text-lg font-normal"
                    style={{ color: comp.isLeader ? "#0F0F0F" : "#FFFFFF" }}
                  >
                    {comp.name}
                  </span>
                  <span
                    className="relative z-10 ml-auto mr-4 text-lg font-normal"
                    style={{ color: comp.isLeader ? "#0F0F0F" : "#FFFFFF" }}
                  >
                    {comp.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
