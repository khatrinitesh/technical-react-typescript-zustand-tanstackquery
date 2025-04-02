import { create } from "zustand";



export interface ArrowStore {
    isRotated: boolean;
    toggleRotation: () => void;
  }

  export const useArrowStore = create<ArrowStore>((set) => ({
    isRotated: false,
    toggleRotation: () => set((state) => ({ isRotated: !state.isRotated })),
  }));