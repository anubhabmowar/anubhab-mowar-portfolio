import React from "react";
import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.jpg";
import {motion} from "framer-motion"
const Hero = () => {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = 'src/assets/AnubhabMowarResume.pdf';
    link.download = 'AnubhabMowarResume.pdf';
    link.click();
  }; 
  const container =(delay)=>({ 
  hidden: { opacity: 0,x:-100 },
  visible: {
    opacity: 1,
    x:0,
    transition: {
      duration: 0.5,
      delay:delay
    }
  }
 });
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center pl-6 pr-6 lg:items-start ">
            <motion.h1 
            initial="hidden"
            animate="visible"
            variants={container(0)}
            className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16">
              Anubhab Mowar
            </motion.h1>
            <motion.span
            initial="hidden"
            animate="visible"
            variants={container(0.5)}
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-4xl tracking-tight text-transparent bg-clip-text">
              Full Stack Developer
            </motion.span>
            <motion.p 
            initial="hidden"
            animate="visible"
            variants={container(1)}
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
              </motion.p>
              <motion.div
              initial="hidden"
              animate="visible"
              variants={container(1.5)}
              className=" mb-6">
          <div className="group relative w-fit transition-transform duration-300 active:scale-95"><button onClick={downloadFile} className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110"><span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">Resume</span></button><span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50"></span>
          </div>
          </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center  mt-4 h-[400px]">
            <motion.img
            initial={{
              opacity: 0,
              x:100
            }}
            animate={{
              opacity: 1,
              x:0
            }}
            transition={{
              duration: 1,
              delay:1.2
            }}
            src={profile} alt="Anubhab Mowar" className="rounded-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
