// "use client"
// import { SignInButton, SignedOut, SignedIn, UserButton } from '@clerk/nextjs'
// import { SignUpButton } from '@clerk/nextjs'
// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import Link from "next/link"
// import { Car } from "lucide-react"

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <motion.nav
//       className={`fixed top-0 w-full z-50 transition-colors duration-200 ${
//         scrolled ? "bg-[aebde5] backdrop-blur-md shadow-md" : "bg-darkBlue"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center space-x-2">
//             <Car className={`h-6 w-6 ${scrolled ? "text-darkBlue" : "text-white"}`} />
//             <span className={`text-xl font-bold ${scrolled ? "text-darkBlue" : "text-white"}`}>ParkWize</span>
//           </Link>
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="#features" className={`font-semibold transition-colors ${scrolled ? "text-darkBlue hover:underline" : "text-white hover:underline"}`}>
//               Features
//             </Link>
//             <Link href="#services" className={`font-semibold transition-colors ${scrolled ? "text-darkBlue hover:underline" : "text-white hover:underline"}`}>
//               Services
//             </Link>
//             <Link href="#pricing" className={`font-semibold transition-colors ${scrolled ? "text-darkBlue hover:underline" : "text-white hover:underline"}`}>
//               Pricing
//             </Link>
//             <Link href="#contact" className={`font-semibold transition-colors ${scrolled ? "text-darkBlue hover:underline" : "text-white hover:underline"}`}>
//               Contact
//             </Link>
//           </div>

//           <div>
//             <Link
//               href="#get-started"
//               className={`px-6 py-2 rounded-xl transition-colors ${
//                 scrolled
//                   ? "bg-darkBlue text-white"
//                   : "bg-white text-darkBlue hover:bg-gray-200"
//               }`}
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   )
// }



"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Car } from "lucide-react";
import AuthModal from "../Auth/AuthModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-colors duration-200 ${
          scrolled ? "bg-[aebde5] backdrop-blur-md shadow-md" : "bg-darkBlue"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Car className={`h-6 w-6 ${scrolled ? "text-darkBlue" : "text-white"}`} />
              <span className={`text-xl font-bold ${scrolled ? "text-darkBlue" : "text-white"}`}>ParkWize</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className={`font-semibold transition-colors ${
                  scrolled ? "text-darkBlue hover:underline" : "text-white hover:underline"
                }`}
              >
                Features
              </Link>
              <Link
                href="#services"
                className={`font-semibold transition-colors ${
                  scrolled ? "text-darkBlue hover:underline" : "text-white hover:underline"
                }`}
              >
                Services
              </Link>
              <Link
                href="#pricing"
                className={`font-semibold transition-colors ${
                  scrolled ? "text-darkBlue hover:underline" : "text-white hover:underline"
                }`}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className={`font-semibold transition-colors ${
                  scrolled ? "text-darkBlue hover:underline" : "text-white hover:underline"
                }`}
              >
                Contact
              </Link>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 rounded-xl bg-white text-darkBlue hover:bg-gray-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
