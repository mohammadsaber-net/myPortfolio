"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa'

export default function Scroll() {
    const [hide,setHide]=useState(false)
    useEffect(()=>{
        const handleVisibility=()=>{
            if(window.scrollY>300)setHide(true)
            else setHide(false)
        }
        window.addEventListener("scroll",handleVisibility)
        return ()=>window.removeEventListener("scroll",handleVisibility)
    },[])
    const scrollToTop=()=>(
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    )
  return (
    <>
    {hide&&<div className='fixed flex flex-col w-fit h-fit gap-20 bottom-10 right-4 z-[10000000]'>
      <a
      href="https://wa.me/+201023966702" 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={scrollToTop} className=' cursor-pointer whats relative
      hover:text-white hover:bg-[#25D366] text-[#25D366] transition p-1 w-fit h-fit rounded-full'>
      <FaWhatsapp size={36}/>
    </a>
    <div onClick={scrollToTop} className='cursor-pointer
    hover:bg-blue-600 hover:text-white transition p-1 rounded-full'>
      <FaArrowUp size={36}/>
    </div>
    </div>}
    </>
  )
}
