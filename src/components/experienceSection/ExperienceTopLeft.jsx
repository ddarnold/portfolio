import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="8+" text="Years Coding" />
        <p className="font-bold text-6xl text-lightNavy">-</p>
        <ExperienceInfo number="10+" text="Projects" />
      </div>
      <p className="text-center text-white">
        Delivered multiple projects across AI, software engineering, and
        industrial automation.
      </p>
      <ExperienceInfo number="3" text="Languages" />
    </div>
  );
};

export default ExperienceTopLeft;
