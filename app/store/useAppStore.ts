import { create } from "zustand";

interface AppState {
  isLoading: boolean;
  isPreloadComplete: boolean;
  startLoading: () => void;
  completePreload: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLoading: true,
  isPreloadComplete: false,
  startLoading: () => set({ isLoading: true }),
  completePreload: () => set({ isLoading: false, isPreloadComplete: true }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));