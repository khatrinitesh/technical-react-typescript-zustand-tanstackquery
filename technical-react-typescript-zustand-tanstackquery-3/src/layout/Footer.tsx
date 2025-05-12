import React from "react";

const Footer: React.FC = () => {

  const currentFullYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-gray-100 p-4 text-center">
        <p className="text-sm text-gray-600">© {currentFullYear} My App</p>
      </footer>
    </>
  );
};

export default Footer;
