"use client"
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { useDateStore } from "../(store)/store";

function CardCalendar2({newdate}: any) {
  
  const date = useDateStore((state) => state.date);

  // Filtre des nouvelles dates
  const truedate = newdate.filter((dateObject: any) => {
    return dateObject.date.includes(date); 
  });

  return (
    <>
      

      {truedate.map((date: any) => (
        <Card
          key={date._id}
          className="outline outline-2 outline-offset-2 outline-blue-500"
        >
          <CardHeader className="p-3">
            <CardTitle className="text-xl lg:text-3xl">{date.title}</CardTitle>
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
