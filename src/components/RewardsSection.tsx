"use client";

import React from "react";
import Image from "next/image";

interface RewardsSectionProps {
  className?: string;
}

export const RewardsSection: React.FC<RewardsSectionProps> = ({
  className = "",
}) => {
  const features = [
    "Free access to thousands of job opportunities",
    "Grow your business and client base",
    "Earn extra income on a flexible schedule",
    "No subscription or credit fees",
  ];

  return (
    <section className={`py-16 lg:py-24 bg-[#1e3a8a] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-white">
            {/* Header */}
            <div className="space-y-4">
              {/* Price Label */}
              <div className="flex items-center gap-2">
                <span className="text-[#f97316] text-sm font-bold">
                  &raquo; PRICES FOR SERVICES
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Understand Your Expenses, Reap the Rewards
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-white/90 leading-relaxed">
              Our Professional Website Setup service offers a comprehensive,
              fixed-price package designed.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#f97316] rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="pt-4">
              <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 group">
                <span>More Details</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Image with Overlays */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/reward.jpg"
                alt="Professional office workers"
                fill
                className="object-cover"
                priority
              />

              {/* Available On Demand Badge */}
              <div className="absolute top-8 left-8 z-20">
                <div className="relative w-24 h-24 bg-yellow-400 border-4 border-[#1e3a8a] rounded-full flex items-center justify-center">
                  {/* Rotated Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#1e3a8a] text-xs font-bold transform -rotate-12">
                      <div className="text-center">
                        <div>Service</div>
                        <div>Available</div>
                        <div>On Demand</div>
                      </div>
                    </div>
                  </div>
                  {/* Arrow Icon */}
                  <div className="absolute top-2 right-2">
                    <svg
                      className="w-4 h-4 text-[#1e3a8a]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Update Job Alert Notification */}
              <div className="absolute top-8 right-8 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">
                      Update job alert
                    </span>
                  </div>
                </div>
              </div>

              {/* Total Earnings Card */}
              <div className="absolute bottom-8 left-8 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg min-w-[200px]">
                  <div className="space-y-3">
                    {/* Title */}
                    <h3 className="text-sm font-medium text-gray-700">
                      Total earnings
                    </h3>

                    {/* Chart */}
                    <div className="h-12 flex items-end gap-1">
                      <div
                        className="w-3 bg-[#f97316] rounded-t"
                        style={{ height: "20%" }}
                      ></div>
                      <div
                        className="w-3 bg-[#f97316] rounded-t"
                        style={{ height: "40%" }}
                      ></div>
                      <div
                        className="w-3 bg-[#f97316] rounded-t"
                        style={{ height: "60%" }}
                      ></div>
                      <div
                        className="w-3 bg-[#f97316] rounded-t"
                        style={{ height: "80%" }}
                      ></div>
                      <div
                        className="w-3 bg-[#f97316] rounded-t"
                        style={{ height: "100%" }}
                      ></div>
                    </div>

                    {/* Amount */}
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-[#1e3a8a]">
                        $12,500
                      </div>
                      <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        20% vs last month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
