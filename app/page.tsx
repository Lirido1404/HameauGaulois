import Image from "next/image";
import Titre from "./(components)/Titre";
import Texte1 from "./(components)/Texte1";

export default function Home() {
  return (
    <div className="mt-20">
      <Titre />

      <p className="text-white text-center">
        L&apos;association Hameau Gaulois est une association Loi 1901 créée
        l&apos;été 2023 par des habitants du quartier du Hameau au Plessis
        Robinson (92) en vue de défendre leur quartier.
      </p>
      <h2
        className="text-center text-white font-bold text-2xl mt-12 lg:text-6xl"
        id="pres"
      >
        Présentation
      </h2>
      <div className="flex flex-col gap-2 lg:flex-row mt-10 justify-center w-[70%] mx-auto">
        <div className="flex justify-end items-end">
          <p className="text-white text-justify p-2">
            Le quartier du Hameau est un quartier centenaire du Sud Parisien
            dont vous trouverez ici,
            <a
              href="https://fr.wikipedia.org/wiki/Le_Plessis-Robinson"
              className="text-purple-500 underline"
            >
              son histoire
            </a>
            . Le tracé du Tramway T10 le sépare en deux parties. La pointe du
            quartier, qui se trouve à l&apos;Ouest du T10 est en danger de
            disparition. Pour notre quartier c&apos;est une question
            existentielle. En effet, sous l&apos;impulsion de la Mairie du
            Plessis Robinson, l&apos;agglomération de communes Vallée Sud Grand
            Paris (VSGP) a publié un projet début 2024 de plan de zonage pour le
            futur PLUi.
          </p>
        </div>

        <img
          src={"/Images/mapsh.jpg"}
          alt="Gaulois"
          className="w-[50%] border-white p-2 lg:border-b-4 lg:border-l-4 rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-2 lg:flex-row mt-18 justify-center w-[70%] mx-auto">
        <img
          src={"/Images/AvRue.jpg"}
          alt="Gaulois"
          className="w-[50%] lg:border-t-4 lg:border-r-4 border-white p-2 rounded-lg"
        />
        <p className="text-white text-justify p-2">
          En particulier, le projet de PLUi prévoit de faire construire des
          bâtiments collectifs de logements (bâtiments d&apos;appartements) de 5
          niveaux, après avoir rasé le quartier. Hors, ce projet va à
          l&apos;encontre des objectifs affichés de VSGP, qui avait annoncé
          défendre les zones pavillonnaires, lesquelles participent au
          foisonnement écologique de l&apos;agglomération. Alors que notre
          quartier apparaissait initialement en tant que “Zone Pavillonnaire”
          dans le plan de zonage de notre ville, il apparaît soudainement comme
          une “zone de projet” dans le plan de zonage du projet de VSGP.
        </p>
      </div>

      <div>
        <Texte1 />
      </div>
      <h2
        className="text-center text-white font-bold text-2xl mt-12 lg:text-6xl"
        id="objectifs"
      >
        Objectifs
      </h2>

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
          <img
            src={"/Images/meeting.svg"}
            alt="Gaulois"
            className="h-12 w-12"
          />
        </div>
        <div className="rond r6" data-anim="6">
          <img
            src={"/Images/searchhh.svg"}
            alt="Gaulois"
            className="h-12 w-12"
          />
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
            distribue aux habitants du quartier une lettre écrite, leur
            confirmant qu&apos;il tiendrait ses promesses faites en 2012.
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
            Selon les informations dont nous disposons et qui restent à
            vérifier, la mairie demande à VSGP de transformer notre quartier
            pavillonnaire en quartier d&apos;habitation collective.
          </p>
        </div>

        <div className="box b5" data-anim="5">
          <h2>09 / 03 / 2023</h2>
          <p>
            Le maire réunit le quartier et informe avoir enclenché la
            transformation du quartier. Cette réunion a été le point de départ
            de la volonté de la majorité des habitants du quartier de se
            mobiliser.
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

      <h2
        className="text-center text-white font-bold text-2xl mt-12 lg:text-6xl"
        id="historique"
      >
        Historique
      </h2>

      <div className="w-[70%] mx-auto mt-10">
        <p className="text-white text-justify">
          Avant de s&apos;appeler Plessis Robinson, notre ville s&apos;appelait Plessis
          Picquet. Au 19ème siècle, notre quartier n&apos;existait pas. Il n&apos;y avait
          que des champs et des prés. Seul existait à proximité le cimetière qui
          est toujours ici de nos jours. <br /> <br /> Le concept de cité-jardin qui associe
          habitat et jardins, apparaît au Plessis Robinson dans les années 1930.
          Notre quartier était alors un petit îlot détaché de la petite ville du
          Plessis Robinson, d&apos;où son nom de Hameau. Il n&apos;est sorti de son
          isolement que pendant les années 1960, après que les nombreux prés et
          champs ont disparus, en particulier à l&apos;avantage de la construction de
          nombreux équipements municipaux. <br /> <br /> Notre quartier a émergé entre les
          années 1900 et 1930, il est donc centenaire. C&apos;est un quartier où la
          vie puise encore sa source dans les histoires familiales. Une dame de
          95 ans est là, juste à côté de la maison où elle est née laquelle,
          elle aussi, est toujours là. Une vieille dame est toujours
          propriétaire de la maison que son grand père a construit de ses mains. <br /> <br />
          2 belles-soeurs, toutes deux ayant passé les 90 ans, habitent toujours
          dans leurs maisons respectives au sein du même quartier. Un jeune
          homme a reçu en héritage la maison de son père, y habite et compte
          bien rester dans l&apos;héritage familial jusqu&apos;à trépas. <br /> <br /> Il n&apos;y a que 40
          familles dans le quartier, mais son passé est si riche qu&apos;il y aurait
          de quoi écrire des livres sur celui-ci. Il recèle de nombreuses et
          belles histoire de familles comme on les voit dans nos villages de
          France.
        </p>
      </div>
    </div>
  );
}
