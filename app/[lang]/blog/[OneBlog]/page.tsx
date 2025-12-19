"use client"
import { MERNstack, WebsiteImportance } from "@/components/blogDetails/blogsBody";
import { useApp } from "@/components/context/AppContext";
import { BlogsItem } from "@/interface";
import Link from "next/link"
import { use } from "react";
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
const bodies: any = {
  MERNstack: MERNstack,
  WebsiteImportance: WebsiteImportance
};
export default function Page(props: { params: Promise<{ OneBlog: string }> }) {
  const { OneBlog } = use(props.params);
  const id = Number(OneBlog)
  const app = useApp() as { dict:any;lang: string; Blogs?: BlogsItem; [key: string]: any } | null;
  const blog = app?.Blogs?.blogs ?? [];
  const Blogs = blog.filter(item => item.id === id);
  if (Blogs.length === 0) {
    return <div>Blog not found</div>;
  }
  const Body = bodies[Blogs[0].body];
  return (
    <div dir={app?.lang === 'ar' ? 'rtl' : 'ltr'}  className="m-4 min-h-screen relative">
      <Link href={`/${app?.lang}#Blog`} className="fixed text-center transition hover:bg-blue-800 top-0 right-0 w-full p-2 text-white bg-blue-600">
      {app?.lang === 'ar' ? 'العودة للصفحة الرئيسية' : 'back to main page'}
      </Link>
      <div className="mt-16">
        <img src={Blogs[0].image} className="max-w-80 max-h-80" alt="" />
      <div className="text-gray-500 mt-2 mb-4 justify-center text-sm flex gap-6">
        <span>{app?.lang === 'ar' ? 'كتب بواسطة: ' : 'written by'} <span className="text-cyan-500">{app?.lang === 'ar' ? 'محمد صابر' : 'mohammad saber'}</span></span>
        <span className="text-xs">13 nov 2025</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {Blogs[0].keyWords.map((icon:any)=>{
          const Icon = Icons[icon.Icon]
        return(
          <div key={icon.name} className="p-1 items-center rounded-sm dark:bg-[#0d0d1f] flex gap-1 bg-indigo-400 text-white">
            <Icon className=" size-5"/>
              <span>{icon.name}</span>
            </div>
        )})}
      </div>
      <div className="text-xl mt-1 my-4 border-b border-gray-300 dark:text-white text-gray-700 sm:text-2xl capitalize text-center">
        {Blogs[0].title}
      </div>
      <div className="max-w-2xl">
          <Body dict={app?.dict} lang={app?.lang}/>
      </div>
        </div>
    </div>
  )
}
