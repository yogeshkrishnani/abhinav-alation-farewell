"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl text-[#2D2D2D] text-center mb-24"
        >
          The Journey
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-[#D4A373]/30" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start mb-20 last:mb-0 ${
                index % 2 === 0
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
            >
              <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 w-[9px] h-[9px] rounded-full bg-[#D4A373] border-2 border-[#FAF9F6]" />

              <div
                className={`pl-12 md:pl-0 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pl-16 md:text-left"
                    : "md:pr-16 md:text-right"
                }`}
              >
                <span className="text-sm uppercase tracking-[0.2em] text-[#D4A373] font-inter font-medium">
                  {item.date}
                </span>
                <h3 className="font-playfair text-2xl text-[#2D2D2D] mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-[#2D2D2D]/60 leading-relaxed font-inter">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
