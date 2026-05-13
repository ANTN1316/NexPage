import { featurePanels } from "@/data/landing";
import {
  Code2,
  MousePointerClick,
  PanelsTopLeft,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

interface FeatureItem {
  label: string;
  description: string;
}

interface FeaturePanelProps {
  tag: string;
  title: string;
  features: FeatureItem[];
  ctaText: string;
  image: string;
  alt: string;
  panelIndex: number;
}

const featureArt: Array<Array<{ icon: LucideIcon; label: string }>> = [
  [
    { icon: MousePointerClick, label: "Oferta" },
    { icon: Smartphone, label: "Mobile" },
  ],
  [
    { icon: PanelsTopLeft, label: "Processo" },
    { icon: Code2, label: "Código" },
  ],
];

function FeaturePanel({
  tag,
  title,
  features,
  ctaText,
  image,
  alt,
  panelIndex,
}: FeaturePanelProps) {
  return (
    <article className="reveal polish-card rounded-2xl lg:rounded-3xl border border-[#656565] p-6 lg:p-12 bg-[#101010]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-[45%] flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 bg-[#0B7A4B] rounded-full px-4 py-1 w-fit">
              <div className="w-2 h-2 rounded-full bg-[#0F0F0F]" />
              <span className="type-ui text-ink-heading">{tag}</span>
            </div>

            <h3 className="type-section text-3xl lg:text-4xl">
              {title}
            </h3>

            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className="reveal grid grid-cols-[44px_1fr] gap-4"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(3,255,136,0.12),rgba(255,255,255,0.025))] text-ink-accent">
                    {(() => {
                      const Icon = featureArt[panelIndex][index].icon;
                      return <Icon className="h-5 w-5" strokeWidth={1.75} />;
                    })()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="type-card-title text-lg text-ink-accent lg:text-xl">
                        {feature.label}
                      </h4>
                      <span className="type-mono hidden text-[10px] text-ink-muted/52 sm:inline">
                        {featureArt[panelIndex][index].label}
                      </span>
                    </div>
                    <p className="type-body mt-2 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contato"
            className="fluid-link solid-button type-ui inline-flex w-fit rounded-full border px-5 py-2.5 text-ink-heading"
          >
            {ctaText}
          </a>
        </div>

        <div className="feature-image w-full lg:w-[55%] rounded-2xl min-h-[280px] lg:min-h-[400px]">
          <img src={image} alt={alt} loading="lazy" decoding="async" />
          <div className="feature-image__badge">
            <strong></strong>
            <span>+Visibilidade imediata</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24" id="recursos">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-8 lg:gap-12">
        {featurePanels.map((panel, index) => (
          <FeaturePanel key={panel.title} {...panel} panelIndex={index} />
        ))}
      </div>
    </section>
  );
}
