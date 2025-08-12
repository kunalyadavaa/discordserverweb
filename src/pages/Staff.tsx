import React from 'react';
import { staffMembers } from '../data/staff';
import { StaffCard } from '../components/StaffCard';
import { Users } from 'lucide-react';

export function Staff() {
  return (
    <div className="space-y-16">
      <section className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
        <div className="inline-flex items-center justify-center gap-3 bg-white/10 px-4 py-2 rounded-full mb-6">
          <Users className="h-5 w-5" />
          <span className="text-sm font-medium">Our Team</span>
        </div>
        <h1 className="text-5xl font-bold mb-6">Meet Our Staff</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Our dedicated team works around the clock to ensure the community remains safe, engaging, and welcoming for everyone.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {staffMembers.map((member) => (
          <StaffCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}