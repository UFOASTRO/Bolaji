import Bolaji2 from "../assets/Images/Bolaji2.png";
import DownloadIcon from "../assets/Icons/download-icon.svg";
function AboutBolaji() {
  const handleChangeText = () => {
    alert("You clicked on Microbiologist tab!");
  };

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
            <p className="uppercase text-6xl md:text-[6.5rem] oswald lexgend-bold text-[#191919] ">
              About Me
            </p>
          </div>

          <div className="bottom text-lexgend relative">
            {/* Tabs */}
            <div className="folders flex gap-2 text-white text-sm md:text-base relative top-2 z-10">
              <div className="box1 cursor-pointer rounded-t-xl py-2 px-6 md:p-4 bg-[#191919]">
                Student
              </div>
              <div
                className="box-2 cursor-pointer rounded-t-xl py-2 px-6 md:p-4 bg-[#191919] opacity-90"
                onClick={handleChangeText}>
                Microbiologist
              </div>
            </div>

            {/* Content Box */}
            <div className="box-big bg-[#191919] text-white w-full md:w-[533.87px] py-10 px-6  md:p-10 rounded-lg rounded-tl-none text-lexgend font-light text-sm md:text-md/[30px] md:font-light leading-7 shadow-2xl">
              <p>
                My name is Folarin Bolaji Samuel. I am an undergraduate student
                of Microbiology at Bells University of Technology, and also a
                concurrent undergraduate student of Health Science at an
                American-based university. I am deeply passionate about
                education, research, and continuous learning, and I often
                describe myself as an educationist because of my strong
                commitment to academic and intellectual development.
              </p>

              <div className="download flex justify-end  transition duration-900 ease-in-out">
                <button className="mt-8 cursor-pointer flex gap-4 ease-in-out transition duration-300 hover:w-54 bg-(--default-orange) text-black p-4 rounded-full font-bold w-fit md:w-auto hover:bg-[#f9a83f] ">
                  <img src={DownloadIcon} alt="" className="w-4" />
                  <p className="cv md:hidden hover:flex text-white">Download CV</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBolaji;
