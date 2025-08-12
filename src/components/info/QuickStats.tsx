import React from 'react';
import { QuickStat } from './QuickStat';
import { useDiscordStats } from '../../hooks/useDiscordStats';

export function QuickStats() {
  const { stats, loading } = useDiscordStats();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Quick Stats</h2>
      <div className="space-y-4">
        <QuickStat 
          label="Total Channels" 
          value={loading ? '...' : stats.channels} 
        />
        <QuickStat 
          label="Available Roles" 
          value={loading ? '...' : stats.roles} 
        />
        <QuickStat 
          label="Active Events" 
          value={loading ? '...' : stats.activeEvents} 
        />
        <QuickStat 
          label="Server Boosts" 
          value={loading ? '...' : `Level ${stats.boostLevel}`} 
        />
      </div>
    </div>
  );
}