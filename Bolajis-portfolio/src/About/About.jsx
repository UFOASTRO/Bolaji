import Bolaji2 from "../assets/Images/Bolaji2.png";
function AboutBolaji() {
  return (
    <>
      <div className="container flex justify-between items-center p-8 gap-10">
        <div className="left">
          <img src={Bolaji2} alt="about-me-image" className="w-fit" />
        </div>
        <div className="right">
          <div className="top w-full">
            <p className="uppercase text-9xl oswald font-bold lexgend-bold ">About Me</p>
          </div>
          <div className="bottom text-lexgend">
            <div className="folders flex gap-2 text-white relative top-2">
            <div className="box1 rounded-t-xl p-4 bg-(--default-black)">Student</div>
            <div className="box-2 rounded-t-xl p-4 bg-(--default-black) absolute top-2 left-24">microbiologist</div>
            </div>

            <div className="box-big bg-(--default-black) text-white w-[533.87px] py-14 px-10 rounded-lg text-lexgend font-light text-md leading-7">
              <p>
                My name is Folarin Bolaji Samuel. I am an undergraduate student
                of Microbiology at Bells University of Technology, and also a
                concurrent undergraduate student of Health Science at an
                American-based university. I am deeply passionate about
                education, research, and continuous learning, and I often
                describe myself as an educationist because of my strong
                commitment to academic and intellectual development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutBolaji;
