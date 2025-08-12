export const botConfig = {
  discord: {
    serverId: process.env.VITE_DISCORD_SERVER_ID,
    staffRoles: ["1078273385857040424"], // Staff role ID from site config
    updateInterval: 60000,
    fallbackStats: {
      totalMembers: 15000,
      onlineMembers: 3500,
      staffOnline: 8,
      channels: 50,
      roles: 25,
      boostLevel: 3,
      activeEvents: 3
    }
  }
};