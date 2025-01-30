import React from 'react';

const Footer:React.FC = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer bg-black py-[20px]'>
      <div className="container mx-auto">
        <p className='text-white text-center'>&copy; copyright {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
