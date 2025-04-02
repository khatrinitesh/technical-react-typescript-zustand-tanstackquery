import { create } from "zustand";
import { images } from './../constants/constants';
import { ImageItem } from "../interface";

interface ImageStore {
  images: ImageItem[];
}

export const useImageStore = create<ImageStore>(() => ({
  images,
}));
