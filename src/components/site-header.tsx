"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Mode = "light" | "dark";

export function SiteHeader() {
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
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Documents</h1>
        <div className="ml-auto flex items-center gap-2 cursor-pointer">
          {mode === "dark" ? (
            <Sun onClick={() => onChangeMode("light")} />
          ) : (
            <Moon onClick={() => onChangeMode("dark")} />
          )}
        </div>
      </div>
    </header>
  );
}
