import Bolaji from "../assets/Images/Bolaji.png";
import jaggedyLine from "../assets/jaggedy-line.svg";
import upDownArrow from "../assets/up-down-arrow.svg";
import "./Hero.css";
function HeroSection() {
  return (
    <>
      <div className="hero-section flex flex-col items-center justify-center">
        <img src={Bolaji} alt="Bolaji" className="py-12 px-10 relative" />
        <div className="top-section absolute top-40 left-20 flex flex-col h-10 gap-0">
          <div className="top-text relative flex items-center justify-between gap-0 w-[45vw]">
            <p className=" text-2xl text-[16px] uppercase">
              Hello 👋🏽, my name is Bolaji
            </p>
            <img src={jaggedyLine} alt="" />
          </div>
          <div className="bottom-text ">
            <p className="absolute -left-10 -top-10 text-[12.5rem] lowercase lexgend-bold p-0 tracking-[.5rem]">
              <span className="uppercase">B</span>ỌLÁJÍ
            </p>
          </div>
        </div>
        <div className="bottom-section absolute flex  -bottom-25 right-20 text-[4rem] font-bold border-[#191919] px-18 py-2 border-[1px] rounded-xl">
          <div className="items relative">
            <p>A writer </p>
            <img
              src={upDownArrow}
              alt=""
              className="absolute -right-14 top-6"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
