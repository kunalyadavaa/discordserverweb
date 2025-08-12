export interface Rule {
  id: string;
  title: string;
  description: string;
}

export interface RuleCategory {
  id: string;
  name: string;
  description: string;
  rules: Rule[];
}

export const rules: RuleCategory[] = [
  {
    id: "general",
    name: "General Rules",
    description: "Basic guidelines for all members",
    rules: [
      {
        id: "respect",
        title: "Be Respectful",
        description: "Treat all members with respect. No harassment, hate speech, or bullying."
      },
      {
        id: "language",
        title: "Language",
        description: "Keep conversations family-friendly. No explicit content or strong language."
      }
    ]
  },
  {
    id: "content",
    name: "Content Guidelines",
    description: "Rules for sharing content",
    rules: [
      {
        id: "spam",
        title: "No Spam",
        description: "Don't spam messages, emotes, or links. Keep discussions meaningful."
      },
      {
        id: "advertising",
        title: "No Advertising",
        description: "Don't promote other servers or services without staff permission."
      }
    ]
  }
];