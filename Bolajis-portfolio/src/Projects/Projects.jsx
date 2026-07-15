import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import projectImgPlaceholder from "../assets/Images/1.jpg";

function Projects() {
  const tapeRef = useRef();

  useGSAP(() => {
    gsap.to(".tape-text", {
      xPercent: -50,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
    gsap.fromTo(".tape-text-reverse", 
      { xPercent: -50 },
      { xPercent: 0, repeat: -1, duration: 10, ease: "linear" }
    );
  }, { scope: tapeRef });

  const projects = [
    {
      title: "The Map Was Never The Beginning",
      description: "An introspective research on The Living Story of a Nation That Spoke Before It Was Named.",
      image: projectImgPlaceholder,
    },
    {
      title: "What If We're Not Just Lost, But Unnamed?",
      description: "An Honest Look at Where We Stand, and Where We Could Go.",
      image: projectImgPlaceholder,
    }
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center my-10 md:my-20 overflow-hidden">
      
      {/* Animated Tapes (Crossing) */}
      <div ref={tapeRef} className="relative w-full h-48 md:h-72 mt-10 mb-16 md:mb-24 flex items-center justify-center overflow-hidden">
        
        {/* Tape 1: Tilted Down */}
        <div className="absolute w-[120%] h-16 md:h-20 bg-[#FFD52F] flex items-center transform -rotate-[12deg] md:-rotate-[8deg] shadow-md border-t-4 border-b-4 border-black border-dashed z-10">
          <div className="tape-text flex whitespace-nowrap items-center font-lexend font-bold text-xl md:text-3xl text-[#191919] uppercase">
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
          </div>
        </div>

        {/* Tape 2: Tilted Up */}
        <div className="absolute w-[120%] h-16 md:h-20 bg-[#FFD52F] flex items-center transform rotate-[12deg] md:rotate-[8deg] shadow-md border-t-4 border-b-4 border-black border-dashed z-0">
          <div className="tape-text-reverse flex whitespace-nowrap items-center font-lexend font-bold text-xl md:text-3xl text-[#191919] uppercase">
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
            <span className="mx-4 md:mx-8">PROJECTS I'VE WORKED ON</span>
          </div>
        </div>

      </div>

      <div className="container px-6 md:px-8 max-w-7xl">
        <h2 className="text-center font-oswald text-3xl md:text-5xl font-bold mb-12 uppercase tracking-wide">
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#191919] rounded-2xl p-4 md:p-6 flex flex-col justify-between">
              <div className="w-full h-auto bg-white rounded-xl overflow-hidden mb-6 relative">
                {/* Simulated browser header in mockup */}
                <div className="flex items-center px-4 py-3 border-b border-gray-100">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>

              <div>
                <h3 className="text-white font-lexend font-bold text-xl md:text-2xl mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 font-lexend text-sm md:text-base font-light mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-end">
                <button className="bg-[#FFD52F] text-black font-lexend font-semibold py-3 px-8 rounded hover:bg-[#ffc800] transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#191919] text-white font-lexend font-light text-sm flex items-center gap-2 py-3 px-8 rounded hover:bg-black transition">
            SEE MORE
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Projects;