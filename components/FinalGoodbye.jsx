"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FinalGoodbye() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section className="pt-32">
      <div className="max-w-3xl mx-auto px-6 text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#2D2D2D] leading-relaxed italic"
        >
          &ldquo;No matter where life takes you, you&rsquo;ll always have a team
          here.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4A373] font-inter">
            With love, from your team
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={imageRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-[3/2] overflow-hidden"
      >
        <motion.div style={{ scale }} className="relative w-full h-full">
          <Image
            src="/images/Alation.JPG"
            alt="Team photograph"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
