import React from 'react'
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation";

import DateForm from '../(components)/DateForm';


async function page() {
    const session = await getServerSession(options);
    if (!session) {
        redirect("/");
      }

      const handleSubmit = ()=>{

      }
  return (
    <div>
        <DateForm/>
    </div>
  )
}

export default page