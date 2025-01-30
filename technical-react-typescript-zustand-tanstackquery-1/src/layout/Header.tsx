import React from 'react';
import { topNavData } from '../constants/topNav';
import { NavLink } from 'react-router-dom';

const Header:React.FC = () => {
  return (
    <header className='header bg-black py-[20px]'>
      <div className="container mx-auto">
        <ul className='flex gap-[10px]'>
        {topNavData.map((val, index) => (
        <li key={index}>
            <NavLink className={({ isActive }) => isActive ? "text-white block p-[5px] font-bold bg-red-500 " : "text-white  font-bold  block p-[5px]"} to={val.pathname}>{val.label}</NavLink>
        </li>
        ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
