import React, { useEffect } from "react";
import Sun from "../images/icons/sun.png";

export default function ThemeToggle() {
  useEffect(() => {
    setBodyTheme();
  });

  const setBodyTheme = () => {
    const theme = window.localStorage.getItem("theme");
    if (theme) {
      if (theme === "light")
        document.querySelector("body").setAttribute("data-theme", "light");
      else if (theme === "dark")
        document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  };

  const toggleTheme = () => {
    const theme = window.localStorage.getItem("theme");

    if (!theme) window.localStorage.setItem("theme", "dark");
    else {
      if (theme === "light") window.localStorage.setItem("theme", "dark");
      else if (theme === "dark") window.localStorage.setItem("theme", "light");
    }

    setBodyTheme();
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        <img src={Sun} alt="sun"></img>
      </button>
    </div>
  );
}
