import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ProfileTypes = {
   todo: 'play' | 'onboarding';
   metadata: {
      gold: {
         id: string;
         value: string | number;
         status?: 'claim' | 'claimed';
      }[];
   };
};

interface MockState {
   profile: ProfileTypes | null;
   setProfile: (profile: ProfileTypes) => void;
   clearProfile: () => void;
}

// Persistent Zustand store for user data
export const useMockStore = create<MockState>()(
   persist(
      (set) => ({
         profile: null,
         setProfile: (profile) => set({ profile }),
         clearProfile: () => set({ profile: null }),
      }),
      { name: 'enain-combat-mock' }
   )
);
