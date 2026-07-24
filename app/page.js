import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import LetterSection from "@/components/LetterSection";
import Gallery from "@/components/Gallery";
import QuoteSection from "@/components/QuoteSection";
import FinalGoodbye from "@/components/FinalGoodbye";
import Footer from "@/components/Footer";
import { contributors } from "@/data/contributors";

export default function Home() {
  return (
    <main>
      <Hero />
      <Timeline />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2D2D2D]">
            From Your Team
          </h2>
          <p className="mt-4 text-[#2D2D2D]/60 font-inter text-lg">
            Letters from the people who will miss you most.
          </p>
        </div>

        {contributors.map((contributor, index) => (
          <LetterSection
            key={contributor.name}
            contributor={contributor}
            index={index}
          />
        ))}
      </section>

      <Gallery />
      <QuoteSection />
      <FinalGoodbye />
      <Footer />
    </main>
  );
}
