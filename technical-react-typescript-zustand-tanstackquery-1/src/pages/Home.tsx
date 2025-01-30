import React, { useState } from 'react';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary';

const Home:React.FC = () => {

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSelection = () => {
    setIsSelected((prevState) => !prevState); // Toggle the selected state
    navigate('/about');
  };
  

  return (
    <div className='content'>
      <Banner title="Home" desc="Sit dolor reprehenderit incididunt officia officia anim."/>
      <BtnPrimary label="Click" onClick={handleSelection}/>
    </div>
  );
}

export default Home;
