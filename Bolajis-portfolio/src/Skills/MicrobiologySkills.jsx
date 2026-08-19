import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  Dna, 
  Flask, 
  TestTube, 
  Virus, 
  Bug, 
  Drop, 
  Thermometer, 
  Eyedropper, 
  ChartLine, 
  Target 
} from "@phosphor-icons/react";

const skills = [
  { name: "Polymerase Chain Reaction (PCR)", icon: Dna, color: "#FF6B6B" },
  { name: "DNA Sequencing", icon: Target, color: "#4ECDC4" },
  { name: "Cell Culture", icon: Flask, color: "#45B7D1" },
  { name: "Flow Cytometry", icon: ChartLine, color: "#96CEB4" },
  { name: "Bioinformatics", icon: Bug, color: "#FFEEAD" },
  { name: "Fluorescence Microscopy", icon: Eyedropper, color: "#D4A5A5" },
  { name: "ELISA", icon: TestTube, color: "#9B59B6" },
  { name: "Aseptic Technique", icon: Drop, color: "#3498DB" },
  { name: "Microbial Culturing", icon: Virus, color: "#E67E22" },
  { name: "Spectrophotometry", icon: Thermometer, color: "#2ECC71" },
];

function MicrobiologySkills() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const tweenRef = useRef(null);

  useGSAP(() => {
    // Create a seamless loop
    tweenRef.current = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 65, // slowed down from 30 to 65
      repeat: -1,
    });
  }, { scope: containerRef });

  // Handle pause and play on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (tweenRef.current) tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (tweenRef.current) tweenRef.current.play();
  };

  // Duplicate the array to create a seamless infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section 
      className="w-full py-8 md:py-12 bg-[#191919] border-y border-[#333] overflow-hidden relative"
      ref={containerRef}
    >
      <style>{`
        .skill-pill {
          border: 1px solid color-mix(in srgb, var(--skill-color) 40%, transparent);
        }
        .skill-pill:hover {
          background-color: var(--skill-color);
          box-shadow: 0 0 20px color-mix(in srgb, var(--skill-color) 60%, transparent);
          border-color: var(--skill-color);
        }
        .skill-pill .icon-element {
          color: var(--skill-color);
        }
        .skill-pill:hover .icon-element,
        .skill-pill:hover .text-element {
          color: #191919 !important;
        }
        .skill-pill .text-element {
          color: #d1d5db; /* gray-300 */
        }
      `}</style>

      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#191919] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#191919] to-transparent z-10 pointer-events-none"></div>

      <div 
        className="flex whitespace-nowrap items-center w-max"
        ref={trackRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {duplicatedSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div 
              key={index} 
              style={{ "--skill-color": skill.color }}
              className="skill-pill flex items-center gap-3 px-6 py-3 mx-4 md:mx-6 rounded-full bg-[#2a2a2a] transition-all duration-300 hover:scale-110 group cursor-default"
            >
              <IconComponent 
                size={24} 
                weight="duotone" 
                className="icon-element transition-colors duration-300" 
              />
              <span className="text-element font-lexend font-medium text-sm md:text-lg transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MicrobiologySkills;
