import React from "react";
import BolajiImg from "../assets/Images/Bolaji.png";
import Bolaji2Img from "../assets/Images/Bolaji2.png";
import BolajisResume from "../assets/bolajis-resume.pdf";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";

function Contact() {
  return (
    <section className="w-full flex items-center justify-center bg-[#FEF4B4] py-16 md:py-24">
      <div className="container px-6 md:px-8 max-w-7xl flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
        
        {/* Left Side: Info */}
        <div className="left w-full md:w-1/2 flex flex-col gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-lexend font-bold text-[#191919] mb-8">
              Get in touch
            </h2>
            
            {/* Overlapping Images */}
            <div className="flex -space-x-4 mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-4 border-[#FEF4B4] shadow-md transform rotate-[-5deg]">
                <img src={BolajiImg} alt="Bolaji" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-4 border-[#FEF4B4] shadow-md transform rotate-[5deg]">
                <img src={Bolaji2Img} alt="Bolaji" className="w-full h-full object-cover grayscale" />
              </div>
            </div>

            <a href={BolajisResume} download="Bolaji's CV">
              <button className="bg-[#191919] text-white font-lexend text-sm py-3 px-8 rounded hover:bg-black transition mb-12">
                Download CV
              </button>
            </a>
          </div>

          <div className="flex flex-col gap-4 font-lexend text-sm md:text-base text-[#191919] font-medium">
            <div className="flex items-center gap-3">
              <EnvelopeSimple size={24} weight="fill" />
              <a href="mailto:Folarinbolaji@gmail.com" className="hover:underline">Folarinbolaji@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={24} weight="fill" />
              <a href="tel:+2348098071757" className="hover:underline">+234 809 807 1757</a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="right w-full md:w-1/2 flex flex-col gap-6 font-lexend">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-[#191919]">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-white rounded-lg p-4 outline-none border border-transparent focus:border-[#FFD52F] transition shadow-sm"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-[#191919]">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-white rounded-lg p-4 outline-none border border-transparent focus:border-[#FFD52F] transition shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-[#191919]">Message</label>
            <textarea 
              id="message" 
              rows="5"
              className="w-full bg-white rounded-lg p-4 outline-none border border-transparent focus:border-[#FFD52F] transition shadow-sm resize-none"
            ></textarea>
          </div>

          <button className="w-full bg-[#191919] text-white font-lexend font-medium py-4 rounded-lg mt-2 hover:bg-black transition">
            Send
          </button>
        </div>

      </div>
    </section>
  );
}

export default Contact;
