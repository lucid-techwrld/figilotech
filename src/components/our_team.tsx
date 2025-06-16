import TeamCard from "./team_card";
import lady from "../assets/lady.webp";
import man from "../assets/man.jpg";
import lady2 from "../assets/lady2.webp";
import boy from "../assets/boy.jpg";
import boy2 from "../assets/boy2.jpg";
import girl from "../assets/lady3.webp";

const OurTeam = () => {
  return (
    <div className="w-full h-auto p-3 flex flex-col items-center justify-center">
      <h1 className="text-xl lg:text-4xl md:text-2xl font-semibold mt-2">
        Meet our Team
      </h1>
      <p className="text-[0.7em] lg:text-2xl  text-gray-900 mt-2 text-center w-1/2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
        sapiente cumque quisquam soluta, explicabo aspernatur itaque mollitia
        nisi, deserunt eveniet nostrum quo, repudiandae quam. Quidem earum
        commodi officiis est nam?
      </p>
      <div className="w-[80%] h-full grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-3 ">
        <TeamCard
          imgUrl={man}
          name={"Efe Anthony Oghor"}
          position={"Founder/CEO"}
        />
        <TeamCard
          imgUrl={lady}
          name={"Mary Jane Doe"}
          position={"Secetary/Manager"}
        />
        <TeamCard
          imgUrl={boy}
          name={"Efe Anthony Joel"}
          position={"Personal Assistant"}
        />
        <TeamCard imgUrl={lady2} name={"Seun Elizabeth"} position={"Student"} />
        <TeamCard
          imgUrl={boy2}
          name={"Davis Ayomide"}
          position={"Graphic Designer/Developer"}
        />
        <TeamCard
          imgUrl={girl}
          name={"Aminat Ayetoro"}
          position={"Microsoft Office Specialist"}
        />
      </div>
    </div>
  );
};

export default OurTeam;
