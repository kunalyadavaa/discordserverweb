import { Collection } from 'discord.js';
import { botConfig } from './config.js';

export async function collectServerStats(guild) {
  if (!guild) return null;
  
  try {
    // Fetch fresh guild data
    const fullGuild = await guild.fetch();
    
    // Fetch members with presence
    const members = await guild.members.fetch({ withPresences: true });
    const staffRoles = botConfig.discord.staffRoles;
    
    // Count online staff members
    const staffOnline = members.filter(member => {
      const hasStaffRole = member.roles.cache.some(role => 
        staffRoles.includes(role.id)
      );
      const isOnline = member.presence?.status && member.presence.status !== 'offline';
      return hasStaffRole && isOnline;
    }).size;

    // Get online member count
    const onlineMembers = members.filter(member => 
      member.presence?.status && member.presence.status !== 'offline'
    ).size;

    // Fetch channels, roles, and events
    const [channels, roles, events] = await Promise.all([
      guild.channels.fetch(),
      guild.roles.fetch(),
      guild.scheduledEvents.fetch()
    ]);

    // Calculate server age in days
    const createdTimestamp = fullGuild.createdTimestamp;
    const serverAge = Math.floor((Date.now() - createdTimestamp) / (1000 * 60 * 60 * 24));

    const stats = {
      totalMembers: fullGuild.memberCount,
      onlineMembers,
      staffOnline,
      channels: channels.size,
      roles: roles.size,
      boostLevel: fullGuild.premiumTier,
      activeEvents: events.size,
      serverAge,
      partnerLevel: fullGuild.partnered ? 'Partner' : 'Standard'
    };

    console.log('Collected stats:', stats);
    return stats;
  } catch (error) {
    console.error('Error collecting stats:', error);
    return null;
  }
}