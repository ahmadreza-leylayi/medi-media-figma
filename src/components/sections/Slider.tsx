"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShopButton from "../ui/ShopButton";
import { SliderType } from "@/lib/types";

const slides:SliderType[] = [
  {
    id: 1,
    text: `"lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci vel gravida  dictum."`,
    author: "Rolex",
  },
  {
    id: 2,
    text: `" ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci vel gravida  dictum."`,
    author: "Omega",
  },
  {
    id: 3,
    text: `"Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla"`,
    author: "Cartier",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="bg-[#3A2A1A] text-center py-24 text-[#D9B679] relative overflow-hidden w-auto px-12">
      <div className="container mx-auto max-w-2xl px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-playfair leading-relaxed mb-4">
              {slides[current].text}
            </p>
            <p className="text-sm text-gray-300">{slides[current].author}</p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-y-0 left-5 flex items-center">
          <ShopButton onClick={prevSlide} text={"<"} className="w-8 h-8 md:w-12 md:h-12 text-center flex justify-center items-center" />
        </div>
        <div className="absolute inset-y-0 right-5 flex items-center">
          <ShopButton onClick={nextSlide} text={">"} className="w-8 h-8 md:w-12 md:h-12 text-center flex justify-center items-center" />
        </div>
      </div>
    </section>
  );
}
