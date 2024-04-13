import Image from "next/image";
import React from "react";
import Titre3 from "../(components)/Titre3";
import Cardforpagetwo from "../(components)/Cardforpagetwo";
import CalandarComp from "../(components)/CalandarComp";
import { Separator } from "@/components/ui/separator";
import CardCalendar from "../(components)/CardCalendar";
import Img2 from "../(components)/Img2";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function page() {
  return (
    <div className="mt-20">
      <Titre3 />
      <div className="w-[70%] mx-auto flex-col lg:flex-row flex justify-center  gap-8 mt-20">
        <Cardforpagetwo />
      </div>
      <h2
        className="w-[70%] mx-auto text-white font-bold text-2xl mt-24 lg:text-5xl text-center lg:text-left underline"
        id="calendrier"
      >
        Calendrier
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 w-[70%] mx-auto mt-20 ">
        <div className="flex flex-col lg:flex-row gap-4">
          <CalandarComp />
          <div className="p-4 hidden lg:flex">
            <Separator orientation="vertical" />
          </div>
          <div className="p-4">
            <Separator />
          </div>
        </div>

        <CardCalendar />
      </div>
      <h2
        className=" w-[70%] flex justify-center lg:justify-start items-center mx-auto text-white font-bold  mt-24 text-sm md:text-base lg:text-2xl xl:text-5xl text-center lg:text-left underline"
        id="adhesion"
      >
        Dons{" "}
        <span>
          <img src="/Images/spear.svg" alt="" className="h-32 w-32 spear1" />
        </span>{" "}
        Adhésions{" "}
        <span>
          <img src="/Images/spear.svg" alt="" className="h-32 w-32 spear2" />
        </span>{" "}
        Pétitions !
      </h2>

      <div className="w-[70%] mx-auto flex flex-col xl:flex-row mt-20 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl lg:text-3xl text-center xl:text-left">Dons</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-justify">
              Défendre un quartier est très complexe et même potentiellement
              très coûteux, notamment en frais d&apos;avocats. Au delà de
              l&apos;adhésion, tous les dons seront les bienvenus, que vous
              soyez adhérents ou non
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="text-white text-xl bg-[#1A73E8] px-8 py-2 rounded border-1 border-[#EDEDED] mt-4 hover:bg-[#185ABC] ease-in-out duration-100 shadow">
                Je donne !
              </button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl lg:text-3xl text-center xl:text-left">Adhésions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-justify">
              Les adhésions nous sont capitales. Elles nous permettront de
              comptabiliser nos soutiens et de montrer à nos administrations que
              nous ne sommes pas seuls. Au contraire nous espérons pouvoir
              démontrer que le soutien de la population pour que notre quartier
              reste une “zone pavillonnaire” est massif.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="text-white text-xl bg-[#1A73E8] px-8 py-2 rounded border-1 border-[#EDEDED] mt-8 hover:bg-[#185ABC] ease-in-out duration-100 shadow">
                J&apos;adhère !
              </button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl lg:text-3xl text-center xl:text-left">Pétitions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-justify">
              Nous vous invitons à participer à notre pétition. Plus nombreuses
              seront les signatures, plus importante sera notre chance de
              réussir à conserver nos logements.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="text-white text-xl bg-[#1A73E8] px-8 py-2 rounded border-1 border-[#EDEDED] mt-4 hover:bg-[#185ABC] ease-in-out duration-100 shadow">
                Je signe !
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default page;
