"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useDateStore } from "../(store)/store";

function CalandarComp() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const vraidate = date?.toLocaleDateString();
  const setDateInStore = useDateStore((state) => state.setDate); // Fonction pour mettre à jour la date dans le store
  // Utiliser useEffect pour mettre à jour la date dans le store lorsque la date change



  useEffect(() => {
    if (vraidate) {
      setDateInStore(vraidate);
    }
  }, [vraidate, setDateInStore]);

  // Ajout des dates réservées pour les 3 et 4 mai
  const bookedDays = [new Date(2024, 4, 3), new Date(2024, 4, 4)];

  // Style pour les jours réservés
  const bookedStyle = { border: "2px solid #1A73E8", borderRadius: "6px" };

  // Modificateurs pour les jours réservés avec leur style
  const modifiers = { booked: bookedDays };
  const modifiersStyles = { booked: bookedStyle };

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow bg-white text-black"
        modifiers={modifiers} // Utilisation des modificateurs pour indiquer les jours réservés
        modifiersStyles={modifiersStyles} // Utilisation des styles pour les modificateurs
      />
      <p className="text-center text-white">{vraidate}</p>
    </div>
  );
}

export default CalandarComp;
