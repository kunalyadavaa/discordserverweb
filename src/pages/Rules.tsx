import React from 'react';
import { rules } from '../data/rules';
import { RuleCard } from '../components/RuleCard';

export function Rules() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Server Rules</h1>
        <p className="text-xl opacity-80">Please follow these guidelines to maintain a positive community</p>
      </section>

      <div className="space-y-8">
        {rules.map((category) => (
          <section key={category.id} className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
              <p className="opacity-80">{category.description}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {category.rules.map((rule) => (
                <RuleCard key={rule.id} rule={rule} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}