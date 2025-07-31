import React from "react";

const HeroGradient = () => {
  return (
    <div>
      <div className="absolute shadow-(--cyan-medium-shadow) top-0 right-[400px] -z-10 animate-pulse"></div>
      <div className="absolute shadow-(--orange-medium-shadow) top-0 right-0 -z-10 animate-pulse"></div>

      <div className="absolute shadow-(--cyan-medium-shadow) top-[300px] left-0 -z-10 opacity-50"></div>
      <div className="absolute shadow-(--orange-medium-shadow) top-[500px] left-0 -z-10 opacity-50"></div>
    </div>
  );
};

export default HeroGradient;
