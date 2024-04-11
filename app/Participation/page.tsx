import Image from "next/image";
import React from "react";
import Titre3 from "../(components)/Titre3";
import Cardforpagetwo from "../(components)/Cardforpagetwo";
import CalandarComp from "../(components)/CalandarComp";
import { Separator } from "@/components/ui/separator";
import CardCalendar from "../(components)/CardCalendar";

function page() {
  return (
    <div className="mt-20">
      <Titre3 />
      <div className="w-[70%] mx-auto flex-col lg:flex-row flex justify-center gap-8 mt-20">
        <Cardforpagetwo />
      </div>
      <h2
        className="w-[70%] mx-auto text-white font-bold text-2xl mt-24 lg:text-5xl text-center lg:text-left underline"
        id="calendrier"
      >
        Calendrier
      </h2>
      <div className="flex justify-center items-center gap-4 w-[70%] mx-auto mt-20 ">
        <div className="flex gap-4">
          <CalandarComp />
          <div className="p-4">
          <Separator orientation="vertical" />
        </div>
        </div>
        
        
        <CardCalendar/>
        
      </div>
    </div>
  );
}

export default page;
