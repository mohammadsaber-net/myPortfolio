"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <button
      className="p-1 rounded-full dark:bg-gray-50 bg-gray-900 dark:text-gray-900 text-gray-50 cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

// "use client"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
// export function ModeToggle() {
//   const { theme,setTheme } = useTheme()

//   return (
//     <button className="fixed top-20 left-2 p-1 rounded-full dark:bg-gray-50 bg-gray-900 dark:text-gray-900 text-gray-50 cursor-pointer z-[10000]" suppressHydrationWarning onClick={()=>setTheme(theme==="light"?"dark":"light")}>
//         {theme==="dark"?<Sun />:<Moon />}
//     </button>
//   )
// }
