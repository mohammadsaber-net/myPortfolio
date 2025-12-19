"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Service from "@/components/service/Service";
import Skills from "@/components/skills/Skills";
import Blog from "./blog/Blog";
import Responsive from "@/components/navbar/Responsive";
import Contact from "@/components/contact/Contact";
import { useEffect } from "react";
export default function HomeClient({ lang, dict }: { lang: "en" | "ar", dict: any }){
//   useEffect(() => {
//   AOS.init({
//     duration: 1000,
//     easing: "ease",
//     once: true,
//     anchorPlacement: "top-bottom",
//   })
// }, []);
useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: "ease",
    once: true,
    anchorPlacement: "top-bottom",
    startEvent: "DOMContentLoaded",
    offset: 0,
  });

  AOS.refresh();
}, []);

  return (
    <main className="overflow-hidden">
      <Responsive dict={dict} lang={lang}/>
      <Hero dict={dict} lang={lang}/>
      <Service />
      <Projects />
      <Skills />
      <Blog lang={lang}/>
      <Contact lang={lang} dict={dict}/>
    </main>
  );
}
