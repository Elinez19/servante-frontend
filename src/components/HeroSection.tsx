"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  const [location, setLocation] = useState("New York");
  const [service, setService] = useState("");

  const handleSearch = () => {
    // Handle search functionality
    console.log("Searching for:", service, "in", location);
  };

  return (
    <section
      className={`relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f97316] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#1e3a8a] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#1e3a8a]">
                  Choose Experts to Complete Your
                </span>
                <br />
                <span className="text-[#f97316]">Job</span>
                <span className="text-[#1e3a8a]"> Done</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Explore our marketplace to find top-rated professionals in your
              area. Compare reviews, check availability, and book services with
              confidence —all in one place.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-2xl">
              {/* Location Input */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg flex-shrink-0">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 w-24"
                  placeholder="New York"
                />
              </div>

              {/* Service Input */}
              <div className="flex-1 px-4 py-3">
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
                  placeholder="Find your service here"
                />
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-[#f97316] hover:bg-[#ea580c] text-white p-3 rounded-lg transition-colors duration-200 flex-shrink-0 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="sm:hidden">Search</span>
              </button>
            </div>

            {/* Customer Testimonials */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#f97316] border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="text-[#f97316] font-bold">2k+</span>
                <span className="text-gray-700 font-semibold"> Customers</span>
                <span className="text-gray-600">
                  {" "}
                  Satisfied with Servat services
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Content */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Image Container */}
            <div className="relative">
              {/* Hexagonal Frame */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                {/* Hexagon Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-3xl transform rotate-12"></div>
                <div className="absolute inset-2 bg-gray-100 rounded-3xl transform rotate-12"></div>

                {/* Main Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                    <Image
                      src="/banner-girl-1.png"
                      alt="Professional cleaning service worker"
                      fill
                      className="object-cover rounded-2xl"
                      priority
                    />
                  </div>
                </div>

                {/* Cleaning Icons */}
                <div className="absolute top-8 left-8 z-20">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-8 right-8 z-20">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Review Card */}
                <div className="absolute bottom-8 right-8 z-20 bg-white rounded-xl shadow-lg p-4 max-w-48">
                  <h3 className="font-bold text-[#1e3a8a] text-sm mb-2">
                    Cleaning Reviews
                  </h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#f97316] text-lg">★</span>
                    <span className="font-bold text-gray-700">5.0</span>
                    <span className="font-semibold text-gray-700">Great</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <span className="font-semibold">400+</span> More
                  </div>
                  <div className="text-xs text-gray-500">1 day ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
