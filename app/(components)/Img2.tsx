"use client";
import React from "react";
import { motion } from "framer-motion";
function Img2() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.25,
        type: "spring",
        stiffness: 500,
        damping: 22,
      }}
      className="w-[50%] border-white p-4 lg:border-b-4 lg:border-l-4 rounded-lg "
    >
      <img src={"/Images/mapsh.jpg"} alt="Gaulois" className="rounded-lg" />
    </motion.div>
  );
}

export default Img2;
