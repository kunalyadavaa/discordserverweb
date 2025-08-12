import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useThemeStore } from '../store/theme';
import { cn } from '../lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();
  const [isOpen, setIsOpen] = React.useState(false);

  const themes = [
    { id: 'light', label: 'Light' },
    { id: 'dark', label: 'Dark' },
    { id: 'custom', label: 'Custom' }
  ] as const;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg"
      >
        <span className="capitalize">{theme} Theme</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg overflow-hidden">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
              className={cn(
                "w-full px-4 py-2 text-left hover:bg-white/20 transition-colors",
                theme === t.id && "bg-white/20"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}