import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { createStatsServer } from './statsServer.js';
import { collectServerStats } from './statsCollector.js';
import { botConfig } from './config.js';

dotenv.config();

// Configure all required intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildModeration
  ]
});

let serverStats = null;

async function updateStats() {
  try {
    const guild = await client.guilds.fetch(botConfig.discord.serverId);
    if (!guild) {
      console.error('Guild not found');
      return;
    }

    const stats = await collectServerStats(guild);
    if (stats) {
      serverStats = stats;
      console.log('Stats updated successfully');
    }
  } catch (error) {
    console.error('Error updating stats:', error);
  }
}

// Initialize stats server first
const statsServer = createStatsServer(() => serverStats);
statsServer.listen(3001, () => {
  console.log('Stats API running on port 3001');
});

client.once('ready', async () => {
  console.log('Discord bot is ready!');
  // Initial stats update
  await updateStats();
  // Set up periodic updates
  setInterval(updateStats, botConfig.discord.updateInterval);
});

client.on('error', (error) => {
  console.error('Discord bot error:', error);
});

// Login with error handling
if (process.env.VITE_DISCORD_BOT_TOKEN) {
  client.login(process.env.VITE_DISCORD_BOT_TOKEN)
    .then(() => console.log('Bot logged in successfully'))
    .catch((error) => {
      console.error('Failed to login:', error);
      process.exit(1);
    });
} else {
  console.log('No Discord bot token provided, running with fallback stats only');
}