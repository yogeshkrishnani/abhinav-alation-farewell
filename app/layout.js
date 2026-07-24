import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Thank You, Abhinav — A Farewell from Your Team",
  description:
    "A collection of memories, gratitude, and friendship from everyone who had the privilege of working with you at Alation.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-[#FAF9F6] text-[#2D2D2D] min-h-screen">
        {children}
      </body>
    </html>
  );
}
