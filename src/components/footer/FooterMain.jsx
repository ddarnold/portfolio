import React from "react";
import { Link } from "react-scroll";

const Links = [
  { name: "About Me", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGrey">Dorotej-Dado Arnold</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {Links.map((link, index) => {
            return (
              <li key={index} className="inline-block mx-2">
                <Link
                  to={link.section}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-130}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-green">
        © 2025 Dorotej-Dado Arnold. All rights reserved.
      </p>
    </div>
  );
};

export default FooterMain;
