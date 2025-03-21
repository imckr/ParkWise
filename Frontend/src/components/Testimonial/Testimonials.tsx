"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    text: "ParkWize has completely transformed how I park in the city. No more circling blocks looking for spots!",
    author: "Sarah Johnson",
    role: "Daily Commuter",
  },
  {
    text: "The real-time updates and automated payments make parking hassle-free. Highly recommended!",
    author: "Michael Chen",
    role: "Business Owner",
  },
  {
    text: "Smart security features give me peace of mind whenever I park my car. Great service!",
    author: "Emily Rodriguez",
    role: "City Resident",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((current) => (current + newDirection + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [paginate]) // Added paginate to dependencies

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-darkBlue mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied users
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[300px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full"
              >
                <div className="text-center px-8">
                  <Quote className="mx-auto h-12 w-12 text-primary/20 mb-6" />
                  <p className="text-xl md:text-2xl text-gray-600 mb-8">{testimonials[current].text}</p>
                  <div>
                    <p className="font-semibold text-darkBlue">{testimonials[current].author}</p>
                    <p className="text-gray-500">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-gray-800 hover:text-primary transition-colors"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-gray-800 hover:text-primary transition-colors"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

