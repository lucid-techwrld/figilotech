import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: React.ReactNode;
  service: string;
  subText: string;
  index?: number;
};

const ServiceCard = ({
  icon,
  service,
  subText,
  index = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: index * 0.15,
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="h-auto p-5 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="w-12 h-12 mb-2 flex items-center justify-center bg-blue-500 rounded-full">
          {icon}
        </div>
        <h2 className="text-lg lg:text-2xl md:text-xl font-semibold text-gray-800">
          {service}
        </h2>
        <p className="text-sm lg:text-xl md:text-lg text-gray-600 mt-1">
          {subText}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
