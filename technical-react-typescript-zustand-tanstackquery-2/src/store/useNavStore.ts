import { create } from "zustand";

interface NavStore {
    activeLink: string;
    setActiveLink: (link: string) => void;
  }

  export const useNavStore = create<NavStore>((set) => ({
    activeLink: 'home', // default active link
    setActiveLink: (link: string) => set({ activeLink: link }),
  }));