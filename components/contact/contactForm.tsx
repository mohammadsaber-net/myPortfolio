"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({lang}:{lang:string}) {
  const isAr=lang==="ar"?true:false
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus("Sending...");
    const SERVICE_ID : string=process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const TEMPLATE_ID : string=process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const PUBLIC_KEY : string=process.env.NEXT_PUBLIC_PUBLIC_KEY as string;
    emailjs.sendForm(
      SERVICE_ID ,
      TEMPLATE_ID,
      form.current,
      PUBLIC_KEY
    )
      .then(() => {
        setStatus(isAr?" تم ارسال الرسالة بنجاح✅, سيتم التواصل معك خلال ساعة":"✅ Message sent successfully! I’ll get back to you within 1 hour.");
        form.current?.reset();
      })
      .catch((err) => {
        console.log("err",err)
        setStatus(err);
      });
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-4">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input name="name" placeholder={isAr?"اضف اسمك":"Your Name"} required className="px-4 mb-4 py-3.5 bg-slate-300 shadow-sm dark:bg-[#363659] outline-none rounded-md w-full placeholder:text-black dark:placeholder:text-white "/>
        <input name="email" type="email" placeholder={isAr?"اضف اميلك":"Your Email"} required className="px-4 mb-4 py-3.5 bg-slate-300 shadow-sm dark:bg-[#363659] outline-none rounded-md w-full placeholder:text-black dark:placeholder:text-white "/>
        <input name="phone" placeholder={isAr?"اضف رقم الهاتف":"Your Phone Number"} className="px-4 mb-4 py-3.5 bg-slate-300 shadow-sm dark:bg-[#363659] outline-none rounded-md w-full placeholder:text-black dark:placeholder:text-white "/>
        <textarea name="message" placeholder={isAr?" رسالتك":"Your Message"} required className="resize-none w-full px-4 py-3.5 bg-slate-300 shadow-sm dark:bg-[#363659] outline-none rounded-md 
            dark:placeholder:text-white placeholder:text-black max-w-96 h-40 overflow-auto"/>
        <button type="submit" className="px-4 mt-4 mb-4 py-3.5 bg-slate-300 shadow-sm text-black dark:text-white dark:bg-[#363659] cursor-pointer rounded-lg">
         {isAr?"ارسال ":"Your Name"}
        </button>
        {status && <p className="mt-2 text-center">{status}</p>}
      </form>
    </div>
  );
}
