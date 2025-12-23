
import {FaReact,FaAngular,FaBootstrap,FaCss3Alt,FaHtml5,FaGitAlt,FaGithub,FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiNextui,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiVercel,
  SiRender,
  SiMongodb,
  SiNodedotjs 
} from "react-icons/si";

export const myNavbar=(dict: any)=>{
  const nav=dict.nav
   return{Nav:[
    {id:1,url:"#Service",label:nav.service},
    {id:3,url:"#Projects",label:nav.projects},
    {id:2,url:"#Skills",label:nav.work},
    {id:6,url:"#Blog",label:nav.blog},
    {id:5,url:"#Contact",label:nav.hire},
]}}
export const myServices = (dict: any)=>{
  const service=dict.service
  return{Services:{
    mainTitle:{
      title1:service["title1-1"],
      title2:service["title1-2"]
    },
    Services:[
  {
    id: 1,
    image: "/images/s1.webp",
    title: service["title2-1"],
    info: service["title2-2"],
  },
  {
    id: 2,
    image: "/images/s2.webp",
    title: service["title3-1"],
    info: service["title3-2"]
  },
  {
    id: 3,
    image: "/images/s4.webp",
    title: service["title4-1"],
    info: service["title4-2"],
  },
  {
    id: 4,
    image: "/images/s3.webp",
    title: service["title5-1"],
    info: service["title5-2"],
  }
]}}};

export const myWorkExperience =(dict:any)=> {
  const skill=dict.skill
  return{Skills:{
    mainTitle:{
      title1:skill["title1-1"],
      title2:skill["title1-2"],
      title3:skill["title5-1"],
      title4:skill["title5-2"],
    },
    skills:[
  {
    id: 2,
    icon: "FaReact",
    title: skill["title3-1"],
    info: skill["title3-2"],
  },
  {
    id: 3,
    icon: "FaDatabase",
    title: skill["title4-1"],
    info: skill["title4-2"],
  },{
      id: 1,
      icon: "FaCodepen",
      title: skill["title2-1"],
      info:skill["title2-2"],
  }
    ]
  }   
}};

export const usedTools=[
    {id:1,icon:FaHtml5,title:"HTML"},
    {id:2,icon:FaCss3Alt,title:"CSS"},
    {id:3,icon:SiJavascript,title:"Javascript"},
    {id:4,icon:SiTypescript,title:"Typescript"},
    {id:5,icon:SiMongodb,title:"MongoDB"},
    {id:6,icon:SiNextdotjs,title:"Next.js"},
    {id:7,icon:FaReact,title:"React.js"},
    {id:8,icon:FaAngular,title:"Angular.js"},
    {id:9,icon:FaBootstrap,title:"Bootstrap"},
    {id:10,icon:FaGitAlt,title:"Git"},
    {id:11,icon:SiTailwindcss,title:"TailwindCss"},
    {id:12,icon:FaGithub,title:"GitHub"},
    {id:13,icon:SiRedux,title:"Redux"},
    {id:14,icon:SiVercel,title:"Vercel"},
    {id:15,icon:SiRender,title:"Render"},
]
export const myProjects=(dict:any)=>{
  const project=dict.project
  return {Projects:{mainTitle:{
    title1:project["title1-1"],
    title2:project["title1-2"],
    code:project["code"],
    demo:project["demo"],
  },
    projects:[
      {
        id:5,
        title:project["title6"],
        demo:"https://next-shop-xamf.vercel.app/admin",
        code:"https://github.com/mohammadsaber-net/NextShop",
        image:"/images/adminNext.png",
        tools:["SiTypescript","FaHtml5","SiNextdotjs","SiTailwindcss","FaReact","SiVercel","FaCss3Alt","FaGithub"]
    },
    {
        id:6,
        title:project["title7"],
        demo:"https://next-shop-ns5b.vercel.app/",
        code:"https://github.com/mohammadsaber-net/NextShop",
        image:"/images/userNext.png",
        tools:["SiTypescript","FaHtml5",,"SiNextdotjs","SiTailwindcss","FaReact","SiVercel","FaCss3Alt","FaGithub"]
    },
    {
        id:1,
        title:project["title2"],
        demo:"https://react-ecommerce-mocha-mu.vercel.app/",
        code:"https://github.com/mohammadsaber-net/react-ecommerce",
        image:"/images/store.png",
        tools:["FaHtml5","FaBootstrap","FaReact","SiMongodb","SiRedux","SiRender"]
    },
    {
        id:2,
        title:project["title3"],
        demo:"https://mini-facebook-98.vercel.app/",
        code:"https://github.com/mohammadsaber-net/Mini-FaceBook",
        image:"/images/facebook.png",
        tools:["SiJavascript","SiTailwindcss","FaReact","SiMongodb","SiRedux","SiVercel"]
    },
    {
        id:3,
        title:project["title4"],
        demo:"https://my-protfolio-one-delta.vercel.app/",
        code:"https://github.com/mohammadsaber-net/myProtfolio",
        image:"/images/portfolio.png",
        tools:["SiJavascript","SiNextdotjs","SiTailwindcss","FaReact","SiVercel"]
    },
    {
        id:4,
        title:project["title5"],
        demo:"https://mohammadsaber-net.github.io/landing-courses/",
        code:"https://github.com/mohammadsaber-net/landing-courses",
        image:"/images/programming.png",
        tools:["SiJavascript","FaHtml5","SiTailwindcss","FaCss3Alt","FaGithub"]
    },
    {
        id:7,
        title:project["title8"],
        demo:"https://smart-watch-bice.vercel.app/",
        code:"https://github.com/mohammadsaber-net/smartWatch",
        image:"/images/xultraWatch.png",
        tools:["SiJavascript","FaHtml5","SiTailwindcss","FaCss3Alt","FaReact","FaGithub"]
    }

]}}}


export const myBlogs=(dict:any)=>{
  const blog=dict.blog
  return{Blogs:{
    mainTitle:{
    title1:blog["title1-1"],
    title2:blog["title1-2"]
  },blogs:[{
    id:1,
    image:"/images/b1.webp",
        title:blog["title2"],
        body:"MERNstack",
        keyWords:[
            {Icon:"SiNextdotjs",name:"Next.js"},
            {Icon:"SiNodedotjs",name:"Node.js"},
            {Icon:"SiMongodb",name:"MongoDB"},
            {Icon:"SiJavascript",name:"Javascript"},
            {Icon:"FaReact",name:"React.js"},
            {Icon:"FaServer",name:"Express.js"}
        ]
    },
      {id:2,
        image:"/images/ecommerce.jpg",
        title:blog["title3"],
        body:"WebsiteImportance",
        keyWords:[
            {Icon:"SiNextdotjs",name:"Next.js"},
            {Icon:"SiTailwindcss",name:"TailwindCss"},
            {Icon:"SiNodedotjs",name:"Node.js"},
            {Icon:"SiJavascript",name:"Javascript"},
            {Icon:"SiMongodb",name:"MongoDB"},
        ]
        }]
  }
}}