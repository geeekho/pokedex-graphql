import { z } from 'zod';

export const searchSchema = z.object({
  name: z
    .string()
    .min(6, 'Pokemon name is too short')
    .max(13, 'Pokemon name is too long')
    .refine((name) => /^[a-zA-Z0-9]+$/.test(name), {
      message: 'No special characters allowed',
    }),
});

export type SearchSchema = z.infer<typeof searchSchema>;
