"use client";

import { motion } from "motion/react";
import { Layout, Server, Wrench } from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiExpo,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiDocker,
  SiTypescript,
  SiLinux,
} from "@icons-pack/react-simple-icons";

const skillCategories = [
  {
    title: "Frontend & Mobile",
    icon: Layout,
    skills: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "group-hover:text-black dark:group-hover:text-white",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "group-hover:text-[#06B6D4]",
      },
      {
        name: "React Native",
        icon: SiReact,
        color: "group-hover:text-[#61DAFB]",
      },
      {
        name: "Expo",
        icon: SiExpo,
        color: "group-hover:text-black dark:group-hover:text-white",
      },
    ],
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "group-hover:text-[#4169E1]",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "group-hover:text-[#2D3748] dark:group-hover:text-white",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "group-hover:text-[#FFCA28]",
      },
    ],
  },
  {
    title: "Infrastructure & Tools",
    icon: Wrench,
    skills: [
      { name: "Docker", icon: SiDocker, color: "group-hover:text-[#2496ED]" },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "group-hover:text-[#3178C6]",
      },
      {
        name: "Windows Subsystem for Linux (WSL)",
        icon: SiLinux,
        color: "group-hover:text-[#FCC624]",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center relative bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-slate-900 dark:text-white">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl text-indigo-600 dark:text-indigo-400">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/50 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-colors group"
                  >
                    <skill.icon
                      className={`w-6 h-6 text-slate-400 dark:text-slate-500 transition-colors ${skill.color}`}
                    />
                    <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
