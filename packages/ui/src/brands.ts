/**
 * Catálogo das empresas do grupo. Subempresa nova = adicionar/ativar um item aqui e
 * criar apps/<slug> copiando apps/sites como modelo (veja o CLAUDE.md da raiz).
 */
export type BrandStatus = "ativo" | "em-breve";

export interface Brand {
  slug: string;
  name: string;
  /** Rótulo exibido ao lado do logo "Hyze." */
  label: string;
  url: string;
  tagline: string;
  status: BrandStatus;
}

export const GROUP = {
  name: "Hyze",
  slogan: "Muito além do código",
  url: "https://hyzecompany.com.br",
  email: "contato@hyzecompany.com.br",
  /** Número no formato internacional, só dígitos (ex.: 5566999999999). TODO: preencher. */
  whatsapp: "5500000000000",
  apiUrl: "https://api.hyzecompany.com.br",
} as const;

export const BRANDS: readonly Brand[] = [
  {
    slug: "sites",
    name: "Hyze Sites",
    label: "sites",
    url: "https://sites.hyzecompany.com.br",
    tagline: "Sites e landing pages rápidos, bonitos e prontos para vender.",
    status: "ativo",
  },
  {
    slug: "consultoria",
    name: "Hyze Consultoria",
    label: "consultoria",
    url: "https://consultoria.hyzecompany.com.br",
    tagline: "Infraestrutura, suporte, nuvem e automação para a sua empresa funcionar sem parar.",
    status: "ativo",
  },
  {
    slug: "marketing",
    name: "Hyze Marketing",
    label: "marketing",
    url: "https://marketing.hyzecompany.com.br",
    tagline: "Presença digital que gera clientes.",
    status: "em-breve",
  },
  {
    slug: "hardware",
    name: "Hyze Hardware",
    label: "hardware",
    url: "https://hardware.hyzecompany.com.br",
    tagline: "Equipamentos certos, com quem entende.",
    status: "em-breve",
  },
] as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${GROUP.whatsapp}?text=${encodeURIComponent(message)}`;
}
