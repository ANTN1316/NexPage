import { testimonialImages, testimonials } from "@/data/landing";
import { Quote, Stars } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="reveal polish-card flex h-full flex-col justify-between rounded-2xl border border-[#0B7A4B]/70 bg-[#101611] p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#03FF88]/25 bg-[#03FF88]/10 text-ink-accent">
          <Quote className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/10 px-3 py-1.5">
          <Stars className="h-3.5 w-3.5 text-ink-accent" strokeWidth={1.8} />
          <span className="type-mono text-[10px] text-ink-muted/62">
            Review
          </span>
        </div>
      </div>
      <p className="type-body text-base text-ink-subheading/88 lg:text-lg">
        {quote}
      </p>
      <div className="mt-4 pt-4 border-t border-[#0F0F0F]/30">
        <p className="type-card-title text-base">{author}</p>
        <p className="type-ui mt-1">{role}</p>
      </div>
    </div>
  );
}

function ImageTile({ index, dark = false }: { index: number; dark?: boolean }) {
  const image = testimonialImages[index % testimonialImages.length];

  return (
    <div
      className={`reveal image-tile rounded-2xl aspect-square ${
        dark ? "image-tile--dark" : ""
      }`}
    >
      <img src={image.image} alt={image.alt} loading="lazy" decoding="async" />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16 reveal">
          <h2 className="type-section text-3xl sm:text-4xl lg:text-5xl">
            Clientes com páginas mais claras e profissionais.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          <div className="sm:col-span-1">
            <ImageTile index={0} />
          </div>
          <div className="sm:col-span-1 hidden lg:block">
            <ImageTile index={1} dark />
          </div>
          <div className="sm:col-span-2">
            <TestimonialCard {...testimonials[0]} />
          </div>

          <div className="hidden lg:block">
            <ImageTile index={2} dark />
          </div>
          <div className="hidden lg:block">
            <ImageTile index={3} />
          </div>
          <div className="hidden lg:block">
            <ImageTile index={4} />
          </div>
          <div className="hidden lg:block">
            <ImageTile index={5} dark />
          </div>

          <div className="sm:col-span-2">
            <TestimonialCard {...testimonials[1]} />
          </div>
          <div className="hidden lg:block">
            <ImageTile index={1} />
          </div>
          <div className="hidden lg:block">
            <ImageTile index={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
