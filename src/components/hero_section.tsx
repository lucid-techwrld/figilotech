import heroImg from "../assets/hero-image.jpg";
import {
  ShieldCheck,
  Headphones,
  UserCheck,
  Printer,
  FileText,
} from "lucide-react";

const HeroSection = () => {
  return (
    <div>
      {/*Hero Section*/}
      <div className="w-full h-[70vh] relative mt-16">
        <img
          src={heroImg}
          alt="hero-image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center">
          <div className="w-[80%] lg:w-[70%] md:w-[70%] h-full p-4 flex flex-col justify-center items-center space-y-4">
            <h1 className="text-3xl lg:text-7xl md:text-4xl text-white font-bold text-center">
              Your <span className="text-blue-500">One-Stop</span> Hub for
              Design, Print & Digital Services
            </h1>
            <p className="italic text-[0.8em] lg:text-4xl md:text-xl text-white mt-3">
              Home for it solutions...
            </p>
            <p className="text-gray-200 text-[0.6em] lg:text-2xl md:text-xl mt-2 text-center">
              At <strong className="text-blue-500">FIGILOTECH</strong>, we
              combine professionalism, speed, and creativity to deliver
              high-quality digital and print services. With two branches
              strategically located to serve you better, we offer a wide range
              of solutions to meet your personal, academic, and business needs.
            </p>
            <button className="mt-4 bg-blue-500 p-4 w-[50%] text-[0.8em] lg:text-2xl md:text-xl text-center text-white rounded-full hover:border-2 hover:bg-transparent hover:backdrop-blur-lg hover:border-white transition duration-300 ">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-16 lg:h-24  flex  items-center gap-3">
          <div
            className="w-[40%] h-full bg-blue-200 p-4 flex flex-wrap items-center justify-center text-black font-semibold"
            style={{
              clipPath: "polygon(0 0, 95% 0, 100% 40%, 90% 100%, 0 100%)",
            }}
          >
            <p className="text-[1px] lg:text-2xl md:text-sm text-center">
              From Paper to Pixel — We’ve Got You Covered
            </p>
          </div>
          <div>
            <div className="w-[60%] h-full bg-white py-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-500 w-5 h-5 lg:w-9 lg:h-9 md:h-7 md:w-7" />
                <span className="text-[0.8em] lg:text-2xl md:text-sm">
                  Quality <br /> Assurance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Headphones className="text-blue-500 w-5 h-5 lg:w-9 lg:h-9 md:h-7 md:w-7" />
                <span className="text-[0.8em] lg:text-2xl md:text-sm">
                  24/7 <br />
                  Support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <UserCheck className="text-blue-500 w-5 h-5 lg:w-9 lg:h-9 md:h-7 md:w-7" />
                <span className="text-[0.8em] lg:text-2xl md:text-sm">
                  Customer <br />
                  Satisfaction
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="text-blue-500 w-5 h-5 lg:w-9 lg:h-9 md:h-7 md:w-7" />
                <span className="text-[0.8em] lg:text-2xl md:text-sm">
                  Printing <br /> Services
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="text-blue-500 w-5 h-5 lg:w-9 lg:h-9 md:h-7 md:w-7" />
                <span className="text-[0.8em] lg:text-2xl md:text-sm">
                  Digital <br />
                  Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
