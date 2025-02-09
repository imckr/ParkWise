"use client"

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { SignInButton, SignUpButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

export default function AuthModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Background Blur */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50" onClick={onClose}></div>

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg z-50 w-96"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          <X className="w-6 h-6" />
        </button>

        {/* Sign In / Sign Up */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-darkBlue mb-4">Welcome to ParkWize</h2>
          <p className="text-gray-600 mb-6">Sign in or create an account to continue.</p>

          <SignedOut>
            <SignInButton mode="modal" className="w-full mb-3 px-4 py-2 bg-darkBlue text-white rounded-lg" />
            <SignUpButton mode="modal" className="w-full px-4 py-2 bg-gray-200 text-darkBlue rounded-lg" />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </motion.div>
    </>
  );
}
