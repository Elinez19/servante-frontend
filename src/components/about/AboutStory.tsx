"use client";

import React from "react";
import Image from "next/image";

interface AboutStoryProps {
  className?: string;
}

export const AboutStory: React.FC<AboutStoryProps> = ({ className = "" }) => {
  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/20 to-[#f97316]/20"></div>
              <Image
                src="/home_one_contact_img.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f97316] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1e3a8a] rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            {/* Section Label */}
            <div>
              <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] leading-tight">
              Building Trust Through Excellence Since Day One
            </h2>

            {/* Story Content */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to transform the service industry, Servat
                emerged from a simple observation: finding reliable service
                providers shouldn&apos;t be complicated or stressful.
              </p>

              <p>
                We started our journey by partnering with a handful of
                exceptional cleaning professionals who shared our commitment to
                quality and customer satisfaction. Today, we&apos;ve grown into
                a comprehensive platform connecting thousands of verified
                service providers with customers across multiple cities.
              </p>

              <p>
                Our AI-powered matching system ensures that every customer finds
                the perfect professional for their needs, while our rigorous
                vetting process guarantees that only the best providers join our
                network.
              </p>

              <p>
                What sets us apart is our unwavering commitment to both sides of
                the marketplace. We empower service providers with tools to grow
                their businesses while giving customers peace of mind through
                transparent reviews, instant booking, and reliable service
                delivery.
              </p>
            </div>

            {/* Key Milestone */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#f97316] mb-1">
                  2020
                </div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#f97316] mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-600">Cities Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
