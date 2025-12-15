'use client'
import React from "react";
import { Search, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import "../App.css"

export default function InteriorLanding() {
  return (
    <div className="min-h-screen bg-[#1f2427] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-xl font-bold">Panto</h1>
        <ul className="hidden md:flex gap-8 text-sm text-gray-200">
          <li className="cursor-pointer">Furniture</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="relative">
          <ShoppingBag size={20} />
          <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full px-1">0</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 md:px-16 pt-20 pb-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Make Your Interior More <br /> Minimalistic & Modern
        </motion.h2>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto text-sm md:text-base">
          Turn your room with panto into a lot more minimalist and modern with ease and speed.
        </p>

        {/* Search */}
        <div className="mt-10 flex items-center justify-center">
          <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 w-72">
            <input
              placeholder="Search furniture"
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <button className="bg-orange-500 p-2 rounded-full">
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Sofa Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          src="/sofa.png"
          alt="sofa"
          className="mx-auto mt-16 max-w-4xl"
        />
      </section>

      {/* Why Choosing Us */}
      <section className="bg-white text-gray-800 px-6 md:px-20 py-20 grid md:grid-cols-4 gap-10">
        <h3 className="text-3xl font-bold md:col-span-1">Why <br /> Choosing Us</h3>

        {[{
          title: "Luxury facilities",
          desc: "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities."
        },{
          title: "Affordable Price",
          desc: "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities."
        },{
          title: "Many Choices",
          desc: "We provide many unique workspace choices so that you can choose the workspace to your liking."
        }].map((item, i) => (
          <div key={i} className="space-y-3">
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
            <button className="text-orange-500 text-sm font-medium">More Info →</button>
          </div>
        ))}
      </section>
    </div>
  );
}
