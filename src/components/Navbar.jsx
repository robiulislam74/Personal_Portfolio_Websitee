import { Link } from 'react-scroll';

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="home" smooth={true} duration={500} className="hover:text-gray-200 hover:font-semibold duration-100 cursor-pointer">
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500} className="hover:text-gray-200 hover:font-semibold duration-100 cursor-pointer">
          About Me
        </Link>
      </li>
      <li>
        <Link to="skill" smooth={true} duration={500} className="hover:text-gray-200 hover:font-semibold duration-100 cursor-pointer">
          Skills
        </Link>
      </li>
      <li>
        <Link to="project" smooth={true} duration={500} className="hover:text-gray-200 hover:font-semibold duration-100 cursor-pointer">
          Projects
        </Link>
      </li>
      <li>
        <Link to="education" smooth={true} duration={500} className="hover:text-gray-200 hover:font-semibold duration-100 cursor-pointer">
          Educations
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500} className="hover:text-gray-200 hover:font-semibold duration-100 cursor-pointer">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar py-4 md:pb-6 md:pt-7 px-4 md:px-6 lg:px-8 max-w-screen-xl mx-auto text-gray-400">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 rounded-full border-2 border-gray-500">
              <img src="https://i.ibb.co.com/N2Rqfg8b/Fronend-Developer1.jpg" alt="Profile" />
            </div>
          </div>
          <span className="text-xl font-bold text-gray-300 hidden md:flex">ROBIUL</span>
        </div>
      </div>

      {/* Navbar Center for large screen */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 uppercase font-normal text-sm">
          {navItems}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a
          href="/Robiul_Islam.pdf"
          download
          className="bg-primaryColor text-primaryRed md:px-5 px-3 py-3 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.7)] hover:bg-gray-900 hover:translate-y-1 duration-300 uppercase md:text-sm text-xs font-semibold"
        >
          CV Download
        </a>
      </div>
    </div>
  );
};

export default Navbar;
