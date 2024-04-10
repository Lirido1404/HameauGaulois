"use client";
import React, { useState } from "react";
import { NavigationMenuDemo } from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



function Mainnav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const fermerMenu = () => {
    setToggleMenu(false);
  };
  return (
    <div className="">
      <nav className="">
        <div className="w-full justify-between items-center p-6 lg:hidden hidden xl:flex bg-[#f1f1f1]">
          <Link href={"/"}>
            <Image
              src={"/Images/Logo21.png"}
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>
          <NavigationMenuDemo />
        </div>
      </nav>

      <div className="xl:hidden">
        <div
          className={`h-[100vh] bg-[#08262E] fixed top-0 w-[100%] ${
            toggleMenu ? "" : "atransform"
          } menunavmob flex flex-col justify-center items-center gap-20`}
        >
          <div className="w-[70%] mx-auto flex justify-center">
            <Image
              src={"/Images/Logo21.png"}
              width={150}
              height={150}
              alt="Logo"
            />
          </div>
          <div className="w-[70%] mx-auto p-4 divbord flex justify-center">
            <p className="text-center text-xl text-white font-bold">
              A propos de l&apos;association
            </p>
          </div>
          <div className="w-[70%] mx-auto p-4 divbord flex justify-center">
            <p className="text-center text-xl text-white font-bold">
              Participer et soutenir
            </p>
          </div>
          <div className="w-[70%] mx-auto p-4 divbord flex justify-center">
            <p className="text-center text-xl text-white font-bold">Contact</p>
          </div>
          <div className="w-[70%] mx-auto p-4 divbord flex justify-center">
            <p className="text-center text-xl text-white font-bold">Login</p>
          </div>
        </div>
      </div>

      
        <div className="bg-white border-2 p-1 rounded-lg border-[#B8FFC7] xl:hidden fixed top-0 right-0 m-5" onClick={handleToggleMenu}>
          <svg
            className={`ham hamRotate ham1 ${toggleMenu ? "active" : ""}`}
            viewBox="0 0 100 100"
            width="30"
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </div>
      
    </div>
  );
}

export default Mainnav;
