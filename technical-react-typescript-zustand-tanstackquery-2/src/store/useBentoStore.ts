import { create } from "zustand";
import { bentoItems } from "../constants/constants";
import { BentoItem } from "../interface";


interface BentoStore {
    items: BentoItem[];
    setItems: (items: BentoItem[]) => void;
  }

  export const useBentoStore = create<BentoStore>((set) => ({
    items: bentoItems,
    setItems: (items) => set({ items }),
  }));