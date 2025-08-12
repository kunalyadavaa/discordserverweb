import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-lg bg-white/10 backdrop-blur-lg">
      <Icon className="h-8 w-8 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="opacity-80">{description}</p>
    </div>
  );
}