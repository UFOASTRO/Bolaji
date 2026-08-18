import React, { useState, useEffect } from "react";
import { Link, XLogo, WhatsappLogo, LinkedinLogo, Globe } from "@phosphor-icons/react";
import FooterTextImg from "../assets/Icons/Footer-text.png";

function Footer() {
  const [footerPosts, setFooterPosts] = useState([]);

  useEffect(() => {
    const fetchFooterPosts = async () => {
      try {
        const response = await fetch("/api/substack-posts?limit=3");
        const data = await response.json();
        setFooterPosts(data);
      } catch (error) {
        console.error("Error fetching footer posts:", error);
      }
    };
    fetchFooterPosts();
  }, []);

  return (
    <footer className="w-full bg-[#191919] text-white pt-16 overflow-hidden relative">
      <div className="container px-6 md:px-8 max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between gap-12 font-lexend">
        
        {/* Left Column: Connect */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <h3 className="text-xl font-bold">Connect with me</h3>
          <div className="flex gap-4 items-center text-gray-300">
            <a href="#" className="hover:text-white transition"><Link size={24} /></a>
            <a href="#" className="hover:text-white transition"><XLogo size={24} /></a>
            <a href="#" className="hover:text-white transition"><WhatsappLogo size={24} /></a>
            <a href="#" className="hover:text-white transition"><LinkedinLogo size={24} /></a>
            <a href="#" className="hover:text-white transition"><Globe size={24} /></a>
          </div>
          <a href="https://whatwasntsaid.substack.com" target="_blank" rel="noopener noreferrer" className="bg-[#FFD52F] text-black font-semibold text-sm py-2 px-6 rounded hover:bg-[#ffc800] transition w-fit mt-2 block text-center">
            Subscribe to my newsletter
          </a>
          <p className="text-xs text-gray-500 mt-8">© 2026 All rights reserved.</p>
        </div>

        {/* Middle Column: Newsletters */}
        <div className="flex flex-col gap-4 text-right md:w-1/3">
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Newsletters</h3>
          {footerPosts.map((post) => (
            <a key={post.id} href={post.canonical_url} target="_blank" rel="noopener noreferrer" className="text-xs uppercase hover:text-[#FFD52F] transition truncate" title={post.title}>
              {post.title}
            </a>
          ))}
          {footerPosts.length === 0 && (
             <span className="text-xs text-gray-600">Loading...</span>
          )}
        </div>

        {/* Right Column: Certifications */}
        <div className="flex flex-col gap-4 text-right md:w-1/3">
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Certifications</h3>
          <a href="#" className="text-xs uppercase hover:text-[#FFD52F] transition">CISCO</a>
          <a href="#" className="text-xs uppercase hover:text-[#FFD52F] transition">NIDA</a>
          <a href="#" className="text-xs uppercase hover:text-[#FFD52F] transition">UNICEF</a>
          <a href="#" className="text-xs uppercase hover:text-[#FFD52F] transition">CSSA</a>
          <a href="#" className="text-xs uppercase hover:text-[#FFD52F] transition">AMERICAN SOCIETY FOR</a>
          <a href="#" className="text-xs uppercase hover:text-[#FFD52F] transition">MICROBIOLOGY</a>
        </div>

      </div>

      {/* Giant Background Text */}
      <div className="w-full flex mt-20 md:mt-32 pb-6 justify-center pointer-events-none select-none overflow-hidden px-4 md:px-8">
        <img src={FooterTextImg} alt="Bolaji" className="w-full h-auto max-w-5xl mx-auto object-contain opacity-80" />
      </div>
    </footer>
  );
}

export default Footer;
