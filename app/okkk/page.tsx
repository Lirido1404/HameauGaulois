import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function page() {
  return (
    <div className="w-full mx-auto h-[100vh] bg-white">
      <div className="w-[50%] mx-auto">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {" "}
              <p className="text-2xl font-bold">A la maison</p>{" "}
            </AccordionTrigger>
            <AccordionContent>
              Télétravaillez avec tous les outils de votre lieu de travail et
              dans le confort de votre domicile. En connexion Wifi ou Ethernet,
              votre poste s&apos;adapte à vos équipements !
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {" "}
              <p className="text-2xl font-bold">En réunion</p>{" "}
            </AccordionTrigger>
            <AccordionContent>
              En mode sans connexion ou connecté au wifi, restez à jour, prenez
              des notes et consultez les documents ou courriels correspondant au
              sujet abordé.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {" "}
              <p className="text-2xl font-bold">En déplacement</p>{" "}
            </AccordionTrigger>
            <AccordionContent>
              Besoin de finir la rédaction d&apos;un document ou d&apos;un
              courriel dans les transports ? En partage de connexion avec votre
              mobile ou sans connexion, Noémi s&apos;adapte à toutes les
              situations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              {" "}
              <p className="text-2xl font-bold">Sur le terrain</p>{" "}
            </AccordionTrigger>
            <AccordionContent>
              Avec la carte 4G en option, profitez de tous vos applicatifs
              partout sur le territoire et restez connecté et productif où que
              vous soyez.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default page;
