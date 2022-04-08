import { z } from 'zod';

const UserDto = z.object({
  id: z.number().int(),
  name: z.string(),
  avatar: z.string().url(),
  eMail: z.string().email(),
});

export type UserDto = z.infer<typeof UserDto>;
