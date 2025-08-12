# Discord Server Portfolio

A modern, responsive website for showcasing your Discord server with real-time stats, customizable themes, and a beautiful UI.

## Table of Contents
- [Setup Guide](#setup-guide)
- [Customization Guide](#customization-guide)
  - [Adding Staff Members](#adding-staff-members)
  - [Updating Rules](#updating-rules)
  - [Creating New Pages](#creating-new-pages)
  - [Modifying Themes](#modifying-themes)
- [Development Guide](#development-guide)
- [Troubleshooting](#troubleshooting)

## Setup Guide
Paste your token and guild id in .env

1. ```npm i```

2. ```npm run dev```

the bot and the website should have started! 

## Customization Guide

### Adding Staff Members

1. Open `src/data/staff.ts`
2. Add new staff members to the `staffMembers` array:
```typescript
export const staffMembers: StaffMember[] = [
  {
    id: "unique-id",
    name: "Staff Name",
    role: "Staff Role",
    avatar: "avatar-url",
    description: "Staff description",
    badges: ["badge1", "badge2"]
  }
];
```

### Updating Rules

1. Open `src/data/rules.ts`
2. Modify the `rules` array:
```typescript
export const rules: RuleCategory[] = [
  {
    id: "category-id",
    name: "Category Name",
    description: "Category description",
    rules: [
      {
        id: "rule-id",
        title: "Rule Title",
        description: "Rule description"
      }
    ]
  }
];
```

### Creating New Pages

1. Create a new component in `src/pages/`:
```typescript
import React from 'react';

export function NewPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Page Title</h1>
        <p className="text-xl opacity-80">Page description</p>
      </section>
      {/* Add your content here */}
    </div>
  );
}
```

2. Add the route in `src/App.tsx`:
```typescript
import { NewPage } from './pages/NewPage';

// Inside the Routes component:
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation in `src/config/site.ts`:
```typescript
navigation: {
  mainItems: [
    // ... existing items
    { name: "New Page", path: "/new-page" }
  ]
}
```

### Modifying Themes

1. Update theme colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

2. Add new theme in `src/store/theme.ts`:
```typescript
type Theme = 'light' | 'dark' | 'custom' | 'your-theme';
```

3. Update ThemeToggle component in `src/components/ThemeToggle.tsx`

### Adding Features

1. Create new component in appropriate directory:
```typescript
// src/components/features/NewFeature.tsx
export function NewFeature() {
  return (
    <div className="p-6 rounded-lg bg-white/10">
      {/* Feature content */}
    </div>
  );
}
```

2. Add to relevant page:
```typescript
import { NewFeature } from '../components/features/NewFeature';

// Inside your page component:
<NewFeature />
```

## Development Guide

### Component Structure
```
components/
├── features/     # Feature-specific components
├── layout/       # Layout components
├── shared/       # Reusable components
└── ui/           # Basic UI components
```

### Best Practices
- Keep components small and focused
- Use TypeScript for type safety
- Follow naming conventions:
  - Components: PascalCase
  - Files: PascalCase.tsx
  - Utilities: camelCase.ts
- Use Tailwind CSS for styling
- Extract reusable logic to hooks
- Keep pages thin, move logic to components

### Adding New Features
1. Plan the feature
2. Create necessary components
3. Add required data structures
4. Update configuration if needed
5. Add to relevant pages
6. Test thoroughly

## Troubleshooting

[Previous troubleshooting section remains the same...]