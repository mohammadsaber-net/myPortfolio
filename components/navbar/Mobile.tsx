"use client"
import Link from 'next/link'
import { X } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { NavItem } from '@/interface'

type Props = {
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>
  openMobile: boolean
}

export default function Mobile({setOpenMobile,openMobile}:Props) {
  const app = useApp() as { Nav?: NavItem[] } | null;
    const Nav = app?.Nav ?? [];
  return (
    // "opacity-100" : "opacity-0 pointer-events-none"
    <div
      className={`fixed md:hidden inset-0 right-0 bg-black/50 z-50 transform transition-transform duration-300
      ${openMobile ? "translate-x-0" : "translate-x-full"}`}
      onClick={()=> setOpenMobile(false)}
    >
      <div
        onClick={(e)=>e.stopPropagation()}
        className={`fixed top-0 right-0 h-screen w-[80%] bg-cyan-800 text-white flex flex-col justify-center items-center gap-6
        transform transition-transform duration-500 delay-300
        ${openMobile ? "translate-x-0" : "translate-x-full"}`}
      >
        {Nav.map(navLink => (
          <Link
            key={navLink.id}
            href={navLink.url}
            className="text-2xl sm:text-4xl border-b pb-1 border-white"
            onClick={() => setOpenMobile(false)}
          >
            {navLink.label}
          </Link>
        ))}

        <X onClick={()=>setOpenMobile(false)} className="absolute top-2 left-2 cursor-pointer" />
      </div>
    </div>
  )
}


