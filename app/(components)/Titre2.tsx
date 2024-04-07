"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Titre2() {
  return (
    <div className="w-[70%] mx-auto flex-col lg:flex-row flex gap-8">
      <div className="lg:w-[50%]">
        <h1 className="text-2xl  text-[#ffffff]">
          <span className="text-base lg:text-xl">Association</span> <br />
          <div className=" flex flex-row gap-2 items-center">
            <motion.p
              initial={{ x: "-100%", opacity: 0 }} // Position initiale
              animate={{ x: 0, opacity: 1 }} // Position finale
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 22,
                delay: 1,
              }}
              className="text-xl font-bold lg:text-6xl" // Transition de type ressort avec une rigidité et un amortissement plus élevés
            >
              Hameau
            </motion.p>
            <motion.p
              initial={{ x: "100%", opacity: 0 }} // Position initiale
              animate={{ x: 0, opacity: 1 }} // Position finale
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 22,
                delay: 1,
              }}
              className="text-xl font-bold lg:text-6xl" // Transition de type ressort avec une rigidité et un amortissement plus élevés
            >
              Gaulois
            </motion.p>
            <span className="italic">(AHG)</span>
          </div>
        </h1>
        <p className="w-full text-justify text-white mt-16 leading-8 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde velit
          deleniti voluptatum ad laboriosam. Deserunt hic consectetur aperiam
          obcaecati itaque! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Unde, illum.
        </p>
        <Link href={"/"} className="flex justify-center lg:justify-start">
          <button className="text-white text-xl bg-[#1A73E8] px-8 py-2 rounded border-1 border-[#EDEDED] mt-6 hover:bg-[#185ABC] ease-in-out duration-100 shadow">
            Faire un don
          </button>
        </Link>
      </div>
      <div className="lg:w-[50%] flex gap-12 justify-center items-center">
        <Separator orientation="vertical" />
        <iframe className="w-[200px] h-[112px] lg:w-[560px] lg:h-[315px] rounded-lg" src="https://www.youtube.com/embed/qY9gK2Gqwik?si=YoFbk5WgSaM0FfF1" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </div>
    </div>
  );
}

export default Titre2;
