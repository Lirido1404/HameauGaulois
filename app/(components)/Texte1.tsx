"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

function Texte1() {
  const [voirPlus, setVoirPlus] = useState(false);

  return (
    <>
      <div className="flex justify-center mt-4">
      <Button variant={"secondary"} onClick={()=>setVoirPlus(!voirPlus)} className="px-4">Voir {voirPlus ? "moins" : "plus"}</Button>
      </div>
      <AnimatePresence>
        {voirPlus && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.75 }}
          >
            
              <p className="text-white text-justify mt-4 mx-auto w-[70%]">  Les habitants du
              quartiers ont donc décidé de se mobiliser afin de contrer le projet de
              zonage les concernant. A défaut de succès, ils n&apos;auront
              d&apos;autres choix que de supporter la présence de bâtiments collectifs
              touchant leur maison ou de partir de leur havre de paix construit par
              eux même ou leurs ainés. Cette démarche, relevant souvent de la lutte
              entre un pot de terre et un pot de fer, par ce site internet
              l&apos;association Hameau Gaulois tente désespérément de faire connaître
              son calvaire et de trouver du soutien, auprès des habitants du Plessis
              ou d&apos;ailleurs, qu&apos;ils soient propriétaires ou locataires.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Texte1;
