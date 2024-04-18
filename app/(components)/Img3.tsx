"use client";
import React from "react";
import { motion } from "framer-motion";
function Img3() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.5,
        type: "spring",
        stiffness: 500,
        damping: 22,
      }}
      className="w-[50%] lg:border-t-4 lg:border-r-4 border-white p-4"
    >
      <img src={"/Images/AvRue.jpg"} alt="Gaulois" className=" rounded-2xl" />
    </motion.div>
  );
}

export default Img3;
