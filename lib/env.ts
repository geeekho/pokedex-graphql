import * as z from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_POKEDEX_BASE_URL: z.string().url(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_POKEDEX_BASE_URL: process.env.NEXT_PUBLIC_POKEDEX_BASE_URL,
});
