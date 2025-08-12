import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
}

export function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <div className="p-4 rounded-lg bg-white/10">
      <Icon className="h-5 w-5 mb-2 opacity-70" />
      <div className="text-sm opacity-80">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}