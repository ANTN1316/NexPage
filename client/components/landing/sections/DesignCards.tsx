import { designCards } from "@/data/landing";

function DotsDecoration() {
  return (
    <svg width="29" height="7" viewBox="0 0 29 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3.5" cy="3.5" r="3.5" fill="#0B7A4B" />
      <circle cx="14.5" cy="3.5" r="3.5" fill="#0B7A4B" />
      <circle cx="25.5" cy="3.5" r="3.5" fill="#0B7A4B" />
    </svg>
  );
}

export default function DesignCards() {
  return (
    <section className="bg-[#0F0F0F] py-16 lg:py-24 overflow-hidden" id="produto">
      <div className="relative overflow-hidden mb-16 lg:mb-20 reveal">
        <svg
          viewBox="0 0 1856 346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full opacity-30"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="futuroGrad" x1="0" y1="173" x2="1856" y2="173" gradientUnits="userSpaceOnUse">
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#0F0F0F" />
            </linearGradient>
          </defs>
          <text x="0" y="260" fill="url(#futuroGrad)" fontSize="300" fontWeight="800">
            FUTURO
          </text>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {designCards.map((card, index) => (
            <article
              key={card.title}
              className="reveal polish-card rounded-2xl border border-[#242424] overflow-hidden flex flex-col bg-[#121212]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between px-5 py-5 border-b border-[#242424]">
                <h3 className="text-white text-lg font-semibold">{card.title}</h3>
                <DotsDecoration />
              </div>
              <div className="image-card flex-1 min-h-[220px] lg:min-h-[300px]">
                <img src={card.image} alt={card.alt} loading="lazy" />
                <div className="image-card__overlay" />
              </div>
              <div className="px-5 py-5 border-t border-[#242424]">
                <p className="text-white text-base font-normal text-center">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
