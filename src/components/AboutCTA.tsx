"use client";

import React from "react";
import Link from "next/link";

interface AboutCTAProps {
  className?: string;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({ className = "" }) => {
  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] relative overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#f97316] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f97316] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Experience
              <br />
              <span className="text-[#f97316]">Quality Service?</span>
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Servat for their
              service needs. Book your first service today and discover the
              difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              Browse Services
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 mt-12 border-t border-white/20">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold">24/7 Support</h3>
              <p className="text-white/80 text-sm">
                Our team is always here to help you
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold">
                Satisfaction Guaranteed
              </h3>
              <p className="text-white/80 text-sm">
                100% satisfaction or your money back
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-white font-semibold">Instant Booking</h3>
              <p className="text-white/80 text-sm">
                Book services in just a few clicks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
