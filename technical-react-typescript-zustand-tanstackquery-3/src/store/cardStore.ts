import { create } from "zustand";
import type { Card } from "../types/card";


interface CardState {
    selectedCard:Card | null;
    setSelectedCard:(card:Card | null) => void;
}

export const useCardStore = create<CardState>((set) => ({
    selectedCard: null,
    setSelectedCard: (card) => set({ selectedCard: card }),
  }));