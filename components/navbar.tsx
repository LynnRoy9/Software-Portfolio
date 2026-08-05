"use client";

import * as React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { ResumeButton } from "./resume-button";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    const navLinksList = ["home", "about", "skills", "projects", "contact"];
    const sections = navLinksList
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    sections.forEach((section) => observer.observe(section!));

    return () => {
      sections.forEach((section) => observer.unobserve(section!));
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-950/50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">
              P
            </div> */}
            <a
              href="#home"
              onClick={handleScroll}
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Lynn-Roy D.
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleScroll}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-500/10 scale-105 shadow-sm"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute top-2.5 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>
            )}
            <ResumeButton variant="nav" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors relative"
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute top-2.5 left-2.5 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleScroll}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-500/10 scale-[1.02] pl-6 shadow-sm"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="px-3 py-2">
                <ResumeButton variant="nav" className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
