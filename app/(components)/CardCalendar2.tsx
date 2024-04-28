"use client";
import React, { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useDateStore } from "../(store)/store";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
function CardCalendar2({ newdate }: any) {
  const router = useRouter();
  const { toast } = useToast();

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

  const refreshPage = () => {
    router.refresh();
  };

  useEffect(() => {
    if (truedate.length === 0 && newdate) {
      toast({
        title: "Pas d'évènement ...",
        description: (
          <span className="flex gap-1 items-center">
            
            <img
              src="/Images/crosss.svg"
              alt="croix"
              className="w-6 h-6"
            />{" "}
            Aucun évènement n&apos;a été prévu pour ce
            <span className="font-bold">{date}</span>
          </span>
        ),
      });
    } else if (truedate.length !== 0 && newdate) {
      toast({
        title: "Ça bouge !",
        description: (
          <span className="flex gap-1 items-center">
            
            <img
              src="/Images/checkk.svg"
              alt="check"
              className="w-6 h-6"
            />
            {truedate.length} évènement{truedate.length == 1 ? "" : "s"} le
            <span className="font-bold">{date}</span>
          </span>
        ),
        action: <ToastAction altText="Ajouter" className="border-[#00ff59]" onClick={()=>toast({
          title: "La fonctionnalité arrive ...",
          description: (
            <span className="flex gap-1 items-center">
              
              <img
                src="/Images/timee.svg"
                alt="croix"
                className="w-6 h-6"
              />
              Ce n&apos;est qu&apos;une question de temps
            </span>
          ),
        })}>Me prévenir</ToastAction>,
      });
    }

    if (!newdate) {
      toast({
        variant: "destructive",
        title: "Evènements inaccessibles...",
        description:
          "Nous n'avons pas pu récupérer les données concernant les évènements.",
        action: (
          <ToastAction altText="Try again" onClick={refreshPage}>
            Réessayer
          </ToastAction>
        ),
      });
    }
  }, [date, newdate]);

  return (
    <div>
      <p className="text-white  rounded text-center">
        Emploi du temps pour le <span className="font-bold">{date}</span>{" "}
      </p>
      <Separator className="mt-2 w-[50%] mx-auto" />

      {truedate.length === 0 && (
        <motion.div
          className="mt-2"
          initial={{ opacity: 0, y: -20, scale: 1.2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
        >
          <Card className="rounded overflow-hidden w-full">
            <CardHeader className="p-0"></CardHeader>
            <CardContent className="p-1">
              <span className="text-sm flex items-center">
                <img src="/Images/crosss.svg" alt="" className="w-6 h-6" />
                <p>Il n&apos;y a pas d&apos;évènement aujourd&apos;hui</p>
              </span>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {truedate.map((date: any, index: number) => (
        <motion.div
          key={date._id}
          className="overflow-hidden mt-2 w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
        >
          <Card className="rounded">
            <CardHeader className="p-2 font-bold  ">{date.title}</CardHeader>

            <CardContent className="p-1">
              <span className="text-sm flex items-center">
                <Separator
                  className="h-6 w-[2px] rounded ml-2 bg-[#1A73E8]"
                  orientation="vertical"
                />
                <p className="ml-1 lg:w-[40ch]">{date.content}</p>
              </span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default CardCalendar2;
