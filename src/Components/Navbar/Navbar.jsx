import React from 'react';
import Logo from '../../assets/Logotype+Symbole-removebg-preview.png';
import Logo2 from '../../assets/Logo-typographique-transparent 1.png';
import './style.css'
function Navbar() {
  return (
    <>
      <section className="w-full h-16 bg-white shadow-md">
        <nav className="w-full h-full flex justify-between items-center px-8">
          <div className="flex items-center gap-2 cursor-pointer transition-transform duration-300 transform">
            {/* <img src={Logo2} alt="Logo" className="w-[120px] h-auto" /> */}
            <h1 className="font-bold text-xl text-primary">Optera</h1>
          </div>
          
          {/* Navigation Links */}
          <ul className="flex gap-8">
            <li className="nav-item">Vue d'ensemble</li>
            <li className="nav-item">Scripts</li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
