import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import {
  createDeckSchema,
  deckSchema,
  deckWithAuthorSchema,
  updateDeckSchema,
} from '@flashcards/shared';

export class DeckApiDto extends createZodDto(extendApi(deckSchema)) {}

export class DeckWithAuthorApiDto extends createZodDto(
  extendApi(deckWithAuthorSchema)
) {}

export class CreateDeckApiDto extends createZodDto(
  extendApi(createDeckSchema)
) {}

export class UpdateDeckApiDto extends createZodDto(
  extendApi(updateDeckSchema)
) {}
