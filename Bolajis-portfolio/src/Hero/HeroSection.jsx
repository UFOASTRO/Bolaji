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

        {/* IMAGE CONTENT */}
        {/* On Mobile: Order 2. Customized Border Radius. */}
        <div className="order-2 relative mt-6 md:mt-0 flex justify-center md:block">
           {/* Desktop: Your original padding/layout. Mobile: Full width with custom rounded corners */}
          <img 
            src={Bolaji} 
            alt="Bolaji" 
            className="w-full h-auto object-cover 
                       md:py-10 md:px-10 md:w-auto md:relative
                       rounded-tr-[4rem] rounded-bl-[4rem] md:rounded-none" 
          />
        </div>

        {/* BADGE (A WRITER) */}
        {/* On Mobile: Absolute bottom-right of the image container. Desktop: Your original absolute position */}
        <div className="absolute bottom-[40%] right-10 
                        md:bottom-25 md:right-20 
                        md:bg-transparent
                        text-3xl md:text-[4rem] font-bold 
                        border-[#191919] px-6 py-2 md:px-18 md:py-2 
                        border rounded-xl shadow-lg md:shadow-none z-20">
          <div className="items relative flex items-center gap-2">
            <p>A writer</p>
            <img
              src={upDownArrow}
              alt=""
              className="w-6 md:w-auto md:absolute md:-right-14 md:top-4"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;