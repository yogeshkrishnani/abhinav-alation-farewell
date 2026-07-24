"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contributors } from "@/data/contributors";

export default function FinalGoodbye() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative w-full aspect-[21/9] rounded-lg overflow-hidden mb-16 bg-[#2D2D2D]/5"
        >
          <Image
            src="/images/placeholder.jpg"
            alt="Team photograph"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF9F6]/20" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#2D2D2D] leading-relaxed max-w-3xl mx-auto italic"
        >
          &ldquo;No matter where life takes you, you&rsquo;ll always have a team
          here.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-[#2D2D2D]/10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4A373] font-inter mb-8">
            With love, from your team
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-3xl mx-auto">
            {contributors.map((c, i) => (
              <span
                key={i}
                className="font-playfair text-[#2D2D2D]/60 text-lg italic"
              >
                {c.name.split(" ")[0]}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
