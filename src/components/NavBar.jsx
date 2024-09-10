import React from "react"
import { Link } from "react-router-dom";
const NavBar = () => {

    return (
        <>
        <div className="absolute flex inset-x-0 z-50   text-white bg-gray-900 left-[276px] p-4">
            <nav className="flex justify-between w-full">
                <ul className="flex w-full gap-4 text-center justify-">
                    <Link>Inicio</Link>
                    <Link></Link>
                    <Link>Primero</Link>
                    <Link>Primero</Link>
                </ul>
                <div>
                    <img src="" alt="avatar" />
                </div>
            </nav>
        </div>
        </>
    )
}

export default NavBar;