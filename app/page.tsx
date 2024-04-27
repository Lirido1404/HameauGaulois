import Image from "next/image";
import Texte1 from "./(components)/Texte1";
import Titre2 from "./(components)/Titre2";
import Commentaires from "./(components)/Commentaires";
import PhotoParticipants from "./(components)/PhotoParticipants";
import Vid2 from "./(components)/Vid2";
import Img1 from "./(components)/Img1";
import Img2 from "./(components)/Img2";
import Img3 from "./(components)/Img3";
import TimeLine2 from "./(components)/TimeLine2";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import ScrollAreaComm from "./(components)/ScrollAreaComm";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <div className="mt-20">
      <Titre2 />

      <div className="w-[70%] mx-auto">
        <ScrollAreaComm />
      </div>
      <h2
        className="w-[70%] mx-auto text-white font-bold text-2xl mt-24 lg:text-5xl text-center lg:text-left"
        id="pres"
      >
        Présentation
      </h2>
      <div className="flex flex-col gap-0 lg:flex-row mt-8 lg:mt-20 justify-center w-[70%] mx-auto">
        <div className="flex justify-center items-center w-[50%]">
          <p className="text-white text-justify px-16 py-2 ">
            Le quartier du Hameau est un quartier centenaire du Sud Parisien
            dont vous trouverez ici,
            <a
              href="https://fr.wikipedia.org/wiki/Le_Plessis-Robinson"
              className="text-purple-500 underline"
            >
              son histoire.
            </a>
            <br />
            <br />
            Le tracé du Tramway T10 le sépare en deux parties. La pointe du
            quartier, qui se trouve à l&apos;Ouest du T10 est en danger de
            disparition. Pour notre quartier c&apos;est une question
            existentielle. <br /> <br /> En effet, sous l&apos;impulsion de la
            Mairie du Plessis Robinson, l&apos;agglomération de communes Vallée
            Sud Grand Paris (VSGP) a publié un projet début 2024 de plan de
            zonage pour le futur PLUi.
          </p>
        </div>

        <Img2 />
      </div>

      <div className="flex flex-col gap-2 lg:flex-row mt-8 lg:mt-0 justify-center w-[70%] mx-auto">
        <Img3 />
        <div className="flex justify-center items-center w-[50%]">
          <p className="text-white text-justify px-16 py-2 ">
            En particulier, le projet de PLUi prévoit de faire construire des
            bâtiments collectifs de logements (bâtiments d&apos;appartements) de
            5 niveaux, après avoir rasé le quartier. <br />
            <br /> Hors, ce projet va à l&apos;encontre des objectifs affichés
            de VSGP, qui avait annoncé défendre les zones pavillonnaires,
            lesquelles participent au foisonnement écologique de
            l&apos;agglomération. <br />
            <br /> Alors que notre quartier apparaissait initialement en tant
            que “Zone Pavillonnaire” dans le plan de zonage de notre ville, il
            apparaît soudainement comme une “zone de projet” dans le plan de
            zonage du projet de VSGP.
          </p>
        </div>
      </div>

      <div>
        <Texte1 />
      </div>
      <h2
        className="w-[70%] mx-auto text-white font-bold text-2xl mt-24 lg:text-5xl text-center lg:text-left "
        id="objectifs"
      >
        Objectifs
      </h2>

      <div className="w-[70%] mx-auto">
        <Link href={"/Participation"} className="flex justify-start">
          <button className="text-white text-xl bg-[#1A73E8] px-8 py-2 rounded border-1 border-[#EDEDED] mt-6 hover:bg-[#185ABC] ease-in-out duration-100 shadow">
            Voir les évènements proches
          </button>
        </Link>
      </div>

      <div className="mt-20">
        <TimeLine2 />
      </div>
      <PhotoParticipants />

      <h2
        className="w-[70%] mx-auto text-white font-bold text-2xl mt-24 lg:text-5xl text-center lg:text-left "
        id="historique"
      >
        Historique
      </h2>

      <div className="flex flex-col gap-0 lg:flex-row mt-8 lg:mt-20 justify-center w-[70%] mx-auto">
        <div className="w-[50%] flex justify-end lg:border-b-4 lg:border-r-4 border-white p-1 rounded-lg ">
          <Vid2 />
        </div>
        <div className="flex justify-center items-center w-[50%]">
          <p className="text-white text-justify px-16 py-10 ">
            Avant de s&apos;appeler Plessis Robinson, notre ville
            s&apos;appelait Plessis Picquet. Au 19ème siècle, notre quartier
            n&apos;existait pas. Il n&apos;y avait que des champs et des prés.
            Seul existait à proximité le cimetière qui est toujours ici de nos
            jours. <br /> <br /> Le concept de cité-jardin qui associe habitat
            et jardins, apparaît au Plessis Robinson dans les années 1930. Notre
            quartier était alors un petit îlot détaché de la petite ville du
            Plessis Robinson, d&apos;où son nom de Hameau. Il n&apos;est sorti
            de son isolement que pendant les années 1960, après que les nombreux
            prés et champs ont disparus, en particulier à l&apos;avantage de la
            construction de nombreux équipements municipaux. <br /> <br /> Notre
            quartier a émergé entre les années 1900 et 1930, il est donc
            centenaire. C&apos;est un quartier où la vie puise encore sa source
            dans les histoires familiales. Une dame de 95 ans est là, juste à
            côté de la maison où elle est née laquelle, elle aussi, est toujours
            là.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 lg:flex-row mt-8 lg:mt-0 justify-center w-[70%] mx-auto">
        <div className="flex justify-center items-center w-[50%]">
          <p className="text-white text-justify px-16 py-2 ">
            Une vieille dame est toujours propriétaire de la maison que son
            grand père a construit de ses mains. <br /> <br />
            2 belles-soeurs, toutes deux ayant passé les 90 ans, habitent
            toujours dans leurs maisons respectives au sein du même quartier. Un
            jeune homme a reçu en héritage la maison de son père, y habite et
            compte bien rester dans l&apos;héritage familial jusqu&apos;à
            trépas. <br /> <br /> Il n&apos;y a que 40 familles dans le
            quartier, mais son passé est si riche qu&apos;il y aurait de quoi
            écrire des livres sur celui-ci. Il recèle de nombreuses et belles
            histoire de familles comme on les voit dans nos villages de France.
          </p>
        </div>
        <Img1 />
      </div>
      <Link href={"/Participation"} className="flex justify-center mt-10">
        <button className="text-white text-xl bg-[#1A73E8] px-8 py-2 rounded border-1 border-[#EDEDED] mt-6 hover:bg-[#185ABC] ease-in-out duration-100 shadow">
          Page de présentation des actions
        </button>
      </Link>
    </div>
  );
}
