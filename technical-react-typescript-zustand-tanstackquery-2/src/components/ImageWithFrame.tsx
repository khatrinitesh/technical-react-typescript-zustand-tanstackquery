import React from 'react';
import { useBorderStore } from '../store/useBorderStore';
import { motion } from 'framer-motion';

const ImageWithFrame:React.FC<ImageWithFrameProps> = ({src, alt }) => {

     // Retrieve state values for border styling
  const { borderColor, borderWidth, frameStyle } = useBorderStore();
  return (
    <>
      <motion.div
      style={{
        display: 'inline-block',
        border: `${borderWidth}px ${frameStyle} ${borderColor}`,
        borderRadius: '12px', // Optional: rounded corners for the frame
        padding: '12px', // Padding between the image and the frame
      }}
      animate={{
        scale: 1.05, // Slight scale animation on hover
      }}
      whileHover={{
        scale: 1.1, // Scale more when hovered
        rotate: 2, // Optional: Rotate effect on hover
      }}
    >
      <img src={src} alt={alt} style={{ borderRadius: '8px' }} />
    </motion.div>
    </>
  );
}

export default ImageWithFrame;
