import { create } from "zustand";


interface BorderStore {
    borderColor: string;
    borderWidth: number;
    setBorderColor: (color: string) => void;
    setBorderWidth: (width: number) => void;
  }

  export const useBorderStore = create<BorderStore>((set) => ({
    borderColor: 'black', // default border color
    borderWidth: 5, // default border width
    setBorderColor: (color) => set({ borderColor: color }),
    setBorderWidth: (width) => set({ borderWidth: width }),
  }));