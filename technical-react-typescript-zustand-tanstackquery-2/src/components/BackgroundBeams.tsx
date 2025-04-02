import { motion } from "framer-motion";
import { useEffect } from "react";
import { useBeamStore } from "../store/useBeamStore";

const BackgroundBeams:React.FC = () => {
  const { beams, updateBeams } = useBeamStore();

  useEffect(() => {
    const interval = setInterval(updateBeams, 20);
    return () => clearInterval(interval);
  }, [updateBeams]);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-black">
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute w-32 h-1 rounded-full opacity-75"
          style={{ backgroundColor: beam.color }}
          animate={{ x: beam.x, y: beam.y, rotate: beam.x * 0.1 }}
          transition={{ ease: "linear", duration: 0.02 }}
        />
      ))}
    </div>
  );
};

export default BackgroundBeams;
