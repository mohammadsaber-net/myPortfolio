"use client"
import { usedTools } from "@/data/data";
import { SkillsItem } from "@/interface";
import Tilt from "react-parallax-tilt"
import { useApp } from "../context/AppContext";
import { FaCodepen, FaDatabase, FaReact } from "react-icons/fa";
export default function Skills() {
  const iconMap: Record<string, React.ComponentType<any>> = {
    "FaReact":FaReact,"FaCodepen":FaCodepen,"FaDatabase":FaDatabase
  };
  const app = useApp() as { Skills?: SkillsItem } | null;
  const canWorkAt = app?.Skills?.skills ?? [];
  const mainTitle = app?.Skills?.mainTitle ?? { title1: '', title2: '' ,title3: '', title4: ''};
  return (
    <div id="Skills" className='pt-20 pb-10 min-h-screen w-[90%] mx-w-2xl sm:w-[80%] mx-auto lg:w-[70%]'>
      <div className='flex flex-col md:justify-center gap-10'>
        <div>
            <h2 data-aos="fade-up" className='text-xl sm:text-2xl md:text-3xl capitalize font-bold tracking-wide'>
                {mainTitle.title1}  <span className='text-cyan-500'>
                    {mainTitle.title2}
                </span>
            </h2>
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center"  className="mt-5 md:mt-10">
              {canWorkAt.map((work)=>{
                const Icon=iconMap[work.icon]
              return (
              <div key={work.id} className="mt-4 shadow-sm flex group gap-4 bg-indigo-200 dark:bg-[#0f142ed9] p-5 rounded-md md:mt-8">
                <div className="dark:bg-[#0d0d1f] bg-indigo-400 p-2 w-fit h-fit rounded-full">
                  <Icon className="size-8 text-white group-hover:scale-110 transition" />
                </div>
                <div>
                  <h3 className="text-base mb-4 sm:text-xl md-text-3xl">{work.title}</h3>
                  <p className="text-xs md:text-sm">{work.info}</p>
                </div>
              </div>
            )})}  
            </div>
        </div>
        <div className="text-start">
            <h2 data-aos="fade-down" className='text-xl sm:text-2xl md:text-3xl capitalize font-bold tracking-wide'>
                {mainTitle.title3} <span className='text-cyan-500'>
                    {mainTitle.title4}
                </span>
            </h2>
            <div data-aos="zoom-out" data-aos-anchor-placement="top-center" className="rounded-lg flex flex-wrap gap-6 m-5 md:mt-10">
              {usedTools.map((tool)=>{
                const Icon = tool.icon;
                return(
                  <Tilt key={tool.id} scale={1.5} transitionSpeed={400}>
                    <div className="flex flex-col justify-center text-white items-center w-36 h-36 px-3 py-6 bg-indigo-400 shadow dark:bg-[#14134145] rounded-2xl">
                      <Icon className="text-3xl"/>
                      <span className="text-2xl">{tool.title}</span>
                    </div>
                  </Tilt>
                )
              })}
            </div>
        </div>
      </div>
    </div>
  )
}
