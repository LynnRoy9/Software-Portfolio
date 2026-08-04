"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/lib/projects-data";

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-slate-900 dark:text-white">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all group flex flex-col"
            >
              <Link
                href={`/projects/${project.id}`}
                className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-950 block"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 dark:group-hover:bg-slate-900/40 transition-colors z-10 pointer-events-none" />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <Link href={`/projects/${project.id}`}>
                  <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors mb-4 w-fit group/link"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm shadow-indigo-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-semibold rounded-xl transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
