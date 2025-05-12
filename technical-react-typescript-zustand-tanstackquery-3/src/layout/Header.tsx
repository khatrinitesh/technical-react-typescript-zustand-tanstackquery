import React from "react";
import { Link } from "react-router-dom";

const Header:React.FC = () => {
  return (
    <>
      <header className="bg-indigo-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="font-bold text-lg">My App</h1>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
