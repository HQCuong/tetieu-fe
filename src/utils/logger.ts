import { APP_CONFIG } from '@/constants';

const PREFIX = '[tetieu]';

type LogFn = (message: unknown, ...args: unknown[]) => void;

// Console wrapper with a consistent prefix. `warn` is suppressed in production
// to keep console output clean for end users.
export const logger: Record<'warn' | 'log' | 'error' | 'info', LogFn> = {
  warn: (m, ...args) => {
    if (APP_CONFIG.isDev) {
      console.warn(PREFIX, m, ...args);
    }
  },
  log: (m, ...args) => console.log(PREFIX, m, ...args),
  error: (m, ...args) => console.error(PREFIX, m, ...args),
  info: (m, ...args) => console.info(PREFIX, m, ...args),
};
