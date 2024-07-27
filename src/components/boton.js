
"use client";

import React from "react";

const ClientButton =( { text }) =>{
    const handleClick = ()=>{
        alert("Boton pulsado");  
    };
    return(
        <button className= "bg-green-500 text-white rounded-md text-sm w-20 sm:w-44 sm:text-2xl py-2 mx-2 hover:bg-slate-900 m-6 flex" 
        onClick= {handleClick}>{text}</button>);

};

export default ClientButton;

