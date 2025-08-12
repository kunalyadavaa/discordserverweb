import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { cn } from '../../lib/utils';

const navStyles = {
  minimal: "container mx-auto px-4 py-4",
  centered: "container mx-auto px-4 py-6 text-center",
  expanded: "container mx-auto px-4 py-6 flex items-center justify-between"
} as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/10">
      <nav className={navStyles[siteConfig.layout.navbarStyle]}>
        {siteConfig.branding.showLogo && (
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6" style={{ color: siteConfig.branding.primaryColor }} />
            <span className="text-lg font-bold">{siteConfig.name}</span>
          </div>
        )}
        
        <div className="flex items-center gap-1">
          {siteConfig.content.featuredSections.map((section) => (
            <NavLink
              key={section}
              to={`/${section}`}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  "hover:bg-white/20",
                  isActive && "bg-white/20",
                  siteConfig.features.animations && "hover:scale-105"
                )
              }
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </NavLink>
          ))}
        </div>

        {siteConfig.features.searchEnabled && (
          <button className="px-4 py-2 rounded-lg bg-white/10 text-sm">
            Search
          </button>
        )}
      </nav>
    </header>
  );
}