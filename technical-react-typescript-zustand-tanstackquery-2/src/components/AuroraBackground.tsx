import { motion } from "framer-motion";
import { auroraConfig } from "../constants/constants";

const AuroraBackground:React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {auroraConfig.colors.map((color, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{
            opacity: [0.6, 0.8, 0.6],
            scale: [1, 1.2, 1],
            x: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`],
            y: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`],
          }}
          transition={{
            duration: auroraConfig.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[400px] h-[400px] bg-gradient-to-br rounded-full blur-3xl"
          style={{ background: color }}
        />
      ))}
    </div>
  );
};

export default AuroraBackground;
