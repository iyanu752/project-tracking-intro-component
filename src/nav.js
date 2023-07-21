import React from "react";
import Logo from "./images/logo.svg";
import menu from "./images/icon-hamburger.svg";
import { useState } from "react";


function Navbar () {

    const [dropdown, Setdropdown] = useState (false);

    const dropMenu = () => {
        Setdropdown (!dropdown);
    };

    return ( 

        
        
        <header className="p-10">
        <div 
        className="bg-blue-100 rounded-bl-xl absolute right-0 top-0 w-2/4 h-2/4 z-0">
            
        </div>    
            <nav className="flex items-center relative">
                <img src = {Logo}  alt="logo" className=" lg:pl-40"/>
                
                <img src= {menu} alt="menu"  className=" lg:ml-auto cursor-pointer md:hidden   ml-60" onClick={dropMenu}/>                

                { dropdown && (
                    <div className="relative right-72 top-36 text-center bg-white pl-28 pr-28 pt-8 pb-8 shadow-xl leading-9 lg:hidden ">
                        <ul>
                            <li className=" font-barlow font-bold text-blue-400">PRODUCT</li>
                            <li className="font-barlow font-bold text-blue-400"> FEATURES</li>
                            <li className="font-barlow font-bold text-blue-400 ">PRICING</li>
                            <div className=" border-t-2 border-blue-400 w-full"></div>
                            <li className=" font-barlow font-bold text-blue-200">LOGIN</li>
                        </ul>
                    </div>
                )}
                

                <ul
                 className=" lg:flex gap-12 ml-auto hidden md:flex"
                 >
                    <li className="font-bold text-blue-400 cursor-pointer hover:underline">PRODUCT</li>
                    <li className="font-bold text-blue-400 cursor-pointer hover:underline">FEATURES</li>
                    <li className="font-bold text-blue-400 cursor-pointer hover:underline">PRICING</li>
                    <li> <span className=" font-barlow-con font-bold text-blue-200 hover:underline">.</span> </li>
                    <li className=" font-bold text-blue-200 cursor-pointer hover:hover:underline"> LOGIN </li>
                </ul>
                
            </nav>
        </header>
    );
}

export default Navbar;