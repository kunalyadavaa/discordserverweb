import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useUIStore } from '../../store/ui';

export function LogoToggle() {
  const { showLogo, toggleLogo } = useUIStore();
  
  return (
    <button
      onClick={toggleLogo}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
      title={showLogo ? 'Hide Logo' : 'Show Logo'}
    >
      {showLogo ? (
        <Eye className="h-5 w-5" />
      ) : (
        <EyeOff className="h-5 w-5" />
      )}
    </button>
  );
}