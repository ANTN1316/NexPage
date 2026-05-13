const metrics = ["Entrega rápida", "Design responsivo", "Contato direto"];

export default function Hero() {
  return (
    <section
      className="relative isolate w-full bg-[#0F0F0F] overflow-hidden"
      style={{ height: "100svh", minHeight: "100vh", contain: "paint" }}
    >
      <video
        className="absolute left-1/2 top-1/2 h-auto min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/15654956_1920_1080_24fps.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,15,15,0)_0%,rgba(15,15,15,0.28)_46%,rgba(15,15,15,0.88)_100%),linear-gradient(180deg,rgba(15,15,15,0.18)_0%,rgba(15,15,15,0.08)_36%,rgba(15,15,15,0.56)_70%,#0F0F0F_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[42vh] bg-gradient-to-b from-transparent via-[#0F0F0F]/82 to-[#0F0F0F]" />

      <div
        className="hero-ambient-glow absolute inset-0 pointer-events-none"
        data-parallax-speed="0.14"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 68%, rgba(11, 122, 75, 0.18) 0%, transparent 68%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div
          className="flex min-h-screen items-center justify-center px-0 py-32"
          data-parallax-speed="0.035"
        >
          <div className="reveal flex w-full max-w-4xl flex-col items-center text-center">
            <h1 className="type-hero max-w-4xl text-5xl drop-shadow-[0_18px_50px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl">
              Sites claros para vender melhor.
            </h1>

            <p className="type-body mt-6 max-w-2xl text-lg text-ink-subheading/88 drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)] sm:text-xl">
              Criamos landing pages rápidas, profissionais e prontas para
              receber clientes pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#produto"
                className="fluid-link glass-button type-ui rounded-full border px-5 py-2.5 text-ink-heading"
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                className="fluid-link solid-button type-ui rounded-full border px-5 py-2.5 text-ink-heading"
              >
                Pedir orçamento
              </a>
            </div>

            <div className="type-ui mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-ink-subheading/82">
              {metrics.map((metric) => (
                <span key={metric} className="whitespace-nowrap">
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
