import React from 'react';
import { siteConfig } from '../../config/site';
import { ServerStats } from '../ServerStats';
import { useDiscordStats } from '../../hooks/useDiscordStats';

export function HeroSection() {
  const { stats, loading } = useDiscordStats();

  return (
    <section className="min-h-[70vh] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
      <div className="relative space-y-8 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold">{siteConfig.content.welcomeMessage}</h1>
        <p className="text-xl opacity-90">{siteConfig.seo.description}</p>
        <ServerStats
          totalMembers={stats.totalMembers}
          onlineMembers={stats.onlineMembers}
          staffOnline={stats.staffOnline}
          className="justify-center"
          loading={loading}
        />
        <a
          href={siteConfig.social.discord}
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
        >
          {siteConfig.content.joinButtonText}
        </a>
      </div>
    </section>
  );
}