import { z } from 'zod';

export const cardSchema = z.object({
  id: z.number().int(),
  front: z.string(),
  back: z.string(),
});

export type CardDto = z.infer<typeof cardSchema>;
