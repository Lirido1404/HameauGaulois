'use client'
import React, { useEffect } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function CalandarComp() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    // Fonction pour formater la date
    const formatDate = (date: Date | undefined): string => {
        if (!date) return ""; // Si la date est indéfinie, retournez une chaîne vide
        return date.toLocaleDateString(); // Formater la date en format local
    }

    const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  useEffect(()=>{

   
        const params = new URLSearchParams(searchParams);
        if (date) {
          params.set("date", date.toLocaleDateString());
        } else {
          params.delete("date");
        }
        replace(`${pathname}?${params.toString()}`);
      
  },[date])

    return (
        <div>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow bg-white text-black"
                
            />
            <p className='text-center text-white'>{formatDate(date)}</p>
        </div>
    )
}

export default CalandarComp
