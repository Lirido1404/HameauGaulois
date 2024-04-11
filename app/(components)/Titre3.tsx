"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Vid1 from "./Vid1";

function Titre3() {
  return (
    <div className="w-[70%] mx-auto flex-col lg:flex-row flex gap-8">
      <div className="lg:w-[50%]">
        <h1 className="text-xl font-bold lg:text-6xl text-white" id="actions">Actions</h1>
        <p className="w-full text-justify text-white mt-16 leading-8 text-lg">
          AHG se réserve le droit de mener toute action (conformément à la
          réglementation) afin de communiquer sur le projet de la Mairie et de
          VSGP et de contester le PLUi et toute irrégularité qu&apos;elle aurait
          constaté.
        </p>
        <Link href={"/"} className="flex justify-center lg:justify-start">
          <button className="text-white text-xl bg-[#1A73E8] px-8 py-2 rounded border-1 border-[#EDEDED] mt-6 hover:bg-[#185ABC] ease-in-out duration-100 shadow">
            Participer
          </button>
        </Link>
      </div>
      <Vid1 />
    </div>
  );
}

export default Titre3;
