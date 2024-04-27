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
    <>
      {truedate.length === 0 && (
        <div>
          <Card className="outline outline-2 outline-offset-2 outline-red-500">
            <CardHeader className="p-3">
              <div className="flex justify-center gap-2 items-center">
                <CardTitle className="text-xl lg:text-3xl text-center">
                  Repos
                </CardTitle>
                <span className="flex justify-center">
                  {" "}
                  <img
                    src="/Images/moon.svg"
                    className="w-12 h-12 moon"
                    alt=""
                  />{" "}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-3">
              <p className="text-2xl">
                Il n&apos;y a pas d&apos;évènement aujourd&apos;hui
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {truedate.map((date: any) => (
        <Card
          key={date._id}
          className="outline outline-2 outline-offset-2 outline-blue-500"
        >
          <CardHeader className="p-3">
            <CardTitle className="text-xl lg:text-3xl">{date.title} {date.date} </CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <p className="text-sm max-w-[70ch]">{date.content}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default CardCalendar2;
