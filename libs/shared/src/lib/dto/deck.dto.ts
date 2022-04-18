import { z } from 'zod';

import { dateSchema } from './date.schema';
import { userSchema } from './user.dto';

export const deckSchema = z.object({
  id: z.number().int(),
  name: z.string().min(3),
  description: z.preprocess(
    (value) => value || null,
    z.string().min(3).nullish()
  ),
  authorId: z.number().int(),
  createdAt: dateSchema,
  updatedAt: dateSchema,
});

export const deckWithAuthorSchema = deckSchema.extend({
  author: userSchema,
});

export const createDeckSchema = deckSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateDeckSchema = createDeckSchema.partial();

export type DeckDto = z.infer<typeof deckSchema>;
export type DeckWithAuthorDto = z.infer<typeof deckWithAuthorSchema>;
export type CreateDeckDto = z.infer<typeof createDeckSchema>;
export type UpdateDeckDto = z.infer<typeof updateDeckSchema>;
