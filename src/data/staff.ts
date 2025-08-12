export interface StaffMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
  badges: string[];
}

export const staffMembers: StaffMember[] = [
  {
    id: "1",
    name: "Alex Thompson",
    role: "Server Owner",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80",
    description: "Founded the community in 2021. Passionate about building inclusive spaces.",
    badges: ["founder", "admin", "developer"]
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Head Moderator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    description: "Ensuring a safe and welcoming environment for all members.",
    badges: ["moderator", "events"]
  }
];