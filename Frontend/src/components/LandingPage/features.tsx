"use client"

import { motion } from "framer-motion"
import { Clock, CreditCard, Shield, Map } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Get instant updates on parking spot availability in your area",
  },
  {
    icon: CreditCard,
    title: "Automated Payments",
    description: "Hassle-free digital payments for your parking sessions",
  },
  {
    icon: Shield,
    title: "Smart Security",
    description: "Advanced security measures to protect your vehicle",
  },
  {
    icon: Map,
    title: "Easy Navigation",
    description: "Turn-by-turn directions to your reserved parking spot",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-darkBlue mb-4">Smart Features for Smart Parking</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how ParkWize makes parking easier and more efficient with our innovative features
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-darkBlue" />
              </div>
              <h3 className="text-xl font-semibold text-darkBlue mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

