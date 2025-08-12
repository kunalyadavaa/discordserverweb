import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  showLogo: boolean;
  toggleLogo: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      showLogo: true,
      toggleLogo: () => set((state) => ({ showLogo: !state.showLogo })),
    }),
    {
      name: 'ui-storage',
    }
  )
);