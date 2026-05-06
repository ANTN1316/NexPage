import { featurePanels } from "@/data/landing";

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
}

function FeaturePanel({ tag, title, features, ctaText, image, alt }: FeaturePanelProps) {
  return (
    <article className="reveal polish-card rounded-2xl lg:rounded-3xl border border-[#656565] p-6 lg:p-12 bg-[#101010]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-[45%] flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 bg-[#7F0AD8] rounded-full px-4 py-1 w-fit">
              <div className="w-2 h-2 rounded-full bg-[#0F0F0F]" />
              <span className="text-[#0F0F0F] text-sm font-normal">{tag}</span>
            </div>

            <h3 className="text-white text-2xl lg:text-3xl font-normal leading-snug">{title}</h3>

            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className="reveal flex flex-col gap-2"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <h4 className="text-[#7F0AD8] text-lg lg:text-xl font-semibold">{feature.label}</h4>
                  <p className="text-white text-sm font-light leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contato"
            className="inline-flex px-6 py-4 rounded-lg border border-[#7F0AD8] bg-[#7F0AD8] text-white text-base font-normal hover:bg-[#7F0AD8]/90 transition-colors w-fit"
          >
            {ctaText}
          </a>
        </div>

        <div className="feature-image w-full lg:w-[55%] rounded-2xl min-h-[280px] lg:min-h-[400px]">
          <img src={image} alt={alt} loading="lazy" />
          <div className="feature-image__badge">
            <strong>+3.8x</strong>
            <span>mais conversões</span>
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
          <FeaturePanel key={panel.title} {...panel} />
        ))}
      </div>
    </section>
  );
}
