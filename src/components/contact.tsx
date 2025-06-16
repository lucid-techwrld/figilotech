import { PhoneCall, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 bg-blue-600 p-4 md:p-6">
      <div className="w-full md:w-1/2 h-full p-5 flex flex-col justify-center text-white">
        <h1 className="text-xl font-semibold mt-2 text-white">Contact Us</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore
          consequatur exercitationem. Earum illum quasi, eaque similique iste
          amet, animi ab consectetur at veniam impedit quo! Magni veritatis
          animi facilis.
        </p>
        <div className="mt-10 flex gap-2 text-sm items-center">
          <PhoneCall size={18} />
          +234000000000
        </div>
        <div className="mt-2 flex gap-2 text-sm items-center">
          <Mail size={18} />
          figilotech@gmail.com
        </div>
      </div>
      <form
        className="w-full md:w-1/2 h-full p-5 flex flex-col justify-center rounded-lg text-sm mt-6 md:mt-0"
        style={{
          backgroundImage: "url('/src/assets/blob-scene-haikei.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-lg font-semibold mb-4">
          We'd love to hear from you <br />
          Let's get in touch
        </p>
        <label className="mb-2">Name</label>
        <input
          type="text"
          className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
        <label className="mb-2">Email</label>
        <input
          type="email"
          className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        <label className="mb-2">Message</label>
        <textarea
          className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Your message here"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 hover:text-white transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
