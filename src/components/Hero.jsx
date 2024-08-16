import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/rhShihabProfile2.png";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 lg:mb-35">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-light tracking-tight lg:mt-16 lg:text-6xl"
            >
              Rahat Hasan Shihab
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Developer | 3D Designer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="max-w-md lg:w-1/2">
          <div className="flex justify-center">
            {/* <img src={profilePic} alt="Rahat Hasan Shihab" /> */}
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
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
