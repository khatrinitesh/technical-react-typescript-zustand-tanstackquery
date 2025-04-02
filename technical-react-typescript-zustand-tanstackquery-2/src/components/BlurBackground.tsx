import { motion } from "framer-motion";
import { useBlurStore } from "../store/useBlurStore";

const BlurBackground = () => {
  const { image, blur, setBlur } = useBlurStore();

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image.src})` }}
        initial={{ filter: "blur(20px)" }}
        animate={{ filter: `blur(${blur}px)` }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative z-10 bg-white/30 p-8 rounded-lg backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-white">Blur Effect</h1>
        <input
          type="range"
          min="0"
          max="20"
          value={blur}
          onChange={(e) => setBlur(Number(e.target.value))}
          className="mt-4 w-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BlurBackground;
