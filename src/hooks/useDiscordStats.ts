import { useState, useEffect } from 'react';
import { type DiscordStats, fetchDiscordStats } from '../lib/discord';
import { siteConfig } from '../config/site';

export function useDiscordStats() {
  const [stats, setStats] = useState<DiscordStats>(siteConfig.discord.fallbackStats);
  const [loading, setLoading] = useState(siteConfig.features.realTimeStats);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    let intervalId: number | null = null;

    async function updateStats() {
      try {
        const newStats = await fetchDiscordStats();
        if (mounted) {
          setStats(newStats);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch stats'));
          setStats(siteConfig.discord.fallbackStats);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    // Only fetch stats if real-time stats are enabled
    if (siteConfig.features.realTimeStats) {
      updateStats();
      intervalId = window.setInterval(updateStats, siteConfig.discord.updateInterval);
    } else {
      setStats(siteConfig.discord.fallbackStats);
      setLoading(false);
    }

    return () => {
      mounted = false;
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return { stats, loading, error };
}