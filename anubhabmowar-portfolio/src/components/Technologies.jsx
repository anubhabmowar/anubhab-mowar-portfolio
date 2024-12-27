import React from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap justify-center items-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact className='text-4xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-4xl text-white' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoMongodb className='text-4xl text-[#4db33d]' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-4xl ' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-4xl text-[#3c873a]' />
            </div> 
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-4xl text-[#3c873a]' />
            </div> 
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-4xl text-[#3c873a]' />
            </div> 
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-4xl text-[#3c873a]' />
            </div> 
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-4xl text-[#3c873a]' />
            </div>   
            
        </div>
    </div>
  )
}

export default Technologies