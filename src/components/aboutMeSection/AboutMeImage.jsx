import React from "react";

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden z-10">
        <img src="/images/about-me_blue.png" alt="about me image" className="h-full w-auto object-cover"></img>
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] z-0"></div>
    </div>
  );
};

export default AboutMeImage;
