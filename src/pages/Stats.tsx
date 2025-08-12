import React from 'react';
import { Users, MessageSquare, Hash, Shield, Clock, UserCheck } from 'lucide-react';
import { stats } from '../data/stats';
import { StatsCard } from '../components/StatsCard';
import { formatNumber } from '../lib/utils';

export function Stats() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Server Statistics</h1>
        <p className="text-xl opacity-80">Real-time insights into our community</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Total Members"
          value={formatNumber(stats.totalMembers)}
          icon={<Users className="h-6 w-6" />}
        />
        <StatsCard
          title="Online Now"
          value={formatNumber(stats.onlineMembers)}
          icon={<UserCheck className="h-6 w-6" />}
        />
        <StatsCard
          title="Messages Sent"
          value={formatNumber(stats.messagesSent)}
          icon={<MessageSquare className="h-6 w-6" />}
        />
        <StatsCard
          title="Channels"
          value={stats.channels}
          icon={<Hash className="h-6 w-6" />}
        />
        <StatsCard
          title="Roles"
          value={stats.roles}
          icon={<Shield className="h-6 w-6" />}
        />
        <StatsCard
          title="Days Active"
          value={stats.serverAge}
          icon={<Clock className="h-6 w-6" />}
        />
      </div>
    </div>
  );
}