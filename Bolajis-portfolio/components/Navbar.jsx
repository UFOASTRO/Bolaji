import "./NavBar.css";
function NavBar() {
  return (
    <>
        <nav className="px-20 py-6 sticky top-0 flex justify-between items-center  z-10 md-hidden font-light">
          <p>Home</p>
          <p>About Me</p>
          <div className="center">
          <p className=" lexgend-bold text-2xl text-[#191919]">BỌLÁJÍ</p>
          </div>
          <p>Newsletters</p>
          <p className="bg-[#FFD52F] py-3 px-6 rounded-sm">Contact</p>
        </nav>
    </>
  );
}
export default NavBar;
