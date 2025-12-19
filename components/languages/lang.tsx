"use client";
import { Earth } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState(pathname.split("/")[1] || "en");
  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    const segments = pathname.split("/");
    if (segments.length < 2 || segments[1] === "") {
      router.replace(`/${newLang}`);
    } else {
      segments[1] = newLang;
      router.replace(segments.join("/"));
    }
  };

  return (
   <div className="flex gap-2 perspective-1000">
      <button
        onClick={toggleLang}
        className="cursor-pointer text-blue-600"
      >
         {lang === "en" ? "AR" : "EN"}
      </button>
    </div>

  );
}