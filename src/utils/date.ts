import {
  format,
  parseISO,
} from 'date-fns';
import { vi } from 'date-fns/locale';
import { logger } from './logger';

// Wrap date-fns with safe parsing so bad/missing values fall back to a
// placeholder instead of throwing inside templates.
const safeFormat = (iso: string, pattern: string, localeArg?: typeof vi): string => {
  try {
    return format(parseISO(iso), pattern, localeArg ? { locale: localeArg } : undefined);
  } catch (error) {
    logger.warn(`Cannot format date "${iso}"`, error);

    return 'N/A';
  }
};

export const formatDayOfWeekVi = (iso: string) => safeFormat(iso, 'EEEE', vi);
export const formatDateTime = (iso: string) => safeFormat(iso, 'dd/MM/yyyy HH:mm');
