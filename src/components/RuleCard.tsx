import React from 'react';
import { type Rule } from '../data/rules';

interface RuleCardProps {
  rule: Rule;
}

export function RuleCard({ rule }: RuleCardProps) {
  return (
    <div className="p-4 rounded-lg bg-white/10 backdrop-blur-lg animate-fade-in">
      <h3 className="text-lg font-semibold mb-2">{rule.title}</h3>
      <p className="opacity-80">{rule.description}</p>
    </div>
  );
}