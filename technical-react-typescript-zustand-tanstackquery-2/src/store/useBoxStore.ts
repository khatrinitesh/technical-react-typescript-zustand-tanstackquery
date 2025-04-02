

import { create } from "zustand";
import { boxColors, boxCount, boxSpeed } from "../constants/constants";
import { Box } from "../interface";

interface BoxStore {
  boxes: Box[];
  updateBoxes: () => void;
}

export const useBoxStore = create<BoxStore>((set) => ({
  boxes: Array.from({ length: boxCount }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 80 + 20,
    speedX: (Math.random() - 0.5) * boxSpeed,
    speedY: (Math.random() - 0.5) * boxSpeed,
    color: boxColors[i % boxColors.length],
  })),
  updateBoxes: () =>
    set((state) => {
      const newBoxes = state.boxes.map((box) => {
        let newX = box.x + box.speedX;
        let newY = box.y + box.speedY;
        let newSpeedX = box.speedX;
        let newSpeedY = box.speedY;

        // Wall collision detection
        if (newX <= 0 || newX + box.size >= window.innerWidth) newSpeedX *= -1;
        if (newY <= 0 || newY + box.size >= window.innerHeight) newSpeedY *= -1;

        return { ...box, x: newX, y: newY, speedX: newSpeedX, speedY: newSpeedY };
      });

      return { boxes: newBoxes };
    }),
}));
