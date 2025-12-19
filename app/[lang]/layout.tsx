import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/DarkMode";
import { ModeToggle } from "@/components/ui/ToggleMode";
import Footer from "@/components/footer/footer";
import Scroll from "@/components/scroll/Scroll";
import { AppProvider } from "@/components/context/AppContext";
import { getDictionary } from "./dictionaries";
import { myServices, myNavbar, myProjects, myWorkExperience, myBlogs } from "@/data/data";
import LanguageSwitcher from "@/components/languages/lang";
const inter = Inter({
  weight: ["100",'200',"300","600","700","900","400","800","500"],
  subsets: ["latin"],
});
export async function generateMetadata(
  { params }: { params: any } 
){
  const { lang } = await params;
  const isArabic = lang === "ar";

  return {
    title: isArabic? "محمد صابر | مطور ويب MERN و Next.js": "Mohammad Saber | Full-Stack Web & MERN Developer",
   description: isArabic? "مطور Full-Stack متخصص في MERN و Next.js. أبني مواقع حديثة ومتجاوبة وعالية الأداء وتطبيقات ويب كاملة.": "Full-Stack developer specializing in MERN and Next.js. I build modern, responsive, high-performance websites and complete web applications.",
    keywords: [
      "full stack developer",
      "mern stack developer",
      "next.js developer",
      "react developer",
      "node.js developer",
      "express developer",
      "mongodb developer",
      "web developer",
      ...(
        isArabic
          ? ["مطور مواقع","مطور ويب","مصمم مواقع","عمل موقع إلكتروني","تصميم مواقع","محمد صابر"]
          : []
      )
    ],
    openGraph: {
      title: "Mohammad Saber | Full-Stack MERN & Next.js Developer",
      description:
        "Building scalable and modern web apps using MERN Stack and Next.js.",
      url: `https://www.mohammad-saber.site/${lang}`,
      siteName: "Mohammad Saber Portfolio",
      images: [
        {
          url: `https://www.mohammad-saber.site/images/myPhoto.png`,
          width: 1200,
          height: 630,
          alt: "Mohammad Saber Full-Stack Developer"
        }
      ],
      locale: isArabic ? "ar_EG" : "en_US",
      type: "website"
    },
    alternates: {
      canonical: `https://www.mohammad-saber.site/${lang}`,
      languages: {
        en: "https://www.mohammad-saber.site/en",
        ar: "https://www.mohammad-saber.site/ar"
      }
    }
  };
}
export default async function RootLayout({
  children,params
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const Nav=myNavbar(dict)
  const Services=myServices(dict)
  const Projects=myProjects(dict)
  const Skills=myWorkExperience(dict)
  const Blogs=myBlogs(dict)
  return (
    <html suppressHydrationWarning lang={lang}>
      <body
        className={`${inter.className} relative antialiased bg-gray-100 dark:bg-[#0d0d1f]`}
      >
        <AppProvider value={{dict,lang,...Nav,...Services,...Projects,...Skills,...Blogs}}>

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <Scroll />
            <div className="fixed  z-[10000000] top-20 left-4 flex gap-2 items-center">
              <ModeToggle />
            <LanguageSwitcher />
            </div>
            {children}
            <Footer lang={lang}/>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}