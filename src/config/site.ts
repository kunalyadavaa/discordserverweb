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
  name: "Aivra",
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
      totalMembers: 30,
      onlineMembers: 5,
      staffOnline: 3,
      channels: 5,
      roles: 8,
      boostLevel: 5,
      activeEvents: 3
    }
  },
  seo: {
    title: "Aivra Community",
    description: "Join our vibrant Discord community",
    keywords: ["discord", "community", "tech"],
    ogImage: "https://example.com/og-image.jpg"
  },
  layout: {
    maxWidth: "1440px",
    navbarStyle: "expanded",
    footerEnabled: true,
    sidebarEnabled: false
  },
  content: {
    welcomeMessage: "Welcome to Aivra Community",
    longDescription: "Founded in 2025, our community has grown into a thriving hub for enthusiasts, creators, and learners.",
    serverBio: `Welcome to Aivra - Where Community Meets Innovation!

Welcome to the Avira Community — a space where passionate tech engineers from across Asia come together to connect, collaborate, and grow.
We’re all about:

💡 Sharing Knowledge – Exchange ideas, insights, and solutions.

🤝 Building Connections – Network with like-minded professionals.

🚀 Fostering Innovation – Work together on creative, real-world tech challenges.

Whether you’re a seasoned expert or an aspiring engineer, our community is here to inspire, support, and push you toward your next big breakthrough.`,
    joinButtonText: "Join Server",
    featuredSections: ["events", "roles", "staff"]
  },
  social: {
    discord: "https://discord.gg/RkCyDyhfXe",
    twitter: "https://twitter.com/aivra",
    github: "https://github.com/aivra"
  }
} as const;