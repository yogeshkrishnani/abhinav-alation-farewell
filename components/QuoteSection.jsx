"use client";

import { motion } from "framer-motion";
import { quotes } from "@/data/quotes";

export default function QuoteSection() {
  return (
    <section className="py-32 px-6 bg-[#1F3A5F]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl text-white/90 text-center mb-20"
        >
          Things AK Says
        </motion.h2>

        <div className="space-y-20">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white/95 leading-snug italic">
                &ldquo;{quote.text}&rdquo;
              </p>
              <p className="mt-6 text-white/50 font-inter text-sm uppercase tracking-widest">
                {quote.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
