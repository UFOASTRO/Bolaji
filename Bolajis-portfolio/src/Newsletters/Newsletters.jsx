import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Newsletters() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const tapeRef = useRef();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://corsproxy.io/?https://whatwasntsaid.substack.com/api/v1/posts?limit=5");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useGSAP(() => {
    gsap.to(".tape-text-news", {
      xPercent: -50,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
    gsap.fromTo(".tape-text-news-reverse", 
      { xPercent: -50 },
      { xPercent: 0, repeat: -1, duration: 10, ease: "linear" }
    );
  }, { scope: tapeRef });

  return (
    <section className="w-full flex flex-col items-center justify-center my-10 md:my-20 overflow-hidden">
      
      {/* Animated Tapes (Crossing) */}
      <div ref={tapeRef} className="relative w-full h-48 md:h-72 mt-10 mb-16 md:mb-24 flex items-center justify-center overflow-hidden">
        
        {/* Tape 1: Tilted Down */}
        <div className="absolute w-[120%] h-16 md:h-20 bg-[#FFD52F] flex items-center transform -rotate-[12deg] md:-rotate-[8deg] shadow-md border-t-4 border-b-4 border-black border-dashed z-10">
          <div className="tape-text-news flex whitespace-nowrap items-center font-lexend font-bold text-xl md:text-3xl text-[#191919] uppercase">
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
          </div>
        </div>

        {/* Tape 2: Tilted Up */}
        <div className="absolute w-[120%] h-16 md:h-20 bg-[#FFD52F] flex items-center transform rotate-[12deg] md:rotate-[8deg] shadow-md border-t-4 border-b-4 border-black border-dashed z-0">
          <div className="tape-text-news-reverse flex whitespace-nowrap items-center font-lexend font-bold text-xl md:text-3xl text-[#191919] uppercase">
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
            <span className="mx-4 md:mx-8">LATEST FROM SUBSTACK</span>
          </div>
        </div>

      </div>

      <div className="container px-6 md:px-8 max-w-7xl">
        <h2 className="text-center font-oswald text-3xl md:text-5xl font-bold mb-12 uppercase tracking-wide">
          Writing
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD52F]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {posts.map((post) => (
              <a 
                key={post.id} 
                href={post.canonical_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-[#191919] rounded-2xl overflow-hidden flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_10px_30px_rgba(255,213,47,0.15)]"
              >
                <div className="w-full aspect-[4/3] bg-[#2a2a2a] relative overflow-hidden">
                  {/* Image or Fallback */}
                  {post.cover_image ? (
                    <img 
                      src={post.cover_image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center border-b-4 border-[#FFD52F]">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FFD52F" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-50">
                        <path d="M12 19V5M5 12h14" />
                      </svg>
                      <span className="text-[#FFD52F] font-oswald text-xl uppercase opacity-50 font-bold tracking-wider">{post.title}</span>
                    </div>
                  )}
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-[#FFD52F] text-black text-xs font-bold px-3 py-1 rounded-full font-lexend">
                    {new Date(post.post_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-white font-lexend font-bold text-xl mb-3 group-hover:text-[#FFD52F] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  {post.subtitle && (
                    <p className="text-gray-400 font-lexend text-sm md:text-base font-light mb-6 line-clamp-3">
                      {post.subtitle}
                    </p>
                  )}
                  
                  <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-[#FFD52F] font-lexend font-semibold text-sm">Read Article</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD52F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
export default Newsletters;
