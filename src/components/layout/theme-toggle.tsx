"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

function getDocumentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerTheme(): Theme {
  return "dark";
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener("portfolio-theme-change", callback);
  return () => window.removeEventListener("portfolio-theme-change", callback);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getDocumentTheme, getServerTheme);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    try { localStorage.setItem("portfolio-theme", nextTheme); } catch { /* Theme still works when storage is unavailable. */ }
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  const isLight = theme === "light";
  const label = `Switch to ${isLight ? "dark" : "light"} theme`;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isLight}
      className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-px hover:border-muted/50 hover:bg-surface-raised hover:text-foreground"
    >
      {isLight ? <Moon aria-hidden="true" size={18} /> : <Sun aria-hidden="true" size={18} />}
    </button>
  );
}
