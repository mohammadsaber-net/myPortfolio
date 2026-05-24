"use client"
import { FaCode } from 'react-icons/fa'
import MainNav from './MainNav'
import { BiDownload } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import Mobile from './Mobile'
import { MenuIcon } from 'lucide-react'

export default function Responsive({dict,lang}:{lang:string;dict:any}) {
  const [navBg,setNavBg]=useState(false)
  const [opeMobile,setOpenMobile]=useState(false)
  useEffect(()=>{
    const handler=()=>{
      if(window.scrollY>=80)setNavBg(true)
      if(window.scrollY<80)setNavBg(false)
    }
    window.addEventListener("scroll",handler)
    return()=>window.removeEventListener("scroll",handler)
  },[])
  return (
    <header
      className={`transition h-[8vh] md:h-[12vh]
      ${navBg
        ? "bg-gray-200/60 dark:bg-[#0f142e]/80"
        : "bg-gray-100/80 dark:bg-[#0d0d1f]/80"}
      px-6 shadow-md w-full z-40 flex justify-between
      backdrop-blur-sm items-center fixed top-0`}
    >
      <div className='flex gap-2 cursor-pointer items-center'>
        
        <span className='p-1 rounded-full bg-white text-[#0d0d1f]'>
            <FaCode size={20}/>
        </span>
        <span className='text-sm md:text-lg'>
            {dict.nav["logo"]}
        </span>
      </div>
      <MainNav />
      <a download={"/Muhammad_FullStack_CV.pdf"} href='/images/Muhammad_FullStack_CV.pdf' className='flex space-x-4 items-center'>
        <button className='cursor-pointer transition text-sm sm:text-xl text-white bg-blue-600 hover:bg-blue-700 
        flex items-center gap-2 rounded-lg p-2
        '>
          {lang==="en"&&<BiDownload />}
          {dict.nav["download"]}
          {lang==="ar"&&<BiDownload />}
        </button>
      </a>
      <MenuIcon onClick={()=>setOpenMobile(true)} className='md:hidden block cursor-pointer'/>
      <Mobile openMobile={opeMobile} setOpenMobile={setOpenMobile}/>
    </header>
  )
}
