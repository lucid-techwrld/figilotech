import image from "../assets/istockphoto-1178153976-612x612.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div
      className="w-full h-auto p-3 bg-blue-200 flex flex-col lg:flex-row md:flex-row items-center"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full lg:w-1/2 md:w-1/2 h-64 md:h-96 lg:h-[32rem] p-4 flex items-center justify-center relative mb-6 lg:mb-0"
      >
        <div className="w-full h-full bg-blue-500 rotate-6 rounded-xl"></div>
        <div className="w-[90%] h-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src={image}
            alt="image"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full lg:w-1/2 md:w-1/2 h-auto p-4 flex flex-col justify-center"
        style={{
          backgroundImage: `url('/src/assets/blob-scatter-haikei.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-4xl text-white">
          About Us
        </h1>
        <p className="font-bold text-base sm:text-lg md:text-xl lg:text-3xl">
          Get to Know Us:
        </p>
        <p className="font-bold text-base sm:text-lg md:text-xl lg:text-3xl">
          <strong className="text-blue-500">Powering </strong> Everyday Tasks
          with Smart Digital, Design & Tech Solutions
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-xl mt-2 text-gray-900">
          We are a dynamic cyber café and digital solutions company with two
          active branches, helping individuals, students, and businesses handle
          essential tasks — from online registrations and document services to
          creative design, branding, and presentations. At the heart of our work
          is speed, reliability, and attention to detail.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mt-2">
          Efe Anthony Oghor
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-900">
          Founder & CEO, Figilotech Tech{" "}
        </p>
        <div className="w-full h-auto mt-4 p-2 bg-white rounded-lg shadow-lg">
          <h2 className="text-blue-500 font-semibold text-base sm:text-lg">
            Our Vision
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum
            perspiciatis dolorem voluptate cum pariatur eaque cumque quam optio
            vero! Iure nobis, asperiores fuga reiciendis quasi magnam veniam
            nemo! Voluptas?
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
