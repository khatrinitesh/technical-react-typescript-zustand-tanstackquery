import { create } from "zustand";
import { ImageStore } from "../interface";
import { textImageData } from "../constants/constants";

export const useImageStore = create<ImageStore>((set) => ({
    images:textImageData,
    setImages:(images) => set({images})
}))