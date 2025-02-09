"use client";
import AuthModal from "../Auth/AuthModal";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,rgba(41,98,255,0.1),rgba(174,189,229,0.3))]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-darkBlue mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Smart Parking Solutions with ParkWize
          </motion.h1>
          <motion.p
            className="text-lg text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find and reserve parking spots in real-time. Save time and eliminate
            parking hassles with our smart technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 rounded-xl bg-white text-darkBlue hover:bg-gray-200"
            >
              Get Started
            </button>
            </div>
          </motion.div>
          <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>

      {/* Zigzag Moving Car Animation */}
      <div className="absolute bottom-20 w-full">
      <motion.div
  className="flex items-center justify-center text-primary"
  animate={{
    x: ["-10%", "0%", "20%", "40%", "60%", "80%", "100%"], // Moves right
    y: ["0%", "-10%", "0%", "10%", "0%", "-10%", "0%"], // Moves up and down
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
>
  <Car className="h-16 w-16 text-darkBlue" />
</motion.div>

      </div>
    </div>
  );
}
