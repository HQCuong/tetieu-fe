export const APP_CONFIG = {
  apiUrl: String(import.meta.env.VITE_API_URL ?? ''),
  apiToken: String(import.meta.env.VITE_API_TOKEN ?? ''),
  isDev: import.meta.env.VITE_NODE_ENV === 'development',
} as const;

