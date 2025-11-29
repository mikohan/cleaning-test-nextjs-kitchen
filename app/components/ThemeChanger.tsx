"use client";
import { useEffect, useState } from "react";
import { HeroMaleviz } from "./HeroMaleviz";
import { ThemeToggler } from "./ThemeToggler";
import heroImageOl from "@/public/images/hero_ol2_768.png";
import heroImageDark from "@/public/images/hero_ol2_768_dark_ps.png";

function ThemeCheenger() {
  const [theme, setTheme] = useState("light");
  const [src, setSrc] = useState(heroImageOl);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    const newSrc = src === heroImageOl ? heroImageDark : heroImageOl;
    setSrc(newSrc);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    (async () => {
      try {
        setTheme(storedTheme);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div data-theme={theme} className="h-screen font-display">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">PlayaCleaning</a>
        </div>
        <div className="z-50">
          <ThemeToggler toggle={toggleTheme} />
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      {/* Starting Hero Component */}
      <HeroMaleviz src={src} />
    </div>
  );
}
export { ThemeCheenger };
