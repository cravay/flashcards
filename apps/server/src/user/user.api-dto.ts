import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { userSchema } from '@flashcards/shared';

export class UserApiDto extends createZodDto(extendApi(userSchema)) {}
