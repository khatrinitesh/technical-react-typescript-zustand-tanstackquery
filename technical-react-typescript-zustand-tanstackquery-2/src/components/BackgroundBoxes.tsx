import { motion } from "framer-motion";
import { useEffect } from "react";
import { useBoxStore } from "../store/useBoxStore";

const BackgroundBoxes = () => {
  const { boxes, updateBoxes } = useBoxStore();

  useEffect(() => {
    const interval = setInterval(updateBoxes, 20);
    return () => clearInterval(interval);
  }, [updateBoxes]);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-black">
      {boxes.map((box) => (
        <motion.div
          key={box.id}
          className="absolute rounded-lg opacity-75"
          style={{ width: box.size, height: box.size, backgroundColor: box.color }}
          animate={{ x: box.x, y: box.y, rotate: box.x * 0.1 }}
          transition={{ ease: "linear", duration: 0.02 }}
        />
      ))}
    </div>
  );
};

export default BackgroundBoxes;
