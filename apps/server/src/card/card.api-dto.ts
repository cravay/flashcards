import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { cardSchema } from '@flashcards/shared';

export class CardApiDto extends createZodDto(extendApi(cardSchema)) {}
