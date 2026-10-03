interface ImportMetaEnv {
  /** Site key pública do Cloudflare Turnstile. */
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
  /** Token do Cloudflare Web Analytics. */
  readonly PUBLIC_CF_ANALYTICS_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
