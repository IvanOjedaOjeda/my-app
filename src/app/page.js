
import React from "react";
import ClientButton from "@/components/boton";
import DateDisplay from "@/components/date";

export default function Home() {
  return (
    <div className="bg-white mx-auto h-screen w-screen ">
      <h1 className="text-center text-black text-2xl">Hola Mundo</h1>
      <p className="text-right text-lime-300 mx-10 font-bold"> Este es un proyecto de de Next.js</p>

<div className="flex justify-center">
  <ClientButton text= "boton" />
  
  <DateDisplay />
  

</div>

    </div>
    
  );
}
