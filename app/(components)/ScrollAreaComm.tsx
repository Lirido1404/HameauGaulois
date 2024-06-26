import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ScrollAreaComm() {
  return (
    <ScrollArea className=" rounded-md lg:mt-20 mt-6">
      <div className="ml-4 sliderr">
          <img src="/Images/slidesvg.svg" className="h-12 w-12" alt="" />
        </div>
      <div className="flex gap-4">
      <Card className="colorcard w-96 ml-4 rounded-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Prévot Serge</CardTitle>
                <CardDescription>89 Avenue Edouard Herriot</CardDescription>
              </div>
              <div className="h-12 w-12 rounded-full">
                <Image
                  src={"/Images/bmwm55.jpeg"}
                  width={200}
                  height={200}
                  alt="photo de profil"
                  className="rounded-full h-12 w-12 object-cover"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardContent className="p-0">
              <p className="flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                odio, voluptas porro sit minus mollitia officiis. Eos quisquam
                excepturi.
              </p>
            </CardContent>
          </CardContent>
          <CardFooter className="p-2 ml-4">
            <p className="italic">56 ans</p>
          </CardFooter>
        </Card>

        <Card className="colorcard w-96 rounded-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Prévot Serge</CardTitle>
                <CardDescription>89 Avenue Edouard Herriot</CardDescription>
              </div>
              <div className="h-12 w-12 rounded-full">
                <Image
                  src={"/Images/bmwm55.jpeg"}
                  width={200}
                  height={200}
                  alt="photo de profil"
                  className="rounded-full h-12 w-12 object-cover"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardContent className="p-0">
              <p className="flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                odio, voluptas porro sit minus mollitia officiis. Eos quisquam
                excepturi.
              </p>
            </CardContent>
          </CardContent>
          <CardFooter className="p-2 ml-4">
            <p className="italic">56 ans</p>
          </CardFooter>
        </Card>

        <Card className="colorcard w-96 rounded-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Prévot Serge</CardTitle>
                <CardDescription>89 Avenue Edouard Herriot</CardDescription>
              </div>
              <div className="h-12 w-12 rounded-full">
                <Image
                  src={"/Images/bmwm55.jpeg"}
                  width={200}
                  height={200}
                  alt="photo de profil"
                  className="rounded-full h-12 w-12 object-cover"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardContent className="p-0">
              <p className="flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                odio, voluptas porro sit minus mollitia officiis. Eos quisquam
                excepturi.
              </p>
            </CardContent>
          </CardContent>
          <CardFooter className="p-2 ml-4">
            <p className="italic">56 ans</p>
          </CardFooter>
        </Card>

        <Card className="colorcard w-96 rounded-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Prévot Serge</CardTitle>
                <CardDescription>89 Avenue Edouard Herriot</CardDescription>
              </div>
              <div className="h-12 w-12 rounded-full">
                <Image
                  src={"/Images/bmwm55.jpeg"}
                  width={200}
                  height={200}
                  alt="photo de profil"
                  className="rounded-full h-12 w-12 object-cover"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardContent className="p-0">
              <p className="flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                odio, voluptas porro sit minus mollitia officiis. Eos quisquam
                excepturi.
              </p>
            </CardContent>
          </CardContent>
          <CardFooter className="p-2 ml-4">
            <p className="italic">56 ans</p>
          </CardFooter>
        </Card>

        <Card className="colorcard w-96 rounded-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Prévot Serge</CardTitle>
                <CardDescription>89 Avenue Edouard Herriot</CardDescription>
              </div>
              <div className="h-12 w-12 rounded-full">
                <Image
                  src={"/Images/bmwm55.jpeg"}
                  width={200}
                  height={200}
                  alt="photo de profil"
                  className="rounded-full h-12 w-12 object-cover"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardContent className="p-0">
              <p className="flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                odio, voluptas porro sit minus mollitia officiis. Eos quisquam
                excepturi.
              </p>
            </CardContent>
          </CardContent>
          <CardFooter className="p-2 ml-4">
            <p className="italic">56 ans</p>
          </CardFooter>
        </Card>

        <Card className="colorcard w-96 rounded-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Prévot Serge</CardTitle>
                <CardDescription>89 Avenue Edouard Herriot</CardDescription>
              </div>
              <div className="h-12 w-12 rounded-full">
                <Image
                  src={"/Images/bmwm55.jpeg"}
                  width={200}
                  height={200}
                  alt="photo de profil"
                  className="rounded-full h-12 w-12 object-cover"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardContent className="p-0">
              <p className="flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                odio, voluptas porro sit minus mollitia officiis. Eos quisquam
                excepturi.
              </p>
            </CardContent>
          </CardContent>
          <CardFooter className="p-2 ml-4">
            <p className="italic">56 ans</p>
          </CardFooter>
        </Card>

        

        
      </div>
      <ScrollBar orientation="horizontal" className='bg-[#08262E]' />
    </ScrollArea>
  );
}

export default ScrollAreaComm;
