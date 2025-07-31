import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center"
    >
      <img
        src="images/profile.png"
        alt="Dorotej-Dado Arnold"
        className="max-h-[400px] w-auto z-10"
      />
      <div className="absolute inset-0 scale-[1.1] overflow-hidden flex z-0 justify-center items-center animate-pulse">
        <PiHexagonThin className="min-h-[700px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
