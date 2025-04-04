import { create } from "zustand";
import { BulletStore } from "../interface";


export const useBulletStore = create<BulletStore>((set) => ({
    bulletColor: 'black', // default bullet color
    setBulletColor: (color: string) => set({ bulletColor: color }),
  }));