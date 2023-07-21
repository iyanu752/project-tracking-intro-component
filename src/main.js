import React from "react";
import Illustration from "./images/illustration-devices.svg";


function Main () {
    return (
        <div className= " lg:pb-32 overflow-hidden">
            <main className="  lg:flex flex-row-reverse items-center">

                <section className=" relative left-28 top-32 lg:left-52 lg:top-20 ">
                    <img src= {Illustration} alt="illustration " />
                </section>
                
                <section className=" lg:pl-52 mt-32 text-left p-5">
                    <p className=" font-barlow-con text-blue-200 mb-5 tracking-widest"><span className="bg-blue-400 text-white pt-1 pb-1 pl-2 pr-2 rounded-full font-normal font-barlow">NEW</span> MONOGRAPH DASHBOARD</p>
                    <h1 className="text-5xl font-barlow-con font-bold text-blue-400 mb-5"> POWERFUL INSIGHTS INTO YOUR TEAM </h1>
                    <p className=" font-barlow font-normal text-blue-300 mb-10"> Project planning and time tracking for agile teams</p>
                    <button className="bg-red p-3 rounded-md font-bold text-white hover:bg-rose-400 "> SCHEDULE A DEMO </button>   <span className=" ml-2 text-blue-200 font-barlow font-normal"> TO SEE A PREVIEW </span>
                </section>

            </main>

        </div>
        
    );
}

export default Main;