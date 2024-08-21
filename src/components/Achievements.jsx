import React from "react";
import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";
import CustomSection from "./custom/CustomSection";

const AchievementSection = ({ title, achievements }) => (
  <div className="mb-4">
    <h4 className="text-xl text-center font-semibold mb-2">{title}</h4>
    <div className="h-[2px] bg-purple-400 mb-6 w-20 mx-auto"></div>
    {achievements.map((achievement, index) => (
      <div key={index} className="mb-2 flex flex-wrap lg:justify-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <p className="mb-2 text-sm text-neutral-400">{achievement.year}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-1 font-semibold">
            {achievement.position} -{" "}
            <span className="text-sm text-purple-100">{achievement.event}</span>
          </h6>
          <p className="mb-4 text-neutral-400">{achievement.description}</p>
        </motion.div>
      </div>
    ))}
  </div>
);

const Achievements = () => {
  return (
    <CustomSection>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Achievements
      </motion.h2>
      <AchievementSection
        title="International"
        achievements={ACHIEVEMENTS.International}
      />
      <AchievementSection
        title="National"
        achievements={ACHIEVEMENTS.National}
      />
    </CustomSection>
  );
};

export default Achievements;
