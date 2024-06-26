"use client";
import React from "react";
import { motion } from "framer-motion";
function Img1() {
  return (
    <div className="order-1 lg:order-2 lg:border-t-4 lg:border-l-4 border-white p-4 rounded-lg">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          type: "spring",
          stiffness: 500,
          damping: 22,
        }}
        src={"/Images/AvRue.jpg"}
        alt="Gaulois"
        className="rounded-lg "
      />
    </div>
  );
}

export default Img1;
