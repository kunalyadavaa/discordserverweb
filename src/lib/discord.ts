export interface DiscordStats {
  totalMembers: number;
  onlineMembers: number;
  staffOnline: number;
  channels: number;
  roles: number;
  boostLevel: number;
  activeEvents: number;
  serverAge: number;
  partnerLevel: string;
}

export async function fetchDiscordStats(): Promise<DiscordStats> {
  try {
    const response = await fetch('http://localhost:3001/api/stats');
    
    if (!response.ok) {
      throw new Error('Stats API error');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('Error fetching stats:', error);
    // Return fallback stats with all required fields
    return {
      totalMembers: 15000,
      onlineMembers: 3500,
      staffOnline: 8,
      channels: 50,
      roles: 25,
      boostLevel: 3,
      activeEvents: 3,
      serverAge: 730,
      partnerLevel: 'Standard'
    };
  }
}