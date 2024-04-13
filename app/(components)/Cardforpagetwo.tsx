import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Cardforpagetwo() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl lg:text-3xl flex justify-center lg:justify-start">
            <div className="flex gap-4 items-center">
              <div className="pulse relative">
                <span className="span1"></span>
                <span className="span2"></span>
              </div>
              <p>En cours</p>
            </div>
          </CardTitle>
          <CardDescription className="flex justify-center lg:justify-start">Elargissement des adhésions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-justify">
            Après avoir créé leur association et de s&apos;être réunie en
            Assemblée Générale début 2024, la première action majeure décidée
            est d&apos;élargir les adhésions à AHG aux habitants de tous les
            quartiers du Plessis Robinson, aux propriétaires et locataires qui
            souhaiteraient nous manifester leur soutien. A cette fin, il est
            possible de télécharger en ligne le bulletin d&apos;adhésion, de
            faire un don dans une cagnotte Lytchee et de signer notre pétition.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl lg:text-3xl flex justify-center lg:justify-start">
            <div className="flex gap-4 items-center">
              <img src="/Images/sablier.svg" alt="" className="h-[30px] w-[30px] sablierr" />
              <p>A venir</p>
            </div>
          </CardTitle>
          <CardDescription className="flex justify-center lg:justify-start">
            Contestation, Recours administratif, Tractations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-justify">
            AHG prévoit de contester le PLUi lors de l&apos;enquête publique. Le
            cas échéant, elle établira un recours administratif. Elle prévoit
            également de tracter dans les espaces publiques, en sortie des
            marchés, etc… et d&apos;utiliser tout levier qui lui permettrait de
            mobiliser l&apos;opinion.
          </p>
        </CardContent>
      </Card>
    </>
  );
}

export default Cardforpagetwo;
