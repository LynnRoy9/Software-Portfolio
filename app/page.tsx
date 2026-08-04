"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { ContactForm } from "@/components/contact-form";
import { ResumeButton } from "@/components/resume-button";
import { Testimonials } from "@/components/testimonials";
import { Stats } from "@/components/stats";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-5">
      {/* Hero Section */}
      <section
        id="home"
        className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-20 lg:py-32 relative"
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
                src="/images/profile.jpg"
                alt="Elangwe Lynn-Roy Dinyangi"
                quality={30}
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
          className="max-w-6xl mx-auto w-full relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-balance leading-relaxed">
              Whether you have a question, a project in mind, or just want to
              say hi, my inbox is always open. I'll try my best to get back to
              you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <ContactForm />
            </div>

            {/* Address & Socials Section */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 h-full min-h-[400px] flex flex-col p-8 lg:p-10">
              {/* Map Background */}
              <div
                className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    'url("https://www.transparenttextures.com/patterns/cartographer.png")',
                }}
              ></div>
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <Image
                  src="https://picsum.photos/seed/map/800/800"
                  alt="Map Background"
                  fill
                  className="object-cover blur-[2px] grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/95 dark:to-slate-900/80"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          Email
                        </p>
                        <a
                          href="mailto:elangwelynnroy9@gmail.com"
                          className="text-lg font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          elangwelynnroy9@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          Phone
                        </p>
                        <a
                          href="tel:+237698927731"
                          className="text-lg font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          +(237) 698-927-731
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          Location
                        </p>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">
                          Molyko, Buea
                          <br />
                          South West, Cameroon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                    Connect with me
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/LynnRoy9"
                      className="p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:scale-105 transition-all text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                    >
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/lynn-roy-dinyangi"
                      className="p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:scale-105 transition-all text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 opacity-20"></div>
      </section>

      <FAQ />
    </main>
  );
}
