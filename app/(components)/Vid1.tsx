"use client";
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

function Vid1() {
  return (
    <div className="lg:w-[50%] flex gap-12 justify-center items-center">
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 22,
          duration: 0.6,
          delay: 0.5,
        }}
        className="w-[300px] h-[168px] lg:w-[560px] lg:h-[315px] rounded-lg"
      >
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/qY9gK2Gqwik?si=YoFbk5WgSaM0FfF1"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  );
}

export default Vid1;
