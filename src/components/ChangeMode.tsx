"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Mode = "light" | "dark";

const ChangeMode = () => {
  const [mode, setMode] = useState<Mode>("light");

  const onChangeMode = (mode: "light" | "dark") => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("mode");
    if (data === "dark") {
      document.documentElement.classList.add("dark");
      setMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setMode("light");
    }
  }, [mode]);
  return (
    <div className="ml-auto flex items-center gap-2 cursor-pointer">
      {mode === "dark" ? (
        <Sun onClick={() => onChangeMode("light")} />
      ) : (
        <Moon onClick={() => onChangeMode("dark")} />
      )}
    </div>
  );
};

export default ChangeMode;
