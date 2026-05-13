import { processSteps } from "@/data/landing";
import { ClipboardList, PenTool, Rocket, type LucideIcon } from "lucide-react";

const processArtwork: Array<{
  icon: LucideIcon;
  label: string;
  lines: string[];
}> = [
  {
    icon: ClipboardList,
    label: "Brief",
    lines: ["Oferta", "Público", "Objetivo"],
  },
  {
    icon: PenTool,
    label: "Layout",
    lines: ["Estrutura", "Texto", "Visual"],
  },
  {
    icon: Rocket,
    label: "Deploy",
    lines: ["Revisão", "Contato", "Online"],
  },
];

function ProcessArtwork({
  icon: Icon,
  label,
  lines,
}: (typeof processArtwork)[number]) {
  return (
    <div className="relative h-28 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(3,255,136,0.13),transparent_42%)]" />
      <div className="absolute inset-x-4 top-1/2 h-px bg-white/[0.06]" />
      <div className="absolute inset-y-4 left-1/2 w-px bg-white/[0.05]" />

      <div className="relative flex h-full items-start justify-between gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#03FF88]/25 bg-[#03FF88]/10 text-ink-accent shadow-[0_0_24px_rgba(3,255,136,0.08)]">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-end gap-2">
          <span className="type-mono text-[11px] text-ink-muted/58">
            {label}
          </span>
          <div className="grid w-full max-w-[118px] gap-1.5">
            {lines.map((line, index) => (
              <div
                key={line}
                className="flex items-center gap-2 rounded-md border border-white/[0.055] bg-black/10 px-2 py-1"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#03FF88]/70"
                  style={{ opacity: 0.78 - index * 0.14 }}
                />
                <span className="type-ui truncate text-[11px] text-ink-secondary/70">
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24" id="processo">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <div className="w-full lg:w-[38%] reveal">
            <p className="type-eyebrow mb-4">
              Nosso processo
            </p>
            <h2 className="type-section text-3xl sm:text-4xl lg:text-5xl">
              Do briefing ao site no ar, sem complicar.
            </h2>
          </div>

          <div className="w-full lg:w-[62%] grid grid-cols-1 md:grid-cols-3 gap-5">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className="reveal polish-card flex min-h-[340px] flex-col justify-between rounded-2xl border border-[#242424] bg-[#101010] p-5"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="type-mono text-sm">{step.number}</span>
                    <span className="h-px w-10 bg-[#03FF88]/30" />
                  </div>
                  <ProcessArtwork {...processArtwork[index]} />
                </div>

                <div className="mt-7">
                  <h3 className="type-card-title text-xl">
                    {step.title}
                  </h3>
                  <p className="type-body mt-3 text-sm">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
