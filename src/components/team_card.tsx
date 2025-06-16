type teamInfo = {
  imgUrl: string;
  name: string;
  position: string;
};

const TeamCard = ({ imgUrl, name, position }: teamInfo) => {
  return (
    <div className="h-80 bg-blue-100 rounded-lg">
      <div className="w-full h-[70%]">
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform linear ease-in-out duration-500"
        />
      </div>

      <div className="text-center p-2 w-full h-[30%] flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-1">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
