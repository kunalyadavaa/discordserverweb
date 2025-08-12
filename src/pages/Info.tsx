import React from 'react';
import { Users, MessageSquare, Shield, UserCheck } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';
import { ServerInfoCard } from '../components/info/ServerInfoCard';
import { QuickStats } from '../components/info/QuickStats';
import { useDiscordStats } from '../hooks/useDiscordStats';
import { formatNumber } from '../lib/utils';
import { siteConfig } from '../config/site';

export function Info() {
  const { stats, loading } = useDiscordStats();

  return (
    <div className="space-y-16">
      {/* Stats Overview */}
      <section className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Server Information</h1>
          <p className="text-xl opacity-80">Everything you need to know about our community</p>
        </div>

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
            title="Active Events"
            value={loading ? '...' : stats.activeEvents}
            icon={<MessageSquare className="h-6 w-6" />}
          />
        </div>
      </section>

      {/* Server Bio */}
      <section className="max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg">
          <h2 className="text-3xl font-bold mb-6">About Our Server</h2>
          <div className="prose prose-invert opacity-90">
            {siteConfig.content.serverBio.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Server Details */}
      <section className="grid gap-8 md:grid-cols-2">
        <ServerInfoCard />
        <QuickStats />
      </section>
    </div>
  );
}