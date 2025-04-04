import { create } from "zustand";


interface BorderStore {
    borderColor: string;
    borderWidth: number;
    frameStyle: 'solid' | 'dashed' | 'dotted'; // Different frame styles
    setBorderColor: (color: string) => void;
    setBorderWidth: (width: number) => void;
    setFrameStyle: (style: 'solid' | 'dashed' | 'dotted') => void;
  }
  

  export const useBorderFrameStore = create<BorderStore>((set) => ({
    borderColor: 'black',
    borderWidth: 5,
    frameStyle: 'solid',
    setBorderColor: (color) => set({ borderColor: color }),
    setBorderWidth: (width) => set({ borderWidth: width }),
    setFrameStyle: (style) => set({ frameStyle: style }),
  }));