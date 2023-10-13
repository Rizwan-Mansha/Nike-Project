"use client";
// components/Hamburger.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


import { navLinks } from "@/constants";
import  hamburger  from "../../public/icons/hamburger.svg";
import  cross  from "../../public/icons/cross-icon.svg";

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      <button onClick={toggleOpen} className="focus:outline-none ">
        <div>
          <Image src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute  -top-10 -right-16 mt-2 w-56 min-h-screen  bg-white border border-gray-200 rounded shadow-lg">
          <ul className="">
            <button onClick={toggleOpen} className=" focus:outline-none ml-48 ">
              <Image src={cross} alt="cross" width={40} height={40} />
            </button>
            {navLinks.map((item) => (
              <Link
              key={item.label}
                href={item.href}
                className="block px-4 py-2 text-black hover:bg-gray-100">
                <li>{item.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
