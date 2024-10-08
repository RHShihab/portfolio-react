import aboutImg from "../assets/profile.png";
import profile from "../assets/profile.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import CustomSection from "./custom/CustomSection";

const About = () => {
  return (
    <CustomSection>
      <h2 className="my-20 text-center text-4xl">About Me</h2>
      <div className="flex flex-wrap justify-center lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-96 lg:p-8"
        >
          <div className="flex items-center justify-center">
            {/* <img className="rounded-2xl max-w-sm" src={aboutImg} alt="About" /> */}
            <img
              className="rounded-3xl"
              src={profile}
              alt="Rahat Hasan Shihab"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-start"
        >
          <div className="my-2 py-6 max-w-xl">
            {ABOUT_TEXT.split("\n").map((line, index) => (
              <p className="my-2">{line}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </CustomSection>
  );
};

export default About;
