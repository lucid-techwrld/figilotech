import ServiceCard from "./service_card";
import {
  PaletteIcon,
  GlobeIcon,
  BadgePercentIcon,
  PrinterIcon,
  HeadphonesIcon,
  TypeIcon,
} from "lucide-react";

const services = [
  {
    icon: <PaletteIcon size={32} />,
    service: "Graphic Design",
    subText: "Transforming Ideas into Visual Masterpieces",
  },
  {
    icon: <GlobeIcon size={32} />,
    service: "Web Development",
    subText: "Building Modern and Responsive Websites",
  },
  {
    icon: <BadgePercentIcon size={32} />,
    service: "Branding",
    subText: "Creating Unique Brand Identities",
  },
  {
    icon: <PrinterIcon size={32} />,
    service: "Printing",
    subText: "High-Quality Print Solutions",
  },
  {
    icon: <HeadphonesIcon size={32} />,
    service: "IT Support",
    subText: "Reliable Tech Support for Your Business",
  },
  {
    icon: <TypeIcon size={32} />,
    service: "Project Typing",
    subText: "Professional Typing Services for Your Projects",
  },
];

const Services = () => {
  return (
    <div
      className="w-full h-auto p-3 flex flex-col items-center justify-center"
      id="service"
      style={{
        backgroundImage: "url('/src/assets/wave-haikei.svg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-lg sm:text-xl lg:text-4xl md:text-2xl font-semibold mt-2">
        What we Offer
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-900 mt-2 text-center w-full md:w-3/4 lg:w-1/2">
        We provide a wide range of services including online registrations,
        document services, creative design, branding, and presentations,
        ensuring that we meet the diverse needs of our clients with speed and
        reliability.
      </p>
      <div className="w-full lg:w-[70%] h-auto mt-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {services.map((item, idx) => (
          <ServiceCard
            key={item.service}
            icon={item.icon}
            service={item.service}
            subText={item.subText}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
