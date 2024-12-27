import React from "react";
import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center pl-6 lg:items-start ">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16">Anubhab Mowar</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-4xl tracking-tight text-transparent bg-clip-text">Full Stack Developer</span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center  mt-4 h-[400px]">
            <img src={profile} alt="Anubhab Mowar" className="rounded-full " />
        </div>
      </div>
    </div> 
    </div>
  );
};

export default Hero;
