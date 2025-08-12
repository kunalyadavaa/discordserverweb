import React from 'react';
import { roles } from '../data/roles';
import { RoleCard } from '../components/RoleCard';
import { Shield } from 'lucide-react';

export function Roles() {
  return (
    <div className="space-y-16">
      <section className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
        <div className="inline-flex items-center justify-center gap-3 bg-white/10 px-4 py-2 rounded-full mb-6">
          <Shield className="h-5 w-5" />
          <span className="text-sm font-medium">Role System</span>
        </div>
        <h1 className="text-5xl font-bold mb-6">Server Roles</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Discover our role hierarchy and the unique privileges each role brings to the community
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
}