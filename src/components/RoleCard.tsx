import React from 'react';
import { type Role } from '../data/roles';
import { Shield, Check } from 'lucide-react';

interface RoleCardProps {
  role: Role;
}

export function RoleCard({ role }: RoleCardProps) {
  return (
    <div className="group relative">
      <div 
        className="absolute inset-0 rounded-2xl blur transition-all group-hover:blur-xl"
        style={{ background: `${role.color}20` }}
      />
      <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 transition-transform group-hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="p-3 rounded-xl"
            style={{ background: `${role.color}30` }}
          >
            <Shield className="h-6 w-6" style={{ color: role.color }} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">{role.name}</h3>
            <div 
              className="w-24 h-1 rounded-full"
              style={{ background: role.color }}
            />
          </div>
        </div>

        <p className="text-lg mb-8 leading-relaxed opacity-90">
          {role.description}
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-3 opacity-80">Permissions</h4>
            <div className="grid grid-cols-2 gap-2">
              {role.permissions.map((permission) => (
                <div
                  key={permission}
                  className="flex items-center gap-2 text-sm p-2 rounded-lg bg-white/5"
                >
                  <Check className="h-4 w-4" style={{ color: role.color }} />
                  <span>{permission}</span>
                </div>
              ))}
            </div>
          </div>

          {role.requirements && (
            <div>
              <h4 className="text-sm font-medium mb-3 opacity-80">Requirements</h4>
              <div className="flex flex-wrap gap-2">
                {role.requirements.map((requirement) => (
                  <span
                    key={requirement}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20"
                  >
                    {requirement}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}