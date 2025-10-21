"use client";

import React from "react";

interface AboutHeroProps {
  className?: string;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ className = "" }) => {
  return (
    <section
      className={`relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f97316] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#1e3a8a] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-gray-600">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-[#f97316] font-medium">About Us</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#1e3a8a]">Revolutionizing</span>{" "}
              <span className="text-[#f97316]">Service</span>
              <br />
              <span className="text-[#1e3a8a]">Connections Worldwide</span>
            </h1>
          </div>

          {/* Mission Statement */}
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Servat, we believe everyone deserves access to reliable,
            professional services. Our AI-powered platform connects customers
            with top-rated service providers, making quality assistance just a
            few clicks away.
          </p>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600 text-sm">
                Every service provider is thoroughly vetted and verified to
                ensure excellence.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600 text-sm">
                Book services in minutes and get matched with providers
                instantly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                Fair Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                Transparent pricing with no hidden fees. You know exactly what
                you pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
