"use client"
import { useApp } from "@/components/context/AppContext";
import { BlogsItem } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import {FaServer ,FaReact} from "react-icons/fa";
import {SiJavascript,SiTailwindcss,SiNextdotjs,SiMongodb,SiNodedotjs} from "react-icons/si";
const Icons:any={
  "SiNextdotjs":SiNextdotjs,
  "SiTailwindcss":SiTailwindcss,
  "SiNodedotjs":SiNodedotjs,
  "SiJavascript":SiJavascript,
  "SiMongodb":SiMongodb,
  "FaReact":FaReact,
  "FaServer":FaServer
}
export default function Blog({lang}:{lang:string}) {
  const app = useApp() as { Blogs?: BlogsItem } | null;
  const blog = app?.Blogs?.blogs ?? [];
  const mainTitle = app?.Blogs?.mainTitle ?? { title1: '', title2: ''};
  return (
    <div id="Blog" className='min-h-screen py-10 w-[90%] sm:w-[80%] lg:w-[80%] max-w-3xl mx-auto'>
        <h2 data-aos="zoom-out" className="text-xl sm:text-2xl md:text-3xl capitalize font-bold tracking-wide">
           {mainTitle.title1} <span className="text-cyan-500">{mainTitle.title2}</span>
        </h2>
        <div
        data-aos="slide-left" data-aos-anchor-placement="top-center" 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blog.map((item)=>{
            
            return(
              <div key={item.id} className="overflow-hidden p-2 bg-gray-200 dark:bg-[#0f142ed9] rounded-md shadow-md hover:shadow-lg transition">
                <Image width={500} height={500} src={item.image} className="object-cover" alt="image"/>
                <span className="text-gray-500 text-sm">13 nov 2025</span>
                <Link href={`${lang}/blog/${item.id}`} className="text-base sm:text-xl transition hover:text-cyan-600
                 hover:underline block capitalize mt-2 mb-4 cursor-pointer
                ">{item.title}</Link>
                  <div className="flex gap-2 flex-wrap">
                {item.keyWords.map((icon:any) => {
                  const Icon = Icons[icon.Icon]
                  return(
                    <div key={icon.name} className="p-1 items-center rounded-sm dark:bg-[#0d0d1f] flex gap-1 bg-indigo-400 text-white">
                      <Icon className=" size-5"/>
                      <span>{icon.name}</span>
                    </div>
                  )})}
                  </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}
