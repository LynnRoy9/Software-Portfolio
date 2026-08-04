"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

type ProjectType = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
};

export function ProjectDetails({
  project,
  previousProject,
  nextProject,
}: {
  project: ProjectType;
  previousProject: ProjectType;
  nextProject: ProjectType;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 px-4 sm:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          {project.title}
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-balance">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/20"
          >
            <ExternalLink className="w-5 h-5" />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl transition-all"
          >
            <Github className="w-5 h-5" />
            GitHub Repository
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-video relative rounded-3xl overflow-hidden mb-16 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              About the Project
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>{project.fullDescription}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <ul className="space-y-3">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-200 dark:border-slate-800 pt-12">
          <Link
            href={`/projects/${previousProject.id}`}
            className="group flex flex-col items-start p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 bg-slate-50 dark:bg-slate-900/50 transition-all"
          >
            <span className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              <ChevronLeft className="w-4 h-4" /> Previous Project
            </span>
            <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {previousProject.title}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex flex-col items-end p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 bg-slate-50 dark:bg-slate-900/50 transition-all text-right"
          >
            <span className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              Next Project <ChevronRight className="w-4 h-4" />
            </span>
            <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
