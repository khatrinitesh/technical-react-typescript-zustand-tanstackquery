import React from 'react';
// third party library
import { motion } from "framer-motion";
// store
import { useImageStore } from '../store/useImageStore';

const TextImageEffect:React.FC = () => {
    const images = useImageStore((state) => state.images)
  return (
    <>
      <div className="p-5 space-y-4 flex flex-col items-center">
      {images.map((item) => (
        <div key={item.id} className="relative group">
          {/* Hoverable Text */}
          <motion.span
            className="text-2xl font-semibold cursor-pointer"
            initial={{ color: "#333" }}
            whileHover={{
              color: "#1e90ff",
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
          >
            {item.text}
          </motion.span>

          {/* Image Reveal Effect */}
          <motion.img
            src={item.imageUrl}
            alt={item.text}
            className="absolute left-1/2 -translate-x-1/2 w-64 h-40 rounded-lg shadow-lg opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      ))}
    </div>
    </>
  );
}

export default TextImageEffect;
