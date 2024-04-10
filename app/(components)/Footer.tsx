import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full p-6 bg-white mt-20">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="flex justify-between items-center">
        <div className="italic">
          <p>HameauGaulois@gmail.com</p>
          <p>06 05 04 03 02 </p>
        </div>
        <div className="flex gap-2 mr-20">
          <div className="w-12 h-12 rounded-lg border-2 border-blue-500"></div>
          <div className="w-12 h-12 rounded-lg border-2 border-blue-500"></div>
        </div>
      </div>
      <Link
        href={"https://spontaneous-entremet-f15b4a.netlify.app/"}
        className="flex justify-center italic text-sm"
      >
        Réalisé par Maxime Prévot - tous droits réservés{" "}
        <span className="text-xl">®</span>
      </Link>
    </div>
  );
}

export default Footer;
