import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import CardCalendar2 from "./CardCalendar2";
import {fetchDates} from "../api/Date/route";

async function CardCalendar() {
  const datess = await fetchDates();
  const newdate = JSON.parse(JSON.stringify(datess));

  return (
    <>
      <CardCalendar2 newdate={newdate} />
    </>
  );
}

export default CardCalendar;
