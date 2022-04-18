import { isValid, parseISO } from 'date-fns';
import { z } from 'zod';

// In order to be able to share this schema between the frontend and the backend
// it allows both date objects and ISO date strings. Prisma returns date objects,
// but it's not allowed to store Date objects in the Redux store.
// Also see https://github.com/colinhacks/zod#dates
export const dateSchema = z.preprocess((value) => {
  if (typeof value === 'string') {
    return isValid(parseISO(value)) ? value : undefined;
  }

  if (value instanceof Date) {
    return value;
  }

  return undefined;
}, z.union([z.date(), z.string()]));
