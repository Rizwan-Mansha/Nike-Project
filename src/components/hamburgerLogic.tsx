"use client";
// components/Hamburger.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/constants";
import hamburger from "../../public/icons/hamburger.svg";
import cross from "../../public/icons/cross-icon.svg";

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button onClick={toggleOpen} className="focus:outline-none ">
        <div>
          <Image src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-1/2 z-20 bg-gray-300 overflow-y-auto">
          <ul className="">
            <button
              onClick={toggleOpen}
              className=" focus:outline-none ml-[75%] mt-5">
              <Image src={cross} alt="cross" width={40} height={40} />
            </button>
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block  py-2 px-[10%] text-black hover:bg-gray-100">
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
