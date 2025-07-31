import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavbarLogo />
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="navbar-menu"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={fadeIn("down", 0.2).hidden}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              className="sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] sm:w-full lg:hidden"
            >
              <NavbarLinks onLinkClick={() => setMenuOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
        <button
          className="text-2xl p-3 border border-orange rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
