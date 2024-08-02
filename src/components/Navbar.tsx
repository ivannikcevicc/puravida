"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { FaInstagram, FaPhoneAlt, FaUmbrellaBeach } from "react-icons/fa";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

export const NavLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Gallery",
    href: "/",
  },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [animationKey, setAnimationKey] = useState(Date.now());

  const toggleNav = useCallback(() => {
    setShowNav((prev) => !prev);
    setAnimationKey(Date.now());
  }, []);

  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-white md:py-8 py-4 px-6 sm:px-10 lg:px-20 shadow-md">
        <div className="w-[1100px] mx-auto flex justify-between items-center">
          <div className="flex items-center">
          <div className="sm:hidden block mr-4">
            <Hamburger toggled={showNav} toggle={toggleNav} />
          </div>
          <div className="uppercase text-xl md:text-2xl flex sm:gap-4 gap-3">
            <FaUmbrellaBeach
              className="translate-y-[6px] sm:mr-0 mr-2 sm:scale-100 scale-150 text-amber-400"
             
            />{" "}
            <span className="border-b border-b-amber-300">Pura Vida</span>
          </div>
          </div>

          <ul className="hidden sm:flex">
            {NavLinks.map((link) => (
              <li
                className="border-b-2 flex px-3 align-center justify-center border-b-transparent hover:border-b-amber-300 transition-all"
                key={link.label}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="gap-2 hidden xs:flex">
            <span className="border-b border-b-amber-400 text-xs  sm:text-[1rem]">+382 68 26 25 25</span>
            <FaPhoneAlt className="text-amber-400 text-xs sm:text-[1rem]" />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {showNav && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-gray-800 bg-opacity-75 z-30 block sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowNav(false)}
            ></motion.div>

            {/* Side Menu */}
            <motion.div
              className="fixed top-0 left-0 w-64 h-full bg-white shadow-md p-4 z-40 block sm:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.3,
              }}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setShowNav(false)}
                  className="text-gray-700 text-xl"
                >
                  &times;
                </button>
              </div>
              <div className="flex gap-2 items-center justify-center mb-4 mt-14">
                <FaInstagram
                  className="hover:text-amber-500 transition-colors"
                  color="orange"
                  size={25}
                />
                pura_vida_beach{" "}
              </div>
              <hr />
              <motion.ul
                key={animationKey}
                className="mt-4"
                initial="hidden"
                animate="visible"
                variants={listVariants}
              >
                {NavLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    className="relative group px-2 py-4 overflow-hidden"
                    variants={itemVariants}
                  >
                    <Link
                      href={link.href}
                      className="relative z-10 transition-colors duration-300 group-hover:text-white"
                    >
                      {link.label}
                    </Link>
                    <div className="absolute inset-0 bg-amber-400 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
