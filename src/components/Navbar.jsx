import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-2xl font-bold text-slate-100">
        {/* <img src={logo} alt="Logo" /> */}
        rhShihab
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/rhshihab/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/RHShihab" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
