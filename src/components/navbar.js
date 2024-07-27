
import React from "react";

import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    return (
    <div className="flex items-center bg-slate-400 ">
        <div className="mr-4"> 
            <Image
                src="/bandera.png"
                alt="logo"
                width={50}
                height={50}
            />

        </div> 

        <div className="flex space-x-10"> 
            <Link href="/">
            <p className="text-white hover:text-orange-500"> Inicio </p>
            </Link>
            <Link href="/about"> <p className="text-white hover:text-orange-500">Acerca de </p>
                </Link>
            <Link href="/contacto"> <p className="text-white hover:text-orange-500"> Contacto  </p>
              </Link>

        </div>

    </div>

);
};

export default Navbar;