'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, User, Bell, Search } from "lucide-react";
import Link from "next/link";

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-64 p-6 shadow-md fixed h-full z-50"
      >
        <h2 className="text-xl font-bold text-blue-700 mb-6">ParkWise</h2>
        <nav className="space-y-4">
          <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100">
            <Menu className="h-5 w-5 text-blue-700" /> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100">
            <User className="h-5 w-5 text-blue-700" /> Accounts
          </Link>
          <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100">
            <Bell className="h-5 w-5 text-blue-700" /> Notifications
          </Link>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64 p-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
            <Menu className="h-6 w-6 text-blue-700" />
          </button>
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            <Bell className="h-6 w-6 text-blue-700 cursor-pointer" />
            <User className="h-8 w-8 text-blue-700 cursor-pointer" />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">Your Bookings</h3>
            <p className="text-gray-600">Manage your parking reservations.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <p className="text-gray-600">View your payment history.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="text-gray-600">Get assistance with your account.</p>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
