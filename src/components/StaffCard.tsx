import React from 'react';
import { type StaffMember } from '../data/staff';
import { Calendar, Mail } from 'lucide-react';

interface StaffCardProps {
  member: StaffMember;
}

export function StaffCard({ member }: StaffCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur transition-all group-hover:blur-xl" />
      <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 transition-transform group-hover:-translate-y-1">
        <div className="flex items-start gap-6 mb-6">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20"
          />
          <div>
            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm px-3 py-1 bg-white/20 rounded-full inline-block">
              {member.role}
            </p>
          </div>
        </div>
        
        <p className="text-lg mb-6 leading-relaxed opacity-90">
          {member.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {member.badges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20"
            >
              {badge}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 text-sm opacity-80">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Joined 2021</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>Always Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}