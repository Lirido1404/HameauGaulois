"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <h1 className="text-center text-2xl font-bold text-[#ffffff]">
        Association <br />
        <div className="flex justify-center gap-2">
          <motion.p
            initial={{ x: "-100%", opacity: 0 }} // Position initiale
            animate={{ x: 0, opacity: 1 }} // Position finale
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="text-4xl" // Transition de type ressort avec une rigidité et un amortissement plus élevés
          >
            Hameau
          </motion.p>
          <motion.p
            initial={{ x: "100%", opacity: 0 }} // Position initiale
            animate={{ x: 0, opacity: 1 }} // Position finale
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="text-4xl" // Transition de type ressort avec une rigidité et un amortissement plus élevés
          >
            Gaulois
          </motion.p>
        </div>
        (AHG)
      </h1>
      <div className="flex justify-center w-full lg:gap-60">
      <Image
          src={"/Images/gaulois621.png"}
          alt="Gaulois"
          width={180}
          height={100}
          className="xl:ml-80"
        />
        <Image
          src={"/Images/gaulois2.png"}
          alt="Gaulois"
          width={220}
          height={200}
          className="xl:mr-80"
        />
        
      </div>
    </div>
  );
}
