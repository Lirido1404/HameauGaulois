"use client";
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

function TimeLine2() {
  return (
    <div className="timeline flex justify-center">
      <div className="outer">
        <div className="card">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6,delay:0.5 }}
            className="info"
          >
            <div className="flex justify-between items-center">
              <h3 className="title p-4">23 / 03 / 2012</h3>
              <img
                src={"/Images/carton.svg"}
                alt="Gaulois"
                className="h-12 w-12 mr-2"
              />
            </div>
            <Separator />

            <p className="p-4">
              Le quartier du Hameau avait unanimement repoussé un projet de la
              Mairie de transformer le quartier en zone d&apos;habitation
              collective. A cette époque, le maire avait bien voulu se résoudre
              à “remettre son projet dans les cartons” en précisant qu&apos;il
              n&apos;inclurait pas le quartier dans le futur projet de la zone
              NOVEOS.
            </p>
          </motion.div>
        </div>
        <div className="card">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6,delay:0.5 }}
            className="info"
          >
            <div className="flex justify-between items-center">
              <h3 className="title p-4">19 / 03 / 2014</h3>
              <img
                src={"/Images/man1.svg"}
                alt="Gaulois"
                className="h-12 w-12"
              />
            </div>
            <Separator />

            <p className="p-4">
              4 jours avant le premier tour des élections municipales, le Maire
              distribue aux habitants du quartier une lettre écrite, leur
              confirmant qu&apos;il tiendrait ses promesses faites en 2012.
            </p>
          </motion.div>{" "}
        </div>
        <div className="card">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6,delay:0.5 }}
            className="info"
          >
            <div className="flex justify-between items-center">
              <h3 className="title p-4">17 / 12 / 05</h3>
              <img
                src={"/Images/mapp.svg"}
                alt="Gaulois"
                className="h-12 w-12"
              />
            </div>
            <Separator />

            <p className="p-4">
              La mairie inclut notre quartier dans l&apos;OAP NOVEOS sans
              modifier le plan de zonage.
            </p>
          </motion.div>{" "}
        </div>
        <div className="card">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6,delay:0.5 }}
            className="info"
          >
            <div className="flex justify-between items-center">
              <h3 className="title p-4">Septembre 2022</h3>
              <img
                src={"/Images/cityyy.svg"}
                alt="Gaulois"
                className="h-12 w-12"
              />
            </div>{" "}
            <Separator />
            <p className="p-4">
              Selon les informations dont nous disposons et qui restent à
              vérifier, la mairie demande à VSGP de transformer notre quartier
              pavillonnaire en quartier d&apos;habitation collective.
            </p>
          </motion.div>{" "}
        </div>
        <div className="card">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6,delay:0.5 }}
            className="info"
          >
            <div className="flex justify-between items-center">
              <h3 className="title p-4">09 / 03 / 2023</h3>
              <img
                src={"/Images/meeting.svg"}
                alt="Gaulois"
                className="h-12 w-12"
              />
            </div>{" "}
            <Separator />
            <p className="p-4">
              Le maire réunit le quartier et informe avoir enclenché la
              transformation du quartier. Cette réunion a été le point de départ
              de la volonté de la majorité des habitants du quartier de se
              mobiliser.
            </p>
          </motion.div>{" "}
        </div>
        <div className="card">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6,delay:0.5 }}
            className="info"
          >
            <div className="flex justify-between items-center">
              <h3 className="title p-4">2024</h3>
              <img
                src={"/Images/searchhh.svg"}
                alt="Gaulois"
                className="h-12 w-12"
              />
            </div>{" "}
            <Separator />
            <p className="p-4">
              Une enquête publique va avoir lieu en 2024 pour valider le PLUi de
              Vallée Sud Grand Paris et de son nouveau plan de zonage.
            </p>
          </motion.div>{" "}
        </div>
      </div>
    </div>
  );
}

export default TimeLine2;
