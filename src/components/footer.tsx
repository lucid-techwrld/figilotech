import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[90%] justify-between">
        <div className="w-full md:w-1/2 h-full flex flex-col px-6 mb-6 md:mb-0">
          <img src={logo} alt="logo" className="w-9 h-12" />
          <h1 className="text-xl font-semibold mb-4 text-blue-500">
            Figilotech Tech
          </h1>
          <p className="text-sm mb-4">
            We combine professionalism, speed, and creativity to deliver
            high-quality digital and print services. With two branches
            strategically located to serve you better, we offer a wide range of
            solutions to meet your personal, academic, and business needs.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col gap-3 text-sm mb-4 px-6">
          <h2 className="text-blue-800 font-semibold">QUICK LINKS</h2>
          <a href="/" className="hover:text-blue-300 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-300 transition">
            About
          </a>
          <a href="#service" className="hover:text-blue-300 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-blue-300 transition">
            Contact
          </a>
          <a href="#blogs" className="hover:text-blue-300 transition">
            Blogs
          </a>
        </div>
      </div>
      <hr className="my-4 border-gray-700" />
      <div className="text-xs text-gray-300 text-center mt-5">
        &copy; {new Date().getFullYear()} Figilotech Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
