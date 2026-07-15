import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar relative px-6 md:px-20 py-6 flex justify-between items-center z-50 font-light backdrop-blur-md ">
      
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
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About Me</p>
      </div>

      {/* Logo - Centered on desktop, right on mobile? Adjusted to flex center */}
      <div className="center flex justify-end">
        <p className="lexgend-bold text-2xl text-[#191919]">BỌLÁJÍ</p>
      </div>

      {/* Desktop: Right Links */}
      <div className="hidden md:flex items-center gap-40 justify-end">
        <p className="cursor-pointer">Newsletters</p>
        <p className="bg-[#FFD52F] py-3 px-6 rounded-sm cursor-pointer hover:bg-[#ffc800] transition">Contact</p>
      </div>

       {/* Mobile Menu Overlay (Optional Basic Implementation) */}
       {isOpen && (
        <div className="absolute top-full left-0 w-full shadow-xl flex flex-col items-center py-10 gap-6 md:hidden">
          <p>Home</p>
          <p>About Me</p>
          <p>Newsletters</p>
          <p className="bg-[#FFD52F] py-2 px-6 rounded-sm">Contact</p>
        </div>
      )}
    </nav>
  );
}

export default NavBar;