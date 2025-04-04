import React, { useState } from 'react';
import { useBorderFrameStore } from '../store/useBorderFrameStore';
import ImageWithFrame from './ImageWithFrame';

const ImageWithFrameApp = () => {
    const { setBorderColor, setBorderWidth, setFrameStyle } = useBorderFrameStore();
    const [colorInput, setColorInput] = useState('');
    const [widthInput, setWidthInput] = useState<number>(5);
    const [styleInput, setStyleInput] = useState<'solid' | 'dashed' | 'dotted'>('solid');
  
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setColorInput(e.target.value);
    };
  
    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setWidthInput(Number(e.target.value));
    };
  
    const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setStyleInput(e.target.value as 'solid' | 'dashed' | 'dotted');
    };
  
  return (
    <>
      <h1>Image with Dynamic Border Frame</h1>
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

      <div>
        <label>Border Style: </label>
        <select
          value={styleInput}
          onChange={handleStyleChange}
          onBlur={() => setFrameStyle(styleInput)}
        >
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
        </select>
      </div>

      <ImageWithFrame
        src="https://www.rentomojo.com/blog/wp-content/uploads/2024/12/cst-railway-station-660x660.jpg"
        alt="Sample Image"
      />

    </>
  );
}

export default ImageWithFrameApp;
