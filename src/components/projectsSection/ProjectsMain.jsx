import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "AI vs CVEs",
    year: "2025",
    align: "right",
    image: "images/ai-vs-cve.png",
    link: "#",
    description:
      "Evaluated ML models for detecting vulnerable npm modules, built benchmarking tools, and automated validation pipelines to improve detection performance.",
  },
  {
    name: "Chess Game",
    year: "2024",
    align: "left",
    image: "images/chess-game.png",
    link: "https://github.com/ddarnold/chess_game",
    description:
      "Created a complete chess engine with AI opponents and real-time socket-based multiplayer, supporting all chess rules and gameplay logic.",
  },
  {
    name: "Sudoku SAT Solver",
    year: "2024",
    align: "right",
    image: "images/sudoku-sat-solver.png",
    link: "https://github.com/ddarnold/Sudoku_SAT_Solver",
    description:
      "Developed an Android app that scans Sudoku puzzles via OCR and solves them using a SAT solver, converting images into logical constraints.",
  },
  {
    name: "Online Tutoring Platform",
    year: "2024",
    align: "left",
    image: "images/online-tutoring.png",
    link: "https://github.com/ddarnold/Online_Tutoring_Platform",
    description:
      "Engineered a scalable platform with CI/CD, integrated code quality tools (SonarQube, linters), and managed a PostgreSQL DaaS on CloudSQL.",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
