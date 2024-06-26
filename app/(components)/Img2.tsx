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
      className="lg:w-[50%] border-white p-4 lg:border-b-4 lg:border-l-4 rounded-lg "
    >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.0066861810114!2d2.2487830767525447!3d48.78176260609555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a1f27f68dab%3A0xbe4986a1cbc448da!2sRue%20du%20Hameau%2C%2092350%20Le%20Plessis-Robinson!5e0!3m2!1sfr!2sfr!4v1714309112576!5m2!1sfr!2sfr" className="w-full h-full" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </motion.div>
  );
}

export default Img2;
