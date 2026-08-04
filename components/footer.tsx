"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">E</div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Portfolio
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#home" onClick={handleScroll} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a>
          <a href="#about" onClick={handleScroll} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
          <a href="#skills" onClick={handleScroll} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
          <a href="#projects" onClick={handleScroll} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#contact" onClick={handleScroll} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
        </div>
        
        <p className="text-sm text-slate-500 dark:text-slate-500 text-center">
          &copy; {currentYear} Elangwe Lynn-Roy Dinyangi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
