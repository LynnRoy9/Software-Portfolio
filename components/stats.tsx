"use client";

import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(from, to, {
          duration,
          ease: "easeOut",
          onUpdate(value) {
            node.textContent = Math.round(value).toString();
          },
        });
        return () => controls.stop();
      }
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

export function Stats() {
  const stats = [
    { label: "Projects Completed", value: 30, suffix: "+" },
    { label: "Years of Experience", value: 5, suffix: "+" },
    { label: "Happy Clients", value: 25, suffix: "+" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/50 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20 hover:shadow-indigo-500/10 transition-shadow"
            >
              <div className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 mb-4 flex items-center">
                <Counter from={0} to={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-lg font-medium text-slate-600 dark:text-slate-400 text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
