export interface Role {
  id: string;
  name: string;
  color: string;
  description: string;
  permissions: string[];
  requirements?: string[];
}

export const roles: Role[] = [
  {
    id: "admin",
    name: "Administrator",
    color: "#FF0000",
    description: "Server administrators with full permissions",
    permissions: ["Manage Server", "Manage Roles", "Manage Channels", "Ban Members"]
  },
  {
    id: "moderator",
    name: "Moderator",
    color: "#00FF00",
    description: "Community moderators helping maintain order",
    permissions: ["Kick Members", "Manage Messages", "Mute Members"]
  },
  {
    id: "vip",
    name: "VIP Member",
    color: "#FFD700",
    description: "Special role for active contributors",
    permissions: ["Access VIP Channels", "Custom Profile"],
    requirements: ["3 months active", "Level 20", "No warnings"]
  }
];