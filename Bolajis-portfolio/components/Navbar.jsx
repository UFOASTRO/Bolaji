import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky top-0 px-6 md:px-20 py-6 flex justify-between items-center z-50 font-light backdrop-blur-md bg-[#FFFDF1]/80">
      
      {/* Mobile: Hamburger Icon */}
      <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        <div className="space-y-1.5 cursor-pointer">
          <span className={`block w-8 h-0.5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </div>

      {/* Desktop: Left Links */}
      <div className="hidden md:flex gap-40 items-center">
        <a href="#home" className="cursor-pointer">Home</a>
        <a href="#about" className="cursor-pointer">About Me</a>
      </div>

      {/* Logo - Centered on desktop, right on mobile? Adjusted to flex center */}
      <div className="center flex justify-end">
        <p className="lexgend-bold text-2xl text-[#191919]">BỌLÁJÍ</p>
      </div>

      {/* Desktop: Right Links */}
      <div className="hidden md:flex items-center gap-40 justify-end">
        <a href="#newsletters" className="cursor-pointer">Newsletters</a>
        <a href="#contact" className="bg-[#FFD52F] py-3 px-6 rounded-sm cursor-pointer hover:bg-[#ffc800] transition">Contact</a>
      </div>

       {/* Mobile Menu Overlay (Optional Basic Implementation) */}
       {isOpen && (
        <div className="absolute top-full left-0 w-full shadow-xl flex flex-col items-center py-10 gap-6 md:hidden bg-[#FFFDF1]">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#newsletters" onClick={() => setIsOpen(false)}>Newsletters</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-[#FFD52F] py-2 px-6 rounded-sm">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;