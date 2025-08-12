export interface NavItem {
  name: string;
  path: string;
}

export interface SiteConfig {
  name: string;
  branding: {
    showLogo: boolean;
    logo: string;
    favicon: string;
    banner: string;
    primaryColor: string;
    secondaryColor: string;
  };
  features: {
    realTimeStats: boolean;
    customThemes: boolean;
    animations: boolean;
    searchEnabled: boolean;
    navigationOverflow: boolean;
  };
  navigation: {
    mainItems: NavItem[];
    overflowItems: NavItem[];
  };
  discord: {
    serverId: string;
    botToken?: string;
    staffRoles: string[];
    updateInterval: number;
    fallbackStats: {
      totalMembers: number;
      onlineMembers: number;
      staffOnline: number;
      channels: number;
      roles: number;
      boostLevel: number;
      activeEvents: number;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  layout: {
    maxWidth: string;
    navbarStyle: 'minimal' | 'centered' | 'expanded';
    footerEnabled: boolean;
    sidebarEnabled: boolean;
  };
  content: {
    welcomeMessage: string;
    longDescription: string;
    serverBio: string;
    joinButtonText: string;
    featuredSections: ('events' | 'roles' | 'staff')[];
  };
  social: {
    discord: string;
    twitter?: string;
    github?: string;
    youtube?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "WarFin",
  branding: {
    showLogo: false,
    logo: "https://cdn.discordapp.com/attachments/999961881831800852/1320993917482700870/dbb83ca08e06ca6c038ba0ee60231725.jpg?ex=6774d974&is=677387f4&hm=8ee59a4fbf66304ec73ccb9b65b04b7074b4cde9da904451f7ca5f2b81c49472&",
    favicon: "https://cdn.discordapp.com/attachments/999961881831800852/1320993917482700870/dbb83ca08e06ca6c038ba0ee60231725.jpg?ex=6774d974&is=677387f4&hm=8ee59a4fbf66304ec73ccb9b65b04b7074b4cde9da904451f7ca5f2b81c49472&",
    banner: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41",
    primaryColor: "#3b82f6",
    secondaryColor: "#8b5cf6"
  },
  features: {
    realTimeStats: false,
    customThemes: true,
    animations: true,
    searchEnabled: true,
    navigationOverflow: true
  },
  navigation: {
    mainItems: [
      { name: "Home", path: "/" },
      { name: "Info", path: "/info" },
      { name: "Rules", path: "/rules" },
      { name: "Staff", path: "/staff" }
    ],
    overflowItems: [
      { name: "Roles", path: "/roles" }
    ]
  },
  discord: {
    serverId: "829037998552121365",
    staffRoles: ["1078273385857040424"], // Add your actual staff role IDs here
    updateInterval: 60000,
    fallbackStats: {
      totalMembers: 15000,
      onlineMembers: 3500,
      staffOnline: 8,
      channels: 50,
      roles: 25,
      boostLevel: 3,
      activeEvents: 3
    }
  },
  seo: {
    title: "WarFin Community",
    description: "Join our vibrant Discord community",
    keywords: ["discord", "community", "gaming"],
    ogImage: "https://example.com/og-image.jpg"
  },
  layout: {
    maxWidth: "1440px",
    navbarStyle: "expanded",
    footerEnabled: true,
    sidebarEnabled: false
  },
  content: {
    welcomeMessage: "Welcome to WarFin Community",
    longDescription: "Founded in 2021, our community has grown into a thriving hub for enthusiasts, creators, and learners.",
    serverBio: `Welcome to WarFin - Where Community Meets Innovation!

Founded in 2021, WarFin has evolved from a small gaming community into a vibrant ecosystem of passionate individuals from all walks of life. Our server is built on the principles of inclusivity, creativity, and genuine connection.

What sets us apart:
• A diverse community spanning multiple time zones
• Regular events including game nights, movie screenings, and community challenges
• Dedicated spaces for various interests from gaming to art
• Active voice channels for real-time interaction
• Comprehensive role system with unique perks
• 24/7 active moderation team

Whether you're here to game, chat, learn, or just hang out, you'll find your place in our community. We pride ourselves on maintaining a welcoming atmosphere where everyone's voice can be heard.

Join us in building something special - where every member contributes to our shared story!`,
    joinButtonText: "Join Server",
    featuredSections: ["events", "roles", "staff"]
  },
  social: {
    discord: "https://discord.gg/warfin",
    twitter: "https://twitter.com/warfin",
    github: "https://github.com/warfin"
  }
} as const;