import React, { useState } from 'react';
import Banner from '../components/Banner';
import BtnPrimary from '../components/BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Contact:React.FC = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSelection = () => {
    setIsSelected((prevState) => !prevState); // Toggle the selected state
    navigate('/');
  };
  return (
    <div className='content'>
      <Banner title="Contact" desc="Sit dolor reprehenderit incididunt officia officia anim."/>
      <BtnPrimary label="Click" onClick={handleSelection}/>
    </div>
  );
}

export default Contact;
