/**
 * Conteúdo editável da Hyze Consultoria. Preços, cidade e prazos são PROVISÓRIOS — ajuste aqui.
 */
export type IconName = "server" | "headset" | "cloud" | "workflow";

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  items: string[];
}

export const SERVICES: Service[] = [
  {
    icon: "server",
    title: "Infraestrutura e redes",
    description: "A base que mantém a sua empresa conectada, segura e funcionando.",
    items: [
      "Redes cabeadas e Wi-Fi corporativo",
      "Servidores e armazenamento (NAS)",
      "Firewall, VPN e segurança",
      "Backup e recuperação de dados",
    ],
  },
  {
    icon: "headset",
    title: "Suporte técnico",
    description: "Alguém de confiança para resolver quando algo para — e evitar que pare.",
    items: [
      "Atendimento remoto e presencial",
      "Manutenção preventiva",
      "Inventário de equipamentos",
      "Contratos mensais com prazo de resposta",
    ],
  },
  {
    icon: "cloud",
    title: "Nuvem e produtividade",
    description:
      "E-mail, arquivos e ferramentas de trabalho organizados e acessíveis de qualquer lugar.",
    items: [
      "Microsoft 365 e Google Workspace",
      "E-mail profissional com o seu domínio",
      "Migração de arquivos e e-mails",
      "Gestão de licenças e acessos",
    ],
  },
  {
    icon: "workflow",
    title: "Automação e sistemas",
    description: "Menos tarefa repetitiva, mais tempo para o que importa.",
    items: [
      "Automação de processos",
      "Integração entre sistemas",
      "Relatórios e painéis",
      "Sistemas sob medida com a Hyze Sites",
    ],
  },
];

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const PLANS: Plan[] = [
  {
    name: "Essencial",
    price: "a partir de R$ TODO/mês",
    description: "Suporte remoto para pequenas equipes.",
    features: [
      "Até TODO computadores",
      "Atendimento remoto em horário comercial",
      "Backup monitorado",
      "Relatório mensal",
    ],
  },
  {
    name: "Empresarial",
    price: "a partir de R$ TODO/mês",
    description: "Cuidado completo, remoto e presencial.",
    features: [
      "Tudo do Essencial",
      "Visitas presenciais na região",
      "Manutenção preventiva mensal",
      "Prazo de resposta garantido",
    ],
    featured: true,
  },
  {
    name: "Projeto",
    price: "sob consulta",
    description: "Implantações e melhorias pontuais.",
    features: [
      "Montagem de rede e Wi-Fi",
      "Migração para a nuvem",
      "Automações e integrações",
      "Diagnóstico de TI completo",
    ],
  },
];

export const STEPS = [
  { title: "Diagnóstico", text: "Conversamos e levantamos como está a TI hoje — sem custo." },
  { title: "Plano de ação", text: "Prioridades, prazos e investimento claros, por escrito." },
  { title: "Implantação", text: "Executamos com o mínimo de impacto na sua rotina." },
  { title: "Acompanhamento", text: "Monitoramos, prevenimos problemas e evoluímos com você." },
];

/** TODO: confirmar a cidade/região do atendimento presencial. */
export const REGION = "TODO: sua cidade e região";

export const FAQ = [
  {
    q: "Vocês atendem empresas de outras cidades?",
    a: "Sim. O suporte remoto atende todo o Brasil; o atendimento presencial é feito na nossa região.",
  },
  {
    q: "Preciso fechar um contrato mensal?",
    a: "Não. Você pode contratar um projeto pontual ou um plano mensal — o diagnóstico ajuda a decidir.",
  },
  {
    q: "Em quanto tempo vocês respondem um chamado?",
    a: "Depende do plano. Nos planos mensais o prazo de resposta fica definido em contrato.",
  },
  {
    q: "Trabalham com Microsoft 365 e Google Workspace?",
    a: "Sim, com os dois: implantação, migração, licenças e suporte aos usuários.",
  },
];
