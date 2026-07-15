import { useState } from "react";
import Bolaji2 from "../assets/Images/Bolaji2.png";
import DownloadIcon from "../assets/Icons/download-icon.svg";
import BolajisResume from "../assets/bolajis-resume.pdf";

function AboutBolaji() {
  const [activeTab, setActiveTab] = useState("student");

  const studentText = (
    <p>
      My name is Folarin Bolaji Samuel. I am an undergraduate{" "}
      <strong>student</strong> of Microbiology at Bells University of
      Technology, and also a concurrent undergraduate student of Health Science
      at an American-based university. I am deeply passionate about education,
      research, and continuous learning, and I often describe myself as an
      educationist because of my strong commitment to academic and intellectual
      development.
    </p>
  );

  const microbiologistText = (
    <p>
      My name is Folarin Bolaji Samuel. I am a budding{" "}
      <strong>microbiologist</strong> combining my studies at Bells University
      of Technology with Health Science curriculum from an American-based
      university. I am deeply passionate about scientific inquiry, lab research,
      and continuous discovery, and I often describe myself as a scientist
      because of my strong commitment to understanding the microscopic world and
      its impact on humanity.
    </p>
  );

  return (
    <section className="w-full flex items-center justify-center">
      {" "}
      {/* Added background color context */}
      <div className="container flex flex-col md:flex-row justify-between items-center p-6 md:p-8 gap-10 md:gap-10">
        {/* Left: Image */}
        <div className="left  md:w-1/2 md:flex">
          <img
            src={Bolaji2}
            alt="about-me-image"
            className="w-full h-auto object-cover rounded-2xl md:rounded-none md:w-fit grayscale"
          />
        </div>

        {/* Right: Content */}
        <div className="right w-full md:w-1/2 flex flex-col justify-between  gap-10">
          <div className="top w-full mb-6 md:mb-0">
            <p className="uppercase text-6xl md:text-[8rem] font-oswald font-bold text-[#191919] ">
              About Me
            </p>
          </div>

          <div className="bottom text-lexgend relative">
            {/* Tabs */}
            <div className="folders font-lexend font-light flex gap-2 text-white text-sm md:text-base relative top-2 z-10">
              <div
                onClick={() => setActiveTab("student")}
                className={`box1 cursor-pointer rounded-t-xl py-2 px-6 md:p-4 bg-[#191919] transition-opacity duration-300 ${
                  activeTab === "student" ? "opacity-100" : "opacity-90"
                }`}>
                Student
              </div>
              <div
                className={`box-2 cursor-pointer rounded-t-xl py-2 px-6 md:p-4 bg-[#191919] transition-opacity duration-300 ${
                  activeTab === "microbiologist" ? "opacity-100" : "opacity-90"
                }`}
                onClick={() => setActiveTab("microbiologist")}>
                Microbiologist
              </div>
            </div>

            {/* Content Box */}
            <div className="box-big bg-[#191919] text-white w-full md:w-[533.87px] py-10 px-4  md:px-4 md:py-6 rounded-lg rounded-tl-none font-lexend font-light text-sm md:text-[15px] md:font-light leading-7 shadow-2xl ">
              <div key={activeTab} className="fade-in">
                {activeTab === "student" ? studentText : microbiologistText}
              </div>
              <a href={BolajisResume} download="Bolaji's CV">
                <div className="download flex justify-end transition duration-900 ease-in-out">
                  <button className="group mt-8 md:w-auto cursor-pointer flex items-center bg-(--default-orange) text-black p-5  h-12 w-12 rounded-full font-bold transition-all duration-300 ease-in-out hover:bg-[#f9a83f]">
                    <img
                      src={DownloadIcon}
                      alt="Download"
                      className="w-4 h-4 mx-auto"
                    />
                    <span className="overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out text-white max-w-xs opacity-100 ml-3 md:max-w-0 md:opacity-0 md:ml-0 md:group-hover:max-w-xs md:group-hover:opacity-100 md:group-hover:ml-3">
                      Download CV
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBolaji;
