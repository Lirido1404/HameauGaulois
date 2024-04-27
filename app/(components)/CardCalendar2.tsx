"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDateStore } from "../(store)/store";
import { Separator } from "@/components/ui/separator";

function CardCalendar2({ newdate }: any) {
  const date = useDateStore((state) => state.date);
  const setNewDate = useDateStore((state) => state.setNewDate);

  // Filtre des nouvelles dates
  const truedate = newdate.filter((dateObject: any) => {
    return dateObject.date.includes(date);
  });

  useEffect(() => {
    if (JSON.stringify(newdate) !== JSON.stringify(date)) {
      setNewDate(newdate);
    }
  }, [newdate, date, setNewDate]);

  return (
    <div>
      <p className="text-white  rounded text-center">
        Emploi du temps pour le <span className="font-bold">{date}</span>{" "}
      </p>
      <Separator className="mt-2 w-[50%] mx-auto" />

      {truedate.length === 0 && (
        <div className="mt-2">
          <Card className="rounded overflow-hidden w-full">
            <CardHeader className="p-0"></CardHeader>
            <CardContent className="p-1">
              <span className="text-sm flex items-center">
                <img src="/Images/crosss.svg" alt="" className="w-6 h-6" />
                <p>Il n&apos;y a pas d&apos;évènement aujourd&apos;hui</p>
              </span>
            </CardContent>
          </Card>
        </div>
      )}

      {truedate.map((date: any) => (
        <Card className="rounded overflow-hidden mt-2 w-full" key={date._id}>
          <CardHeader className="p-2 font-bold"> {date.title} </CardHeader>

          <CardContent className="p-1">
            <span className="text-sm flex items-center">
            <Separator className="h-6 w-[2px] rounded ml-2 bg-[#1A73E8]" orientation="vertical" />
              <p className="ml-1 lg:w-[40ch]"> {date.content} </p>
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CardCalendar2;
