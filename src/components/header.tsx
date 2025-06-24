import { MenuSquareIcon, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const currentHash = location.hash;

  const linkClass = (hash: string) =>
    `cursor-pointer hover:text-blue-400 ${
      currentHash === hash ? "text-blue-500 font-semibold" : ""
    }`;

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/*Desktop Header*/}
      <div className="hidden lg:flex md:flex w-full h-16 justify-between items-center px-10 py-3 fixed top-0 left-0 bg-white z-[100]">
        <div className="flex gap-2 h-full justify-center items-center">
          <img src={logo} alt="logo" className="w-9 h-10" />

          <span className="text-blue-500 font-bold">Figilo Tech</span>
        </div>
        <div className="flex gap-3 text-[0.8em]">
          <a href="/" className={linkClass("/")}>
            Home
          </a>
          <a href="#about" className={linkClass("#about")}>
            About
          </a>
          <a href="#contact" className={linkClass("#contact")}>
            Contact
          </a>
          <a href="#service" className={linkClass("#service")}>
            Service
          </a>
          <a href="#blogs" className={linkClass("#blogs")}>
            Blogs
          </a>
        </div>
        <div>
          <button className="border-2 border-blue-500 p-3 text-blue-500 font-semibold  hover:bg-blue-500 hover:text-white transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>

      {/*Mobile Header*/}
      <div className="lg:hidden md:hidden w-full h-16 flex justify-between items-center px-5 py-3 fixed top-0 left-0 bg-white z-[100]">
        <div className="flex gap-2">
          <img src={logo} alt="logo" className="w-9 h-10" />
          <span className="text-blue-500 font-bold">Figilo Tech</span>
        </div>

        <button onClick={toggleMenu} className="p-2">
          <MenuSquareIcon size={24} />
        </button>

        {/*Navigation Bar */}

        <div
          className={`flex flex-col gap-3 text-[0.8em] absolute top-0 right-0 bg-white w-1/2 h-screen p-5 ${
            isOpen ? "-translate-x-0" : "translate-x-full "
          }transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center mb-5">
            <div>
              <img src={logo} alt="logo" className="w-9 h-10" />
              <span className="text-blue-500 font-bold">Figilo Tech</span>
            </div>
            <button onClick={toggleMenu} className="p-2">
              <X size={24} />
            </button>
          </div>
          <a
            href="/"
            className={linkClass("/")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className={linkClass("#about")}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className={linkClass("#contact")}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="#service"
            className={linkClass("#service")}
            onClick={() => setIsOpen(false)}
          >
            Service
          </a>
          <a
            href="#blogs"
            className={linkClass("#blogs")}
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </a>
          <button className="border-2 border-blue-500 p-3 text-blue-500 font-semibold  hover:bg-blue-500 hover:text-white transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
