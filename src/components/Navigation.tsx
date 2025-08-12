import React from 'react';
import { NavLink } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Users, MoreHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navigation() {
  const [isOverflowOpen, setIsOverflowOpen] = React.useState(false);
  const mainNavItems = siteConfig.navigation.mainItems;
  const overflowNavItems = siteConfig.navigation.overflowItems;
  const showOverflow = siteConfig.features.navigationOverflow && overflowNavItems.length > 0;

  return (
    <nav className="flex items-center gap-8">
      {siteConfig.branding.showLogo && (
        <div className="flex items-center gap-2">
          <Users 
            className="h-6 w-6" 
            style={{ color: siteConfig.branding.primaryColor }} 
          />
          <span className="text-lg font-bold">{siteConfig.name}</span>
        </div>
      )}
      <div className={cn(
        "flex items-center gap-1",
        !siteConfig.branding.showLogo && "ml-0"
      )}>
        {mainNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                "hover:bg-white/20",
                isActive && "bg-white/20",
                siteConfig.features.animations && "hover:scale-105"
              )
            }
          >
            {item.name}
          </NavLink>
        ))}

        {showOverflow && (
          <div className="relative">
            <button
              onClick={() => setIsOverflowOpen(!isOverflowOpen)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/20"
            >
              <MoreHorizontal className="h-5 w-5" />
            </button>

            {isOverflowOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg overflow-hidden">
                {overflowNavItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOverflowOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block w-full px-4 py-2 text-left hover:bg-white/20 transition-colors",
                        isActive && "bg-white/20"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}