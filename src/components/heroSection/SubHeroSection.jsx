import React from "react";

const SubHeroSection = () => {
  return (
    <div className="w-full border-y border-lightGray text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-navy">
      <p className="md:block sm:hidden">Problem-Solver</p>
      <p className="md:block sm:hidden">Adaptable Leader</p>
      <p>Creative Thinker</p>
    </div>
  );
};

export default SubHeroSection;
