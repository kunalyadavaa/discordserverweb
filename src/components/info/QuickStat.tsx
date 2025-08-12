import React from 'react';

interface QuickStatProps {
  label: string;
  value: string | number;
}

export function QuickStat({ label, value }: QuickStatProps) {
  return (
    <div className="flex justify-between p-4 rounded-lg bg-white/10">
      <span className="opacity-80">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}