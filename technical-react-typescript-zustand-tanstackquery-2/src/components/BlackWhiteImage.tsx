import { motion } from "framer-motion";
import { useImageStore } from "../store/useImageStore";

const BlackWhiteImage = () => {
  const { images } = useImageStore();

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {images.map((image) => (
        <motion.div
          key={image.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover transition-all duration-300"
            initial={{ filter: "grayscale(100%)" }}
            whileHover={{ filter: "grayscale(0%)" }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BlackWhiteImage;
