"use client";
import React, { useState } from "react";
import {
  Calendar,
  CreditCard,
  HelpCircle,
  Menu,
  X,
  Home,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const UserDashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuItems = [
    { title: "User Profile", icon: Home },
    { title: "Your Bookings", icon: Calendar },
    { title: "Transactions", icon: CreditCard },
    { title: "Support", icon: HelpCircle },
    { title: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 
        transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-64" : "w-16"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Toggle Sidebar Button */}
          <button
            onClick={toggleSidebar}
            className="absolute -right-5 top-6 p-2 bg-indigo-600 text-white rounded-full shadow-md"
          >
            {isSidebarOpen ? (
              <ChevronLeft className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </button>

          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b">
            <h1
              className={`text-xl font-bold text-indigo-600 transition-all ${
                isSidebarOpen ? "block" : "hidden"
              }`}
            >
              ParkWise
            </h1>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4">
            {menuItems.map(({ title, icon: Icon }) => (
              <button
                key={title}
                className="flex items-center w-full p-3 mb-2 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600"
              >
                <Icon className="w-6 h-6" />
                <span
                  className={`ml-3 transition-all ${
                    isSidebarOpen ? "block" : "hidden"
                  }`}
                >
                  {title}
                </span>
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <button className="flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600">
              <LogOut className="w-6 h-6" />
              <span
                className={`ml-3 transition-all ${
                  isSidebarOpen ? "block" : "hidden"
                }`}
              >
                Logout
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 flex-1 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center px-6 py-4">
            <h2 className="ml-4 text-xl font-semibold text-gray-800">
              Dashboard
            </h2>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Your Bookings Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-black">
                  Your Bookings
                </h3>
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
              <p className="text-gray-600">Central Parking - Spot A12</p>
              <p className="text-sm text-gray-500">Today, 2:00 PM - 5:00 PM</p>
              <button className="mt-4 w-full py-2 text-sm text-indigo-600 hover:text-indigo-700">
                View All Bookings
              </button>
            </div>

            {/* Recent Transactions Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-black">
                  Recent Transactions
                </h3>
                <CreditCard className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Parking Payment</p>
                  <p className="text-sm text-gray-500">Today at 1:45 PM</p>
                </div>
                <span className="font-medium">$15.00</span>
              </div>
              <button className="mt-4 w-full py-2 text-sm text-indigo-600 hover:text-indigo-700">
                View All Transactions
              </button>
            </div>

            {/* Support Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-black">Support</h3>
                <HelpCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <p className="text-gray-600">Need help with your booking?</p>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                Contact Support
              </button>
            </div> 
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashBoard;
 