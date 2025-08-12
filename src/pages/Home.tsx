import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { CommunitySection } from '../components/home/CommunitySection';
import { EventsSection } from '../components/home/EventsSection';
import { JoinCTA } from '../components/home/JoinCTA';

export function Home() {
  return (
    <div className="space-y-24 pb-16">
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <EventsSection />
      <JoinCTA />
    </div>
  );
}