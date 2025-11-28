"use client";
import { useEffect, useState } from "react";
import { HeroMaleviz } from "./HeroMaleviz";
import { ThemeToggler } from "./ThemeToggler";
function ThemeChecker() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
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
      <HeroMaleviz />
    </div>
  );
}
export { ThemeChecker };
