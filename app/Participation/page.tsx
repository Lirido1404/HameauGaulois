import Image from "next/image";
import React from "react";
import Titre3 from "../(components)/Titre3";
import Cardforpagetwo from "../(components)/Cardforpagetwo";

function page() {
  return (
    <div className="mt-20">
      <Titre3/>
      <div className="w-[70%] mx-auto flex-col lg:flex-row flex justify-center gap-8 mt-20">
      <Cardforpagetwo/>
      </div>
    </div>
  );
}

export default page;
