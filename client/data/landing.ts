export const brand = {
  name: "NexPage",
  highlight: "Page",
  tagline: "A nova era da presença digital.",
};

export const navigationLinks = [
  { label: "Produto", href: "#produto" },
  { label: "Processo", href: "#processo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const designCards = [
  {
    title: "PORTFÓLIO INTERATIVO",
    description:
      "Apresentação visual dos templates concluídos com interação na página principal. Navegação fluida entre projetos finalizados.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    alt: "Equipe planejando estratégia digital em uma mesa de trabalho",
  },
  {
    title: "FORMULÁRIO INTEGRADO",
    description:
      "Captação de leads com integração direta via WhatsApp e API. Comunicação rápida sem fricção para o visitante.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Dashboard com métricas de crescimento e conversão",
  },
  {
    title: "STACK MODERNA",
    description:
      "Desenvolvimento com React, Next.js, Tailwind CSS e deploy otimizado. Performance e responsividade garantidas.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    alt: "Time desenvolvendo uma experiência digital em notebooks",
  },
];

export const featurePanels = [
  {
    tag: " Para microempreendedores",
    title: "Visibilidade, clareza e conversão sem complicação técnica",
    ctaText: "Falar no WhatsApp",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=80",
    alt: "Equipe alinhando detalhes de uma interface digital",
    features: [
      {
        label: "Serviços",
        description:
          "Sites e landing pages com hierarquia visual clara, leitura simples e chamadas de ação pensadas para quem tem nível técnico intermediário.",
      },
      {
        label: "Projetos",
        description:
          "Templates responsivos e otimizados que funcionam no celular, computador e tablet. Performance garantida em qualquer dispositivo.",
      },
    ],
  },
  {
    tag: "Para investidores e parceiros",
    title: "Código limpo, processo organizado e entrega técnica de qualidade",
    ctaText: "Ver repositório no GitHub",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1100&q=80",
    alt: "Profissionais colaborando em uma reunião criativa",
    features: [
      {
        label: "NOSSO PROCESSO",
        description:
          "Fluxo de trabalho com issues no GitHub, branches separadas por feature e pull requests obrigatórios. Código revisado e padronizado.",
      },
      {
        label: "Performance",
        description:
          " ESLint e Prettier configurados, commits semânticos (feat, fix, refactor), estrutura de pastas definida. Deploy otimizado na Netlify.",
      },
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "REFERÊNCIAS",
    description:
      "Análise de 3 a 5 sites de referência. Definição de animações simples e descarte de features que pesam no desempenho. Escolha do template base no Figma.",
  },
  {
    number: "02",
    title: "	ESTRUTURA + DESIGN",
    description:
      "Wireframe de todas as páginas, definição da identidade visual (cores, tipografia, espaçamento) e aprovação do esqueleto antes da produção.",
  },
  {
    number: "03",
    title: "DESENVOLVIMENTO + DEPLOY",
    description:
      "Código com React/Next.js, Tailwind CSS, integrações de formulário e API. Deploy na Netlify com SEO básico, domínio gratuito e monitoramento via Microsoft Clarity.",
  },
];

export const portfolioItems = [
  {
    title: "VittaLab",
    category: "Saúde e tecnologia",
    metric: "+42% leads",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    alt: "Equipe médica analisando dados digitais",
  },
  {
    title: "Orbit CRM",
    category: "SaaS B2B",
    metric: "3.1x conversão",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    alt: "Dashboard de produto digital com gráficos",
  },
  {
    title: "NovaHaus",
    category: "Arquitetura",
    metric: "+68% contatos",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    alt: "Escritório moderno com espaço de trabalho elegante",
  },
];

export const pricingPlans = [
  {
    name: "Template Base",
    price: "R$ 1.490",
    description:
      "Landing page objetiva para validar oferta e captar contatos Template funcional com personalização rápida de cores e textos com rapidez.",
    features: [
      "Estrutura pronta",
      "Design responsivo",
      "Formulário/WhatsApp",
      "Deploy em até 7 dias",
    ],
  },
  {
    name: "Performance",
    price: "R$ 2.990",
    description:
      "Experiência completa para marcas que precisam vender com mais clareza.",
    featured: true,
    features: [
      "Estratégia de conteúdo",
      "Seções de conversão",
      "Otimização visual",
      "Setup de métricas",
    ],
  },
  {
    name: "Sob medida",
    price: "Proposta",
    description:
      "Projeto personalizado para empresas com funil, campanhas ou demandas específicas.",
    features: [
      "Arquitetura customizada",
      "Integrações",
      "Componentes exclusivos",
      "Acompanhamento dedicado",
    ],
  },
];

export const faqItems = [
  {
    question: "Quanto tempo leva para entregar?",
    answer:
      "Projetos essenciais costumam levar até 7 dias. Projetos com mais estratégia, seções e ajustes podem variar conforme escopo.",
  },
  {
    question: "A página funciona bem no celular?",
    answer:
      "Sim. A experiência é criada responsiva desde o início, com leitura clara, botões acessíveis e carregamento otimizado.",
  },
  {
    question: "Vocês cuidam de domínio e hospedagem?",
    answer:
      "Podemos orientar a configuração ou assumir a publicação quando o projeto exigir esse acompanhamento.",
  },
  {
    question: "Consigo editar textos depois?",
    answer:
      "Sim. A entrega pode incluir uma estrutura preparada para ajustes futuros, combinada conforme a necessidade do projeto.",
  },
];

export const testimonialImages = [
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80",
    alt: "Equipe trabalhando junta em uma sala moderna",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
    alt: "Pessoa analisando resultados em um notebook",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",
    alt: "Apresentação de estratégia para um time",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=700&q=80",
    alt: "Profissionais discutindo um projeto digital",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80",
    alt: "Time revisando uma interface em escritório",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=80",
    alt: "Desenvolvedores trabalhando em uma interface web",
  },
];

export const testimonials = [
  {
    quote:
      "Os resultados com o novo site apareceram rápido: mais contatos, mais clareza na oferta e uma percepção muito mais profissional da marca.",
    author: "Marina Costa",
    role: "Diretora, VittaLab",
  },
  {
    quote:
      "O projeto trouxe melhor posicionamento e impacto direto na geração de oportunidades. Um site bem estruturado muda a forma como o negócio cresce no digital.",
    author: "Lucas Nunes",
    role: "Founder, Orbit CRM",
  },
];
