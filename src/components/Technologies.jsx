import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiArduino } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import figmaIcon from "../assets/icons/figma-icon.png";
import fusion360 from "../assets/icons/fusion360-icon.png";
import { motion } from "framer-motion";
import CustomSection from "./custom/CustomSection";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <CustomSection>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <FiFigma className="text-7xl" /> */}
          <img className="w-11 my-2 mx-3" src={figmaIcon} />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiArduino className="text-7xl text-teal-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <FiFigma className="text-7xl" /> */}
          <img className="w-14 my-2 mx-2" src={fusion360} />
        </motion.div>
      </motion.div>
    </CustomSection>
  );
};

export default Technologies;
