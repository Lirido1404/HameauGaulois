"use client";
import React from "react";
import { motion } from "framer-motion";

function Vid2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.25,
        type: "spring",
        stiffness: 500,
        damping: 22,
      }}
      className="w-full h-full p-4 rounded-lg"
    >
      <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/wHPNlgCMgVY?si=yTjdrzLR63CXYAlB"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
}

export default Vid2;
