import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/rhShihabProfile2.png";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 lg:mb-35">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-4xl font-light tracking-tight lg:mt-16 lg:text-6xl">
              Rahat Hasan Shihab
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Web Developer | 3D Designer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="max-w-md lg:w-1/2">
          <div className="flex justify-center">
            {/* <img src={profilePic} alt="Rahat Hasan Shihab" /> */}
            <img
              className="rounded-3xl"
              src={profile}
              alt="Rahat Hasan Shihab"
            />
            {/* <img
              className="rounded-3xl"
              src="https://via.placeholder.com/380x380"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
