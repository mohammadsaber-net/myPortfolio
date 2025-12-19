"use client"
import { ProjectItem } from "@/interface";
import { Link2 } from "lucide-react";
import Link from 'next/link'
import { useApp } from "../context/AppContext";
import { FaReact,FaBootstrap,FaHtml5,FaGithub,FaCss3Alt } from "react-icons/fa";
import {SiJavascript,SiTypescript,SiTailwindcss,SiRedux,SiNextdotjs,SiVercel,SiRender,SiMongodb} from "react-icons/si";
export default function Projects() {
 const iconMap: Record<string, React.ComponentType<any>> = {
  "FaHtml5":FaHtml5,"FaCss3Alt":FaCss3Alt,"FaGithub":FaGithub, "FaBootstrap":FaBootstrap, "FaReact":FaReact,"SiTailwindcss":SiTailwindcss,"SiJavascript":SiJavascript,
  "SiMongodb":SiMongodb,"SiTypescript":SiTypescript, "SiRedux":SiRedux, "SiRender":SiRender,"SiNextdotjs":SiNextdotjs,"SiVercel":SiVercel
};
      const app = useApp() as { Projects?: ProjectItem } | null;
        const projects = app?.Projects?.projects ?? [];
        const mainTitle = app?.Projects?.mainTitle ?? { title1: '', title2: '' ,code:"",demo:""};
  return (
    <div id="Projects" className='min-h-screen w-[90%] sm:w-[80%] lg:w-[70%] mx-auto pt-20 pb-10'>
      <h2 data-aos="fade-up" className='text-xl sm:text-2xl md:text-3xl capitalize font-bold tracking-wide'>
       {mainTitle.title1}<span className='text-cyan-500 block'>{mainTitle.title2}</span>
      </h2>

      <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="grid grid-cols-1 mt-5 md:mt-10 gap-10 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((data) => {
          return (
            <div
              key={data.id}
              className="p-5 rounded-lg bg-indigo-200 shadow-md dark:bg-[#0f142ed9] text-white group max-w-[550px]"
              
            >
              <div className="relative overflow-hidden">
                <img src={data.image} className="w-full h-full" alt="" />

                <div
                  className={`absolute top-1/2 left-0  [@media(hover:none)]:opacity-100 z-10 flex flex-col w-full transition-all duration-300 
                    opacity-0 group-hover:opacity-100`}
                >
                  <Link
                    href={data.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-5 bg-cyan-500/80 flex items-center justify-center gap-2 text-white py-2"
                  >
                    <Link2 /> {mainTitle.demo}
                  </Link>
                  <Link
                    href={data.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/80 flex items-center justify-center gap-2 text-white py-2"
                  >
                    <Link2 /> {mainTitle.code}
                  </Link>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl mt-4 mb-2 md:text-2xl xl:text-4xl">
                {data.title}
              </h3>

              <div className="flex gap-2 flex-wrap items-center">
                {data.tools.map((tool) => {
                  const key = String(tool);
                  const Icon = iconMap[key];
                  return(
                  <span key={key} className="flex p-1 rounded-sm dark:bg-[#0d0d1f] items-center bg-indigo-400 gap-1">
                    <Icon />
                  </span>
                )})}
              
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}