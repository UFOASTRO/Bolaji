import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GraduationCap, PencilLine, Books } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    id: 1,
    title: "B.Sc. Microbiology",
    organization: "Bells University of Technology",
    date: "Expected Graduation: 2028",
    description: "Concurrent undergraduate student combining microbiology with a Health Science curriculum.",
    icon: GraduationCap,
    color: "#4ECDC4"
  },
  {
    id: 2,
    title: "Certificate in Scriptwriting",
    organization: "Terra Academy for the Arts",
    date: "Completed",
    description: "Developed strong storytelling, structured communication, and creative writing skills.",
    icon: PencilLine,
    color: "#FF6B6B"
  },
  {
    id: 3,
    title: "Librarian",
    organization: "National Association of Microbiology Students, Bellstech Chapter",
    date: "2025/2026 Academic Session",
    description: "Managed and organized academic resources for members. Coordinated access to study materials.",
    icon: Books,
    color: "#45B7D1"
  },
  {
    id: 4,
    title: "Manuscript Reviewer",
    organization: "Journal of Medicine and Reviews",
    date: "Present",
    description: "Provided detailed reports to the Editor in Chief with publication recommendations.",
    icon: PencilLine,
    color: "#96CEB4"
  },
  {
    id: 5,
    title: "Academic & Technical Writer",
    organization: "Independent",
    date: "Present",
    description: "Conducted research, synthesized scholar materials and authored scientific review papers.",
    icon: PencilLine,
    color: "#FFEEAD"
  },
  {
    id: 6,
    title: "Published Author",
    organization: "Independent",
    date: "Present",
    description: "Managed editing and content development process for 'Second Phase' and other pieces.",
    icon: Books,
    color: "#D4A5A5"
  }
];

function Journey() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Animate the central line
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // Animate each card
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section 
      id="journey" 
      className="w-full bg-(--background-color) py-20 px-6 md:px-12 relative font-lexend overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="uppercase text-5xl md:text-7xl font-oswald font-bold text-[#191919]">
            My Journey
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A timeline of my academic, leadership, and editorial experiences.
          </p>
        </div>

        {/* The central line background */}
        <div className="absolute left-4 md:left-1/2 top-32 bottom-0 w-1 bg-gray-300 md:-translate-x-1/2 rounded-full hidden md:block"></div>
        {/* The animated line */}
        <div 
          ref={lineRef}
          className="absolute left-4 md:left-1/2 top-32 w-1 bg-[#191919] md:-translate-x-1/2 rounded-full hidden md:block origin-top"
        ></div>

        <div className="relative flex flex-col gap-12 md:gap-24 mt-12">
          {journeyData.map((item, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                className={`relative flex items-center md:justify-between w-full ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
                ref={el => cardsRef.current[index] = el}
              >
                {/* Empty div for spacing on desktop */}
                <div className="hidden md:block md:w-[45%]"></div>
                
                {/* Center Node icon */}
                <div 
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 hidden md:flex"
                  style={{ backgroundColor: item.color, border: '4px solid var(--background-color)' }}
                >
                  <IconComponent size={24} color="#191919" weight="fill" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] bg-[#191919] p-6 md:p-8 rounded-2xl shadow-xl text-white border border-[#333] hover:border-[#555] transition-colors">
                  <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: item.color }}
                    >
                      <IconComponent size={20} color="#191919" weight="fill" />
                    </div>
                    <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">{item.date}</span>
                  </div>
                  <span className="hidden md:block text-sm font-semibold tracking-wider text-gray-400 uppercase mb-2">{item.date}</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: item.color }}>{item.title}</h3>
                  <h4 className="text-md md:text-lg font-medium text-gray-300 mb-4">{item.organization}</h4>
                  <p className="text-sm md:text-base font-light leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Journey;
