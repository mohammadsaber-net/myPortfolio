import "aos/dist/aos.css"
import { getDictionary } from "./dictionaries";
import HomeClient from "./home";

import { myNavbar } from "@/data/data";
export default async function Home({
    params,
  }: {
    params: { lang: "en" | "ar" };
  }) {
    
    const {lang}=await params
    const dict = await getDictionary(lang);
    myNavbar(dict)
  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="relative overflow-hidden">
      <HomeClient lang={lang} dict={dict}/>
    </div>
  );
}
