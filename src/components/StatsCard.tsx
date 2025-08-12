import React from 'react';
import { cn } from '../lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
}

export function StatsCard({ title, value, icon, className }: StatsCardProps) {
  return (
    <div className={cn(
      "p-6 rounded-lg bg-white/10 backdrop-blur-lg animate-fade-in",
      className
    )}>
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-white/20">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-medium opacity-80">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}