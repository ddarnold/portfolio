import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I’m Dorotej Arnold, a Computer Science student with a passion for
        intelligent systems and automation. With hands-on experience in backend
        development, machine learning, and now smart manufacturing at Bachem, I
        thrive at the intersection of software and real-world applications. From
        autonomous vehicles to pharmaceutical tech, I enjoy solving complex
        problems and building impactful solutions that blend precision with
        innovation.
      </p>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan duration-500"
      >
        My Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
