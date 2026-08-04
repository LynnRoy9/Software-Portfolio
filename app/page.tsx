"use client";

import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { ContactForm } from "@/components/contact-form";
import { ResumeButton } from "@/components/resume-button";
import { Testimonials } from "@/components/testimonials";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section
        id="home"
        className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-10 lg:py-24 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto relative z-10 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8 relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 shadow-xl shadow-indigo-500/20"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-50 dark:border-slate-950 relative">
              <Image
                src="https://picsum.photos/seed/profile/400/400"
                alt="Elangwe Lynn-Roy Dinyangi"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance text-slate-900 dark:text-white leading-[1.1]">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
              Elangwe Lynn-Roy Dinyangi
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 mb-4 font-medium">
            Full-Stack Software and Mobile Application Developer
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
            I have a deep passion for building seamless, high-performance web
            and mobile experiences. From intuitive user interfaces to robust
            backend architectures, I transform ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20 w-full sm:w-auto"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto"
            >
              Contact Me
            </a>
            {/* <ResumeButton /> */}
          </div>
        </motion.div>
      </section>

      <Stats />

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-slate-50 dark:bg-slate-900/30 py-20 px-4 sm:px-6 lg:px-12 flex items-center justify-center relative border-t border-slate-200 dark:border-slate-800/50"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-slate-900 dark:text-white">
            About Me
          </h2>

          <div className="space-y-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 text-balance leading-relaxed">
            <p>
              I am a dedicated full-stack engineer, specializing in both web and
              mobile application development. My journey in tech is driven by an
              insatiable curiosity and a desire to solve complex problems
              through clean, elegant code.
            </p>
            <p>
              With expertise spanning the entire development lifecycle, I craft
              robust backend systems and pair them with dynamic, responsive
              frontends. Whether it's a sleek React web app or a performant
              mobile application, I am committed to delivering seamless
              experiences that users love.
            </p>
          </div>
        </motion.div>
      </section>

      <Skills />

      <Projects />
      <Testimonials />

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-slate-50 dark:bg-slate-900/30 py-20 px-4 sm:px-6 lg:px-12 flex items-center justify-center relative border-t border-slate-200 dark:border-slate-800/50"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center w-full relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-balance leading-relaxed">
            Whether you have a question, a project in mind, or just want to say
            hi, my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="mb-16">
            <ContactForm />
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 opacity-20"></div>
      </section>
    </main>
  );
}
