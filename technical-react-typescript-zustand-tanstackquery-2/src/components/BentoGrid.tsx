import React from 'react';
import { useBentoStore } from '../store/useBentoStore';
import { motion } from "framer-motion";

const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-2 row-span-1",
    large: "col-span-2 row-span-2",
  };

const BentoGrid:React.FC = () => {

    const { items } = useBentoStore();
  return (
    <>
       <div className="grid grid-cols-4 grid-rows-4 gap-4 p-6 bg-gray-900 w-full h-screen">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={`p-6 flex justify-center items-center rounded-lg shadow-lg ${sizeClasses[item.size]}`}
          style={{ backgroundColor: item.bgColor }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <h2 className="text-white text-xl font-bold">{item.title}</h2>
        </motion.div>
      ))}
    </div>
    </>
  );
}

export default BentoGrid;
