import React from 'react';
import { Heart, Star, Zap, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: Heart,
    title: 'Welcoming Community',
    description: 'New members are greeted warmly and helped to integrate quickly'
  },
  {
    icon: Star,
    title: 'Regular Events',
    description: 'Weekly game nights, movie screenings, and community challenges'
  },
  {
    icon: Zap,
    title: 'Active Chat',
    description: '24/7 active discussions across various topics and interests'
  },
  {
    icon: Trophy,
    title: 'Rewards Program',
    description: 'Earn roles and perks through active participation'
  }
];

export function CommunitySection() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Community Highlights</h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Join a vibrant community where everyone can find their place and contribute
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-6 rounded-lg bg-white/10 backdrop-blur-lg text-center hover:transform hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="opacity-80">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}