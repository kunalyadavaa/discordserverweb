import { z } from 'zod';

const envSchema = z.object({
  VITE_DISCORD_SERVER_ID: z.string(),
  VITE_DISCORD_BOT_TOKEN: z.string().optional(),
});

// Validate environment variables
const env = envSchema.parse(import.meta.env);

export const discordConfig = {
  serverId: env.VITE_DISCORD_SERVER_ID,
  botToken: env.VITE_DISCORD_BOT_TOKEN,
  updateInterval: 60000, // 1 minute
} as const;