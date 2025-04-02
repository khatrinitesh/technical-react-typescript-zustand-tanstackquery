import { create } from "zustand";
import { beamColors, beamCount, beamSpeed } from "../constants/constants";

interface BeamStore {
  beams: Beam[];
  updateBeams: () => void;
}

export const useBeamStore = create<BeamStore>((set) => ({
  beams: Array.from({ length: beamCount }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    speedX: (Math.random() - 0.5) * beamSpeed,
    speedY: (Math.random() - 0.5) * beamSpeed,
    color: beamColors[i % beamColors.length],
  })),
  updateBeams: () =>
    set((state) => {
      const newBeams = state.beams.map((beam) => {
        let newX = beam.x + beam.speedX;
        let newY = beam.y + beam.speedY;
        let newSpeedX = beam.speedX;
        let newSpeedY = beam.speedY;

        // Wall collision detection
        if (newX <= 0 || newX >= window.innerWidth) newSpeedX *= -1;
        if (newY <= 0 || newY >= window.innerHeight) newSpeedY *= -1;

        return { ...beam, x: newX, y: newY, speedX: newSpeedX, speedY: newSpeedY };
      });

      return { beams: newBeams };
    }),
}));
