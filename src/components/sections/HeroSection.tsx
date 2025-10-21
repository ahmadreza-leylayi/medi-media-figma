"use client";
import { motion } from "framer-motion";
import ShopButton from "../ui/ShopButton";

export default function HeroSection() {
  return (
    <section className="bg-[url('/background/bg-3.png')] md:bg-[url('/background/bg-0.jpg')] bg-cover bg-center bg-dark text-light overflow-hidden h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2 space-y-6 text-center md:text-left ml-8 lg:ml-30 gap-4 flex flex-col items-center md:items-start"
        >
          <h1 className="w-fit text-4xl md:text-6xl font-serif border-b-4 p-2 border-[#C08A46]">Fertuzy</h1>
          <p className="text-muted max-w-md mx-auto md:mx-0 font-serif text-[#C08A46]">
            Exclusive Offer - 25% Off This Week
          </p>
          <p className="lg:w-[67%] w-[40%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo inventore repellat laborum soluta deserunt suscipit officia ipsa eum reprehenderit veritatis ut ullam cum natus, labore ratione obcaecati veniam itaque?</p>
    <div className="flex items-center gap-4">
                  <span className="text-sm font-serif">Starting at :</span>
          <p className="text-primary text-3xl font-semibold text-[#C08A46]">$450.00</p>
    </div>
          <ShopButton text="Shop Now"/>
   
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >

        </motion.div>
      </div>
    </section>
  );
}
