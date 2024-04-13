import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function CardCalendar() {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <Card className="outline outline-2 outline-offset-2 outline-blue-500">
        <CardHeader className="p-3">
          <CardTitle className="text-xl lg:text-3xl">Tractation</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <p className="text-sm max-w-[70ch]">
            Après avoir créé leur association et de s&apos;être réunie enAprès avoir créé leur association et de s&apos;être réunie en
          </p>
        </CardContent>
      </Card>

      <Card className="outline outline-2 outline-offset-2 outline-blue-500">
        <CardHeader className="p-3">
          <CardTitle className="text-xl lg:text-3xl">Tractation</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <p className="text-sm max-w-[70ch]">
            Après avoir créé leur association et de s&apos;être réunie enAprès avoir créé leur association et de s&apos;être réunie en
          </p>
        </CardContent>
      </Card>

      
      
    </div>
  );
}

export default CardCalendar;
