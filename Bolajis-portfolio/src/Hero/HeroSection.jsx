import Bolaji from "../assets/Images/Bolaji.png";
import jaggedyLine from "../assets/jaggedy-line.svg";
import upDownArrow from "../assets/up-down-arrow.svg";
import "./Hero.css";

function HeroSection() {
  return (
    <section className="hero-section relative w-full overflow-hidden md:mb-30 ">
      <div className="container mx-auto flex flex-col md:block min-h-[80vh] md:min-h-screen relative">

        {/* TEXT CONTENT */}
        {/* On Mobile: Order 1 (Top). On Desktop: Absolute positioned */}
        <div className="md:absolute md:top-12 md:left-20 flex flex-col md:gap-10 z-10 px-6 md:px-0 mt-8 md:mt-0">

          {/* Top Text */}
          <div className="top-text md:right-5 relative flex items-center gap-36 md:w-[45vw] ">
            <p className="text-[14px] md:text-[16px] uppercase font-medium tracking-wide">
              Hi there 👋🏽, my name is
            </p>
            {/* Hide jagged line on mobile if it clutters, or keep it */}
            <img src={jaggedyLine} alt="" className="hidden md:block" />
          </div>

          {/* Big Name */}
          <div className="bottom-text relative mt-2 md:mt-0">
            {/* Mobile: Static text. Desktop: Absolute positioning preserved */}
            <p className="text-[3rem] leading-[1] md:absolute md:-left-10 md:-top-10 md:text-[11rem] lowercase lexgend-bold tracking-tighter md:tracking-[.7rem]">
              <span className="uppercase">B</span>ọlájí
            </p>
          </div>
        </div>

        {/* IMAGE & BADGE CONTENT */}
        <div className="order-2 relative mt-6 md:mt-0 flex justify-center md:justify-end md:w-full md:pr-10 md:pt-10 z-20">
          
          <div className="relative inline-block w-full max-w-[90%] md:max-w-none md:w-auto">
            {/* The Image */}
            <img
              src={Bolaji}
              alt="Bolaji"
              className="w-full h-auto object-cover 
                         rounded-tl-[3rem] rounded-tr-[3rem] rounded-bl-[3rem] 
                         md:rounded-tl-[4rem] md:rounded-tr-[4rem] md:rounded-bl-[4rem]
                         rounded-br-none"
            />

            {/* CUTOUT & BADGE WRAPPER */}
            <div className="absolute bottom-0 right-0 bg-[#FFFDF1] pt-4 pl-4 md:pt-6 md:pl-6 rounded-tl-[1.5rem] md:rounded-tl-[2.5rem]">
              
              {/* Inverse Corner Top */}
              <div className="absolute -top-6 right-0 md:-top-10 w-6 h-6 md:w-10 md:h-10 bg-transparent rounded-br-[1.5rem] md:rounded-br-[2.5rem] shadow-[15px_15px_0_15px_#FFFDF1]"></div>
              
              {/* Inverse Corner Left */}
              <div className="absolute bottom-0 -left-6 md:-left-10 w-6 h-6 md:w-10 md:h-10 bg-transparent rounded-br-[1.5rem] md:rounded-br-[2.5rem] shadow-[15px_15px_0_15px_#FFFDF1]"></div>
              
              {/* Actual Badge */}
              <div className="relative text-2xl sm:text-3xl md:text-[3.5rem] font-bold 
                              border-[#191919] px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 
                              border rounded-xl md:rounded-2xl z-20 bg-[#FFFDF1]
                              flex items-center gap-2 md:gap-4">
                <span className="mr-1">A</span>
                <div className="h-[1.25em] overflow-hidden relative">
                  <div className="flex flex-col animate-slot-machine text-left">
                    <span className="h-[1.25em] flex items-center whitespace-nowrap">writer</span>
                    <span className="h-[1.25em] flex items-center whitespace-nowrap">microbiologist</span>
                    <span className="h-[1.25em] flex items-center whitespace-nowrap">model</span>
                    <span className="h-[1.25em] flex items-center whitespace-nowrap">researcher</span>
                    <span className="h-[1.25em] flex items-center whitespace-nowrap">fashionista</span>
                    <span className="h-[1.25em] flex items-center whitespace-nowrap">writer</span>
                  </div>
                </div>
                <img
                  src={upDownArrow}
                  alt="arrows"
                  className="w-4 sm:w-5 md:w-6 ml-1 md:ml-2"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;