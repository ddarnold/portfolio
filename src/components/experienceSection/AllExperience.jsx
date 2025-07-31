import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Data Analyst Intern",
    company: "Diplo Foundation",
    date: "2018 – Present",
    responsibilities: [
      "Developed Python scripts for data harmonization and automation tasks.",
      "Contributed to AI-based systems for policy research and analysis.",
      "Performed SEO optimization and analytics for digital platforms.",
      "Assisted in UI/UX testing and supported live webcasting events.",
    ],
  },
  {
    job: "Computer Science Undergraduate",
    company: "Ulm University of Applied Sciences (THU)",
    date: "2022 – Present",
    responsibilities: [
      "Specialized in Artificial Intelligence, Robotics, and Data Science.",
      "Completed coursework in Algorithms, Operating Systems, Software Engineering, and Machine Learning.",
      "Built academic projects including SAT solvers, multiplayer games, and AI-assisted security tools.",
      "Engaged in practical labs with technologies like ROS, Docker, Spring Boot, and CI/CD pipelines.",
    ],
  },
  {
    job: "Smart Manufacturing Intern",
    company: "Bachem",
    date: "2025 – Present",
    responsibilities: ["–", "–", "–", "–"],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
