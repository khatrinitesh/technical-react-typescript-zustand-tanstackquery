import React from 'react';
import { useBulletStore } from '../store/useBulletStore';
import { motion } from 'framer-motion';
import { listItems } from '../constants/constants';

const BulletList: React.FC = () => {
    const { bulletColor } = useBulletStore(); // Get bullet color from Zustand store
  
    return (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {listItems.map((item, index) => (
          <motion.li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              fontSize: '18px',
            }}
            whileHover={{
              scale: 1.05, // Slight scale effect on hover
              color: bulletColor, // Change text color on hover
            }}
          >
            <motion.span
              style={{
                display: 'inline-block',
                marginRight: '10px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: bulletColor, // Use the bullet color from Zustand
              }}
              animate={{
                scale: 1.2, // Animate the bullet on hover
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
            />
            {item.text}
          </motion.li>
        ))}
      </ul>
    );
  };
  
  export default BulletList;