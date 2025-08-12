import React from 'react';
import { Users, UserCheck, Shield, Hash } from 'lucide-react';
import { useDiscordStats } from '../../hooks/useDiscordStats';
import { StatsCard } from './StatsCard';
import { formatNumber } from '../../lib/utils';

export function StatsOverview() {
  const { stats, loading } = useDiscordStats();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Members"
        value={loading ? '...' : formatNumber(stats.totalMembers)}
        icon={<Users className="h-6 w-6" />}
      />
      <StatsCard
        title="Online Now"
        value={loading ? '...' : formatNumber(stats.onlineMembers)}
        icon={<UserCheck className="h-6 w-6" />}
      />
      <StatsCard
        title="Staff Online"
        value={loading ? '...' : stats.staffOnline}
        icon={<Shield className="h-6 w-6" />}
      />
      <StatsCard
        title="Channels"
        value={loading ? '...' : stats.channels}
        icon={<Hash className="h-6 w-6" />}
      />
    </div>
  );
}