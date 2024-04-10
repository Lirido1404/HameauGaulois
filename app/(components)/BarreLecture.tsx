"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
function BarreLecture() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, position: "fixed", top: 0,right:0,left:0,height:5,transformOrigin:"0%",background:"#1A73E8" }}
    ></motion.div>
  );
}

export default BarreLecture;
