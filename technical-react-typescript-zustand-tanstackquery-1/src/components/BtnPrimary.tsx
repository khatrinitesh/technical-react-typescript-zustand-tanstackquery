import React from 'react';
import { ButtonProps } from '../interface';

const BtnPrimary:React.FC<ButtonProps> = ({label, ariaSelected, onClick}) => {
  return (
    <>
    <button onClick={onClick} type="button"
    className="btn"
    aria-selected={ariaSelected ? 'true' : 'false'}>
    {label}
  </button>
    </>
  );
}

export default BtnPrimary;
