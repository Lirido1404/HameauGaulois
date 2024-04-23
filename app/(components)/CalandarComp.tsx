'use client'
import React, { useEffect, useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { useDateStore } from "../(store)/store";

function CalandarComp() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const vraidate = date?.toLocaleDateString();
  const setDateInStore = useDateStore((state)=>state.setDate); // Fonction pour mettre à jour la date dans le store

  // Utiliser useEffect pour mettre à jour la date dans le store lorsque la date change
  useEffect(() => {
    if (vraidate) {
      setDateInStore(vraidate);
    }
  }, [vraidate, setDateInStore]);

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow bg-white text-black"
      />
      <p className="text-center text-white">{vraidate}</p>
    </div>
  );
}

export default CalandarComp;