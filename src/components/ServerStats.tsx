import React from 'react';
import { Users, UserCheck, Shield } from 'lucide-react';
import { formatNumber } from '../lib/utils';

interface ServerStatsProps {
  totalMembers: number;
  onlineMembers: number;
  staffOnline: number;
  className?: string;
  loading?: boolean;
}

export function ServerStats({ 
  totalMembers, 
  onlineMembers, 
  staffOnline, 
  className,
  loading = false 
}: ServerStatsProps) {
  return (
    <div className={`flex gap-6 ${className}`}>
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5 opacity-70" />
        <span className="text-sm">
          {loading ? '...' : `${formatNumber(totalMembers)} members`}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <UserCheck className="h-5 w-5 opacity-70" />
        <span className="text-sm">
          {loading ? '...' : `${formatNumber(onlineMembers)} online`}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 opacity-70" />
        <span className="text-sm">
          {loading ? '...' : `${staffOnline} staff online`}
        </span>
      </div>
    </div>
  );
}