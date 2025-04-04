import React, { useState } from 'react';
import { useBulletStore } from '../store/useBulletStore';
import BulletList from './BulletList';

const BulletListApp:React.FC = () => {

    const { setBulletColor } = useBulletStore();
    const [colorInput, setColorInput] = useState<string>('#000000');
  
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setColorInput(e.target.value);
    };
  return (
    <>
       <div style={{ padding: '20px' }}>
      <h1>Bullet List with Animated Bullets</h1>
      <div>
        <label>Choose Bullet Color: </label>
        <input
          type="color"
          value={colorInput}
          onChange={handleColorChange}
          onBlur={() => setBulletColor(colorInput)}
        />
      </div>
      <BulletList />
    </div>
    </>
  );
}

export default BulletListApp;
