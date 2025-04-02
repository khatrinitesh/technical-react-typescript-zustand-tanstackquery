import { create } from "zustand";
import { avatars } from "../constants/constants";

interface AvatarStore {
  selectedAvatar: string;
  selectAvatar: (avatar: string) => void;
}

export const useAvatarStore = create<AvatarStore>((set) => ({
  selectedAvatar: avatars[0].imageUrl, // Default Avatar
  selectAvatar: (avatar) => set({ selectedAvatar: avatar }),
}));
