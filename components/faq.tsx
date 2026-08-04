"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web and mobile application development. This includes creating responsive frontends, robust backends, API design, database management, and deploying scalable architectures.",
  },
  {
    question: "Do you take on freelance projects?",
    answer:
      "Yes, I am available for freelance projects and consulting. Feel free to reach out through the contact form to discuss your project requirements.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary greatly depending on the scope and complexity of the work. A simple landing page might take a week, while a full-scale mobile app could take a few months. I provide detailed estimates after our initial consultation.",
  },
  {
    question: "How do we communicate during a project?",
    answer:
      "I prioritize transparent and regular communication. I typically use email for official updates and Slack or WhatsApp for quick questions. We can also schedule weekly sync meetings via Google Meet or Zoom.",
  },
  {
    question: "Can you help me design the application?",
    answer:
      "Absolutely! While my primary expertise is development, I have a strong eye for UI/UX design and can help translate your ideas into a beautiful, functional design using tools like Figma before writing any code.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-slate-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
