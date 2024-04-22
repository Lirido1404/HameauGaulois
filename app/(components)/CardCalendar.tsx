import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchDates } from "@/app/api/Date/route";

async function CardCalendar() {
  
  const datess = await fetchDates();
  const newdate = JSON.parse(JSON.stringify(datess));

  const truedate = newdate.filter((dateObject:any)=>{
    return (dateObject.date.includes("25/04/2024"));
  })


  return (
    <>
    <Card className="outline outline-2 outline-offset-2 outline-blue-500">
        <CardHeader className="p-3">
          <CardTitle className="text-xl lg:text-3xl">Tractation</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <p className="text-sm max-w-[70ch]">
            Après avoir créé leur association et de s&apos;être réunie enAprès
            avoir créé leur association et de s&apos;être réunie en
          </p>
        </CardContent>
      </Card>

      {truedate.map((date:any) => (
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

export default CardCalendar;
