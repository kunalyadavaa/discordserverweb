export interface ServerStats {
  totalMembers: number;
  onlineMembers: number;
  staffOnline: number;
  messagesToday: number;
  channels: number;
  roles: number;
  serverAge: number;
  partnerLevel: string;
  activeEvents: number;
  boostLevel: number;
}

export const stats: ServerStats = {
  totalMembers: 15000,
  onlineMembers: 3500,
  staffOnline: 8,
  messagesToday: 25000,
  channels: 50,
  roles: 25,
  serverAge: 730,
  partnerLevel: 'Gold',
  activeEvents: 3,
  boostLevel: 3
};