const { useEffect } = React;

const images = {
  team: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  strategy: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
  analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  workspace: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
};

function useRevealAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function TagPill({ children, purple }) {
  return (
    <span className={`tag-pill ${purple ? "tag-pill--purple" : ""}`}>
      <span />
      {children}
    </span>
  );
}

function BtnPrimary({ children, href = "#contato" }) {
  return <a className="btn btn--primary" href={href}>{children}</a>;
}

function BtnGhost({ children, href = "#portfolio" }) {
  return <a className="btn btn--ghost" href={href}>{children}</a>;
}

function Nav() {
  return (
    <nav className="nav-blur nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#">FÚRIA</a>
        <ul className="nav__links">
          {[
            ["Portfólio", "#portfolio"],
            ["Método", "#metodo"],
            ["Resultados", "#resultados"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <li key={label}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <div className="nav__actions">
          <a className="btn btn--small btn--ghost" href="#resultados">Ver prova</a>
          <a className="btn btn--small btn--primary" href="#contato">Criar teste</a>
        </div>
      </div>
    </nav>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual reveal">
      <img src={images.team} alt="Equipe colaborando em um projeto digital" />
      <div className="floating-card floating-card--top">
        <span>Performance</span>
        <strong>98</strong>
        <small>Lighthouse score</small>
      </div>
      <div className="floating-card floating-card--bottom">
        <span>Entrega</span>
        <strong>7 dias</strong>
        <small>média por landing page</small>
      </div>
      <div className="screen-card">
        <div className="screen-card__bar" />
        <div className="screen-card__line screen-card__line--wide" />
        <div className="screen-card__line" />
        <div className="screen-card__grid">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy reveal">
        <TagPill purple>Equipe sênior para presença digital</TagPill>
        <h1>A nova era da presença digital chegou.</h1>
        <p>Sites rápidos, bonitos e pensados para converter. Estratégia, design e desenvolvimento trabalhando juntos para transformar atenção em oportunidade real.</p>
        <div className="hero__actions">
          <BtnPrimary>Falar com a equipe</BtnPrimary>
          <BtnGhost>Ver portfólio</BtnGhost>
        </div>
        <div className="hero__metrics">
          <div><strong>42+</strong><span>projetos lançados</span></div>
          <div><strong>3.8x</strong><span>mais conversões</span></div>
          <div><strong>24h</strong><span>primeiro diagnóstico</span></div>
        </div>
      </div>
      <HeroVisual />
    </section>
  );
}

function Portfolio() {
  const projects = [
    { tag: "Estratégia", title: "Arquitetura que guia a decisão", desc: "Mapeamos jornada, objeções e oferta antes do visual. A página nasce com intenção comercial.", img: images.strategy },
    { tag: "Performance", title: "Interfaces rápidas e mensuráveis", desc: "Construção enxuta, carregamento leve e pontos de conversão acompanhados por métricas.", img: images.analytics },
    { tag: "Execução", title: "Design refinado sem perder clareza", desc: "Layout com hierarquia, contraste e microinterações que dão confiança sem atrapalhar.", img: images.workspace },
  ];

  return (
    <section className="section" id="portfolio">
      <div className="big-bg-letter">FU</div>
      <div className="section__header reveal">
        <TagPill>Portfólio vivo</TagPill>
        <h2>Trabalho com cara de equipe competente.</h2>
        <p>Em vez de blocos vazios, a página agora mostra processo, cuidado visual e sinais de maturidade técnica.</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <article className="portfolio-card reveal" style={{transitionDelay:`${index * 90}ms`}} key={project.title}>
            <img src={project.img} alt={project.title} />
            <div className="portfolio-card__body">
              <TagPill purple>{project.tag}</TagPill>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Metodo() {
  const steps = [
    ["01", "Diagnóstico", "Entendemos público, oferta e gargalos antes de desenhar qualquer seção."],
    ["02", "Direção visual", "Criamos uma experiência com autoridade, ritmo e leitura fácil em qualquer tela."],
    ["03", "Desenvolvimento", "Implementamos com código organizado, animações leves e atenção à performance."],
    ["04", "Otimização", "Ajustamos chamadas, hierarquia e pontos de contato para melhorar conversão."],
  ];

  return (
    <section className="split-section" id="metodo">
      <div className="split-section__title reveal">
        <TagPill purple>Método</TagPill>
        <h2>Competência aparece nos detalhes.</h2>
        <p>O site precisa parecer premium, mas também precisa carregar rápido, explicar bem e conduzir a ação certa.</p>
      </div>
      <div className="steps">
        {steps.map(([number, title, desc], index) => (
          <div className="step-card reveal" style={{transitionDelay:`${index * 80}ms`}} key={number}>
            <strong>{number}</strong>
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    ["Experiência", "Navegação simples, decisões rápidas e fluxo sem fricção."],
    ["Criatividade", "Visual próprio, memorável e alinhado ao posicionamento da marca."],
    ["Presença", "Site preparado para gerar confiança antes mesmo do primeiro contato."],
    ["Mensuração", "Estrutura pronta para acompanhar tráfego, cliques e conversões."],
  ];

  return (
    <section className="section section--compact">
      <div className="section__header reveal">
        <TagPill>Criação de sites</TagPill>
        <h2>Design com foco total em resultado.</h2>
      </div>
      <div className="service-grid">
        {services.map(([title, desc], index) => (
          <article className="service-card reveal" style={{transitionDelay:`${index * 70}ms`}} key={title}>
            <div className="service-card__icon">{index + 1}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Results() {
  const bars = [
    ["Fúria", 97, "#00FF85"],
    ["PageCloud", 83, "#7B00FF"],
    ["TurboGeek", 58, "#4a4a4a"],
    ["GoShare", 61, "#4a4a4a"],
    ["Ai Paper", 54, "#4a4a4a"],
  ];

  return (
    <section className="results" id="resultados">
      <div className="results__copy reveal">
        <TagPill purple>Resultados</TagPill>
        <h2>Somos líderes quando o assunto é entregar com clareza.</h2>
        <p>Uma boa equipe não depende só de estética. Ela cria estrutura, mede resposta e evolui a página com base em comportamento real.</p>
      </div>
      <div className="results__panel reveal">
        {bars.map(([label, pct, color], index) => (
          <div className="bar-row" style={{transitionDelay:`${index * 70}ms`}} key={label}>
            <span>{label}</span>
            <div><i style={{width:`${pct}%`, background: color}} /></div>
            <strong>{pct}%</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    ["A equipe transformou uma ideia solta em uma página clara, rápida e muito mais profissional.", "Marina Costa", "CEO, VittaLab"],
    ["O processo foi direto. Entenderam o produto, propuseram melhorias e entregaram com acabamento excelente.", "Lucas Nunes", "Founder, Orbit CRM"],
    ["O site ficou bonito, mas o melhor foi perceber que cada seção tinha uma razão comercial.", "Renata Alves", "Marketing, SolarOne"],
  ];

  return (
    <section className="section section--compact">
      <div className="section__header reveal">
        <TagPill>Clientes</TagPill>
        <h2>Os resultados falam por si.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map(([text, name, role], index) => (
          <article className="testimonial-card reveal" style={{transitionDelay:`${index * 90}ms`}} key={name}>
            <p>{text}</p>
            <div>
              <span />
              <strong>{name}</strong>
              <small>{role}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="cta" id="contato">
      <div className="reveal">
        <TagPill purple>Vamos começar</TagPill>
        <h2>Pronto para ter uma presença digital mais forte?</h2>
        <p>Traga sua ideia. A equipe estrutura a página, refina a oferta e transforma tudo em uma experiência pronta para converter.</p>
        <BtnPrimary>Solicitar diagnóstico</BtnPrimary>
      </div>
    </section>
  );
}

function App() {
  useRevealAnimation();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Metodo />
        <Services />
        <Results />
        <Testimonials />
        <Cta />
      </main>
      <footer className="footer">FÚRIA · Presença digital com estratégia, design e código.</footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
