"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  { id: 1, name: "Alice M.", role: "CEO at TechFlow", text: "Elangwe delivered an exceptional web platform. His attention to detail and proactive approach to solving complex problems made the project a huge success.", rating: 5, avatar: "https://picsum.photos/seed/a1/100/100" },
  { id: 2, name: "Bob Smith", role: "CTO at DataSys", text: "Delivered on time and exceeded expectations. The mobile application was flawless and the backend architecture is highly scalable.", rating: 5, avatar: "https://picsum.photos/seed/a2/100/100" },
  { id: 3, name: "Charlie D.", role: "Startup Founder", text: "Great communication and excellent technical skills. Translated our designs into pixel-perfect code with smooth animations.", rating: 5, avatar: "https://picsum.photos/seed/a3/100/100" },
  { id: 4, name: "Diana Prince", role: "Product Manager", text: "A true professional who cares deeply about user experience. We are incredibly happy with the final product.", rating: 4, avatar: "https://picsum.photos/seed/a4/100/100" },
  { id: 5, name: "Evan Wright", role: "Lead Designer", text: "It's rare to find a developer who understands design so well. The integration between Figma and the final product was seamless.", rating: 5, avatar: "https://picsum.photos/seed/a5/100/100" },
  { id: 6, name: "Fiona G.", role: "Marketing Director", text: "Built our MVP quickly and flawlessly. The new site increased our conversions by over 40% in just two months.", rating: 5, avatar: "https://picsum.photos/seed/a6/100/100" },
  { id: 7, name: "George H.", role: "Engineering Director", text: "Solved complex architecture problems with ease. Clean, maintainable code that our internal team could easily take over.", rating: 5, avatar: "https://picsum.photos/seed/a7/100/100" },
  { id: 8, name: "Hannah Lee", role: "E-commerce Owner", text: "The custom dashboard he built changed how we manage our inventory. Highly performant and perfectly tailored to our needs.", rating: 5, avatar: "https://picsum.photos/seed/a8/100/100" },
  { id: 9, name: "Ian Davies", role: "Tech Lead", text: "Clean, maintainable code. A pleasure to review. He brought best practices to the team and elevated our entire codebase.", rating: 5, avatar: "https://picsum.photos/seed/a9/100/100" },
  { id: 10, name: "Julia K.", role: "Independent Client", text: "Will definitely hire again for future projects. Reliable, communicative, and exceptionally talented.", rating: 5, avatar: "https://picsum.photos/seed/a10/100/100" },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, [handleNext, isHovered]);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      let index = (currentIndex + i) % testimonials.length;
      if (index < 0) index += testimonials.length;
      items.push({ ...testimonials[index], offset: i });
    }
    return items;
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-12 overflow-hidden relative border-t border-slate-200 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-16 text-center text-slate-900 dark:text-white">Client Testimonials</h2>
        
        <div 
          className="relative h-[450px] sm:h-[400px] flex items-center justify-center max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="popLayout">
            {getVisibleTestimonials().map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: item.offset * 105 + "%", scale: 0.8 }}
                animate={{ 
                  opacity: item.offset === 0 ? 1 : 0.4, 
                  x: `calc(${item.offset * 105}%)`, 
                  scale: item.offset === 0 ? 1 : 0.85,
                  zIndex: item.offset === 0 ? 10 : 0
                }}
                exit={{ opacity: 0, x: item.offset * 105 + "%", scale: 0.8 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute w-[90%] sm:w-[80%] max-w-[400px] p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-4 relative rounded-full overflow-hidden border-2 border-indigo-500/30">
                  <Image src={item.avatar} alt={item.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < item.rating ? 'fill-current' : 'opacity-30'}`} />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 italic line-clamp-4">"{item.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <button 
            onClick={handlePrev}
            className="absolute left-0 sm:-left-4 z-20 p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 sm:-right-4 z-20 p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
