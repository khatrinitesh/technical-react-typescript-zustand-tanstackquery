import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { useArrowStore } from "../store/useArrowStore";
import { arrowConfig } from "../constants/constants";

const AnimatedArrow = () => {
  const { isRotated, toggleRotation } = useArrowStore();

  return (
    <>
       <motion.div
      onClick={toggleRotation}
      animate={{
        rotate: isRotated ? arrowConfig.rotatedDegree : arrowConfig.initialRotation,
        y: isRotated ? -arrowConfig.bounceHeight : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="animated-arrow cursor-pointer flex justify-center items-center p-4"
    >
      <FaArrowDown size={arrowConfig.size} color={arrowConfig.color} />
    </motion.div>
    </>
  );
};

export default AnimatedArrow;
