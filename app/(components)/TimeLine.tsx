import React from "react";

function TimeLine() {
  return (
    <div className="box-timeline">
      <div className="ligne"></div>

        <div className="rond r1" data-anim="1">
        <img src={"/Images/carton.svg"} alt="Gaulois" className="h-12 w-12" />
      </div>
      <div className="rond r2 " data-anim="2">
        <img src={"/Images/man1.svg"} alt="Gaulois" className="h-12 w-12" />
      </div>
      <div className="rond r3" data-anim="3">
        <img src={"/Images/mapp.svg"} alt="Gaulois" className="h-12 w-12" />
      </div>
      <div className="rond r4" data-anim="4">
        <img src={"/Images/cityyy.svg"} alt="Gaulois" className="h-12 w-12" />
      </div>
      <div className="rond r5" data-anim="5">
        <img src={"/Images/meeting.svg"} alt="Gaulois" className="h-12 w-12" />
      </div>
      <div className="rond r6" data-anim="6">
        <img src={"/Images/searchhh.svg"} alt="Gaulois" className="h-12 w-12" />
      </div>

      <div className="box b1" data-anim="1">
        <h2>23 / 03 / 2012</h2>
        <p>
          Le quartier du Hameau avait unanimement repoussé un projet de la
          Mairie de transformer le quartier en zone d&apos;habitation
          collective. A cette époque, le maire avait bien voulu se résoudre à
          “remettre son projet dans les cartons” en précisant qu&apos;il
          n&apos;inclurait pas le quartier dans le futur projet de la zone
          NOVEOS.
        </p>
      </div>

      <div className="box b2" data-anim="2">
        <h2>19 / 03 / 2014</h2>
        <p>
          4 jours avant le premier tour des élections municipales, le Maire
          distribue aux habitants du quartier une lettre écrite, leur confirmant
          qu&apos;il tiendrait ses promesses faites en 2012.
        </p>
      </div>

      <div className="box b3" data-anim="3">
        <h2>17 / 12 / 05</h2>
        <p>
          La mairie inclut notre quartier dans l&apos;OAP NOVEOS sans modifier
          le plan de zonage.
        </p>
      </div>

      <div className="box b4" data-anim="4">
        <h2>Septembre 2022</h2>
        <p>
          Selon les informations dont nous disposons et qui restent à vérifier,
          la mairie demande à VSGP de transformer notre quartier pavillonnaire
          en quartier d&apos;habitation collective.
        </p>
      </div>

      <div className="box b5" data-anim="5">
        <h2>09 / 03 / 2023</h2>
        <p>
          Le maire réunit le quartier et informe avoir enclenché la
          transformation du quartier. Cette réunion a été le point de départ de
          la volonté de la majorité des habitants du quartier de se mobiliser.
        </p>
      </div>

      <div className="box b6" data-anim="6">
        <h2>2024</h2>
        <p>
          Une enquête publique va avoir lieu en 2024 pour valider le PLUi de
          Vallée Sud Grand Paris et de son nouveau plan de zonage.
        </p>
      </div>
    </div>
  );
}

export default TimeLine;
