import React from 'react';
import { ImageWithBorderProps } from '../interface';
import { useBorderStore } from '../store/useBorderStore';
import { motion } from 'framer-motion';

const ImageWithBorder:React.FC<ImageWithBorderProps> = ({ src, alt }) => {

    const {borderColor, borderWidth } = useBorderStore();
  return (
    <>
       <motion.div
      style={{
        display: 'inline-block',
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: '8px', // Optional: add rounded corners
        padding: '10px',
      }}
      animate={{
        scale: 1.05, // Slight animation on hover
      }}
      whileHover={{
        scale: 1.1, // Scale up on hover
      }}
    >
      <img src={src} alt={alt} style={{ borderRadius: '8px' }} />
    </motion.div>
    </>
  );
}

export default ImageWithBorder;
