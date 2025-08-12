import React from 'react';
import { Activity, Award } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { useDiscordStats } from '../../hooks/useDiscordStats';

export function ServerInfoCard() {
  const { stats, loading } = useDiscordStats();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">About Us</h2>
      <p className="opacity-80 leading-relaxed">
        {siteConfig.longDescription}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-white/10">
          <Activity className="h-5 w-5 mb-2 opacity-70" />
          <div className="text-sm opacity-80">Server Age</div>
          <div className="font-semibold">
            {loading ? '...' : `${stats.serverAge} days`}
          </div>
        </div>
        <div className="p-4 rounded-lg bg-white/10">
          <Award className="h-5 w-5 mb-2 opacity-70" />
          <div className="text-sm opacity-80">Partnership Level</div>
          <div className="font-semibold">
            {loading ? '...' : stats.partnerLevel}
          </div>
        </div>
      </div>
    </div>
  );
}