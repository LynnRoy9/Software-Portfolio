"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";

export function ResumeButton({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "nav";
}) {
  const isNav = variant === "nav";

  const baseClasses = isNav
    ? "px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2 group overflow-hidden relative"
    : "inline-flex items-center justify-center px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors w-full sm:w-auto relative group overflow-hidden";

  return (
    <motion.a
      href="/Elangwe Lynn-Roy.pdf"
      download="Elangwe Lynn-Roy.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className || ""}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="flex items-center gap-2 group-hover:-translate-y-10 transition-transform duration-300">
        <Download className={isNav ? "w-4 h-4" : "w-5 h-5"} />
        Download CV
      </span>
      <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
        <Download
          className={`${isNav ? "w-4 h-4" : "w-5 h-5"} animate-bounce`}
        />
        {isNav ? "CV" : "Downloading..."}
      </span>
    </motion.a>
  );
}
