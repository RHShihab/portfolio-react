import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="container px-8 xl:max-w-screen-xl mx-auto mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-2xl font-bold text-slate-100 lg:w-1/2">
        {/* <img src={logo} alt="Logo" /> */}
        rhShihab
      </div>
      <div className="m-8 flex items-center justify-end gap-4 text-2xl lg:w-80">
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
