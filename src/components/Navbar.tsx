import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white md:py-8 py-4 px-6  sm:px-10 lg:px-20 shadow-md">
      <div className="w-[1100px] mx-auto">
        <div className="uppercase text-xl sm:text-2xl flex sm:gap-4 gap-3">
          <FaUmbrellaBeach className="translate-y-[2px]" color="orange" />{" "}
          <span className="border-b border-b-orange-300">Pura Vida</span>
        </div>
        <div>
          <ul>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
