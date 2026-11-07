/**
 * Conteúdo editável da Hyze Sites. Preços e textos são PROVISÓRIOS — ajuste aqui.
 * (Fase 2: este conteúdo pode migrar para o painel admin / D1.)
 */
export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const PLANS: Plan[] = [
  {
    name: "Landing page",
    price: "a partir de R$ TODO",
    description: "Uma página focada em converter visitantes em clientes.",
    features: [
      "1 página com até 6 seções",
      "Formulário + botão de WhatsApp",
      "Otimizada para Google e celular",
      "Hospedagem e SSL inclusos no 1º ano",
    ],
  },
  {
    name: "Site institucional",
    price: "a partir de R$ TODO",
    description: "Presença profissional completa para a sua empresa.",
    features: [
      "Até 5 páginas",
      "Blog ou portfólio",
      "SEO técnico e Google Meu Negócio",
      "E-mail profissional com seu domínio",
    ],
    featured: true,
  },
  {
    name: "Sob medida",
    price: "sob consulta",
    description: "Sistemas web, áreas de cliente e integrações.",
    features: [
      "Levantamento de requisitos",
      "Painel administrativo",
      "Integrações (pagamentos, APIs)",
      "Suporte e evolução contínua",
    ],
  },
];

export const STEPS = [
  { title: "Conversa", text: "Entendemos o seu negócio, público e objetivos." },
  { title: "Proposta", text: "Escopo, prazo e preço fechados, sem surpresas." },
  { title: "Design e desenvolvimento", text: "Você acompanha e aprova cada etapa." },
  { title: "No ar", text: "Publicação, treinamento e suporte depois da entrega." },
];

export const FAQ = [
  {
    q: "Quanto tempo leva para o site ficar pronto?",
    a: "Landing pages costumam levar de 1 a 2 semanas; sites institucionais, de 3 a 5 semanas, dependendo do conteúdo.",
  },
  {
    q: "Preciso pagar hospedagem?",
    a: "Usamos infraestrutura de alta performance com custo muito baixo; o primeiro ano já está incluso nos pacotes.",
  },
  {
    q: "Consigo editar o site depois?",
    a: "Sim. Conforme o pacote, você recebe um painel para editar textos e imagens, ou conta com o nosso suporte.",
  },
];
