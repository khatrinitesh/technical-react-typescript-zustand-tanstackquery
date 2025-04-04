import React, { useState } from 'react';
import { useBorderStore } from '../store/useBorderStore';
import ImageWithBorder from './ImageWithBorder';

const ImageWithBorderApp:React.FC = () => {
    const { setBorderColor, setBorderWidth } = useBorderStore();
    const [colorInput, setColorInput] = useState('');
    const [widthInput, setWidthInput] = useState<number>(5);

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColorInput(e.target.value);
      };
    
      const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWidthInput(Number(e.target.value));
      };

  return (
    <>
       <h1>Image with Animated Border</h1>
      <div>
        <label>Border Color: </label>
        <input
          type="color"
          value={colorInput}
          onChange={handleColorChange}
          onBlur={() => setBorderColor(colorInput)}
        />
      </div>

      <div>
        <label>Border Width: </label>
        <input
          type="number"
          value={widthInput}
          onChange={handleWidthChange}
          onBlur={() => setBorderWidth(widthInput)}
          min={1}
          max={20}
        />
      </div>

      <ImageWithBorder
        src="https://www.constructionworld.in/assets/uploads/35a3b586802bdd437ea0cbbb0ac83a0b.jpg"
        alt="Sample Image"
      />
    </>
  );
}

export default ImageWithBorderApp;
