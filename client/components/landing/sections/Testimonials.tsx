import { testimonialImages, testimonials } from "@/data/landing";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="reveal polish-card rounded-2xl bg-[#0B7A4B] p-6 flex flex-col justify-between h-full">
      <p className="text-[#0F0F0F] text-base lg:text-lg font-normal leading-relaxed">
        {quote}
      </p>
      <div className="mt-4 pt-4 border-t border-[#0F0F0F]/30">
        <p className="text-[#0F0F0F] text-base font-normal">{author}</p>
        <p className="text-[#0F0F0F] text-sm font-light">{role}</p>
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
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
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
