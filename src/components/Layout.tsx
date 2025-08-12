import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { ThemeToggle } from './ThemeToggle';
import { useThemeStore } from '../store/theme';
import { cn } from '../lib/utils';

export function Layout() {
  const { theme } = useThemeStore();

  return (
    <div className={cn(
      'min-h-screen transition-colors duration-300',
      theme === 'light' && 'bg-white text-gray-900',
      theme === 'dark' && 'bg-gray-900 text-white',
      theme === 'custom' && 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white'
    )}>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Navigation />
          <ThemeToggle />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}