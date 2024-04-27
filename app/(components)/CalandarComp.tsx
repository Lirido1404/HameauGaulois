"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useDateStore } from "../(store)/store";
import { isValid, format } from "date-fns";

function CalandarComp() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const vraidate = date?.toLocaleDateString();
  const setDateInStore = useDateStore((state) => state.setDate);

  useEffect(() => {
    if (vraidate) {
      setDateInStore(vraidate);
    }
  }, [vraidate, setDateInStore]);

  const newDate = useDateStore((state) => state.newDate);

  const bookedDays = [new Date(2024, 4, 3), new Date(2024, 4, 4)];

  const convertedDates = newDate // Assurez-vous que newDate est le tableau contenant les objets avec une propriété "date"
    ?.map((dateObj: any) => {
      const date = new Date(dateObj.date);
      return isValid(date) ? format(date, "dd-MM-yyyy") : null;
    })
    .filter(Boolean);

  const datesArray = newDate?.map((dateObj: any) => new Date(dateObj.date));

  const bookedStyle = { border: "2px solid #1A73E8", borderRadius: "6px" };

  const modifiers = { booked: convertedDates };
  const modifiersStyles = { booked: bookedStyle };

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow bg-white text-black"
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
      />
      <p className="text-center text-white">{vraidate}</p>
      {convertedDates?.map((date, index) => (
        <div key={index} className="text-red-500 font-bold">
          {date}
        </div>
      ))}
    </div>
  );
}

export default CalandarComp;
