interface ImportMetaEnv {
  /** Site key pública do Cloudflare Turnstile. */
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
  /** URL da API de leads (vazio = produção). */
  readonly PUBLIC_API_URL?: string;
  /** Token do Cloudflare Web Analytics. */
  readonly PUBLIC_CF_ANALYTICS_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
