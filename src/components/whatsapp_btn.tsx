import whatsapp from "../assets/whatsapp-icon.png";

const Whatsapp = () => {
  return (
    <button className="fixed bottom-10 right-3 w-16 h-16 bg-white rounded-full hover:scale-105">
      <a href="http://" rel="noopener noreferrer">
        <img src={whatsapp} alt="whatsapp" />
      </a>
    </button>
  );
};

export default Whatsapp;
