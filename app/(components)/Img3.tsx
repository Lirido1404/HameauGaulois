"use client";
import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      className="order-2 lg:order-1 lg:border-t-4 lg:border-r-4 border-white lg:w-[100%] w-[70%] mt-4 lg:mt-0 mx-auto lg:p-4 rounded-lg flex justify-center items-center"
    >
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <img
                src="/Images/AvRue.jpg"
                alt=""
                className="h-80 w-80 rounded object-cover"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="p-1">
              <img
                src="/Images/bmwm5.jpg"
                alt=""
                className="h-80 w-80 rounded object-cover"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="p-1">
              <img
                src="/Images/AvRue.jpg"
                alt=""
                className="h-80 w-80 rounded object-cover"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="p-1">
              <img
                src="/Images/AvRue.jpg"
                alt=""
                className="h-80 w-80 rounded object-cover"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="p-1">
              <img
                src="/Images/AvRue.jpg"
                alt=""
                className="h-80 w-80 rounded object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
}

export default Img3;
