
import { create } from 'zustand';
import { ImageItem } from './../interface/index';
import { images } from '../constants/constants';

interface BlurStore {
    image: ImageItem;
    blur: number;
    setBlur: (value: number) => void;
  }

  export const useBlurStore = create<BlurStore>((set) => ({
    image: images[0],
    blur: 10,
    setBlur: (value) => set({ blur: value }),
  }));
