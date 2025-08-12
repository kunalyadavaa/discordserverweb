import React from 'react';
import { Users, MessageSquare, Shield } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Users,
    title: 'Active Community',
    description: 'Join thousands of members in meaningful discussions'
  },
  {
    icon: MessageSquare,
    title: 'Engaging Channels',
    description: 'Specialized channels for every topic and interest'
  },
  {
    icon: Shield,
    title: 'Dedicated Staff',
    description: 'Professional moderation team ensuring a safe environment'
  }
] as const;

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}