"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LetterSection({ contributor, index }) {
  const isEven = index % 2 === 0;

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
          } gap-12 md:gap-20 items-center`}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 order-1 md:order-none"
          >
            <h3 className="font-playfair text-3xl md:text-4xl text-[#2D2D2D] mb-8">
              {contributor.name}
            </h3>
            <div className="space-y-4">
              {contributor.letter.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[#2D2D2D]/75 leading-[1.8] font-inter text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-8 text-[#1F3A5F] font-inter font-medium hidden md:block">
              — {contributor.name.split(" ")[0]}
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full md:w-1/2 order-2 md:order-none"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[4/5] rounded-lg overflow-hidden bg-[#2D2D2D]/5 shadow-lg">
              <Image
                src={contributor.photo}
                alt={`Photo with ${contributor.name}`}
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Signature - mobile only, below photo */}
          <p className="mt-4 text-[#1F3A5F] font-inter font-medium md:hidden order-3 self-start">
            — {contributor.name.split(" ")[0]}
          </p>
        </div>
      </div>
    </section>
  );
}
