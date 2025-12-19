import { LocateIcon, Phone } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./contactForm";

export default function Contact({dict,lang}:{lang:string;dict:{contact:{[key:string]:string}}}) {
  return (
    <div id='Contact' className='min-h-screen py-10 w-[90%] sm:w-[80%] lg:w-[80%] max-w-3xl mx-auto'>
      <div className="flex gap-10 flex-col md:flex-row">
        <div 
        data-aos="zoom-in" data-aos-anchor-placement="top-center" 
        className="bg-gray-200 dark:bg-[#0d0d1f] p-2 rounded-sm">
        <h2 data-aos="fade-up" className="text-xl sm:text-2xl md:text-3xl capitalize font-bold tracking-wide">
            {dict.contact["title2-2"]} <span className="text-cyan-500"> {dict.contact["title2-1"]}</span>
        </h2>
        <div
        
        >

        <div className="dark:text-gray-300 max-w-48 mt-5 mb-10 text-gray-700 text-sm">
            {dict.contact["title2-4"]}
        </div>
        <div className="text-xl sm:text-2xl">
            <div className="flex dark:text-white mb-3 hover:text-blue-700 transition text-blue-600 gap-2 items-center">
                <Phone className="text-cyan-500"/>
                <div>+201023966702</div>
            </div>
            <a
            href="mailto:m4567s019283@gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex mb-3 dark:text-white gap-2 items-center cursor-pointer hover:underline hover:text-blue-700 transition text-blue-600"
            >
            <MdEmail className="text-cyan-500" size={24} />
            <span>m4567s019283@gmail.com</span>
            </a>
            <div className="flex mb-3 dark:text-white hover:text-blue-700 transition text-blue-600 gap-2 items-center">
                <LocateIcon className="text-cyan-500"/>
                <div>{dict.contact["title2-5"]}</div>
            </div>
        </div>
        <div className="flex mb-4 mt-6 gap-1 items-center">
            <a  href="https://wa.me/+201023966702" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#25D366]">
                <FaWhatsapp size={36}/>
            </a>
            <a  href="https://www.linkedin.com/in/mohammad-saber-447510353/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 rounded-full transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#0077B5]">
                <FaLinkedin size={36}/>
            </a>
            <a
            href="https://t.me/@moh123ph" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 transition-all duration-300 cursor-pointer rounded-full hover:text-white hover:bg-[#0088CC]">
                <FaTelegram size={36}/>
            </a>
            <a
            href="https://github.com/mohammadsaber-net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 transition-all duration-300 cursor-pointer rounded-full hover:text-white hover:bg-[#181717]">
                <BsGithub size={36}/>
            </a>
        </div>
        </div>
    </div>
        <div 
        data-aos="zoom-out" data-aos-anchor-placement="top-center" 
        className="bg-gray-200 dark:bg-[#0d0d1f] p-2 rounded-sm">
        <h2 data-aos="fade-down" className="text-xl sm:text-2xl md:text-3xl capitalize font-bold tracking-wide">
            {lang==="ar"?"ارسل":"Send Me"} <span className="text-cyan-500">{lang==="ar"?"رسالة":"A Message"} </span>
        </h2>
        <small className="capitalize text-gray-600 dark:text-gray-200">{lang==="ar"?"سيتم الرد في خلال ساعة باذن الله":"you will get a message within an hour"}</small>
        <div
        data-aos="zoom-in" data-aos-anchor-placement="top-center" 
        className="mt-5">
            <ContactForm lang={lang}/>
        </div>
        </div>
      </div>
    </div>
  )
}
