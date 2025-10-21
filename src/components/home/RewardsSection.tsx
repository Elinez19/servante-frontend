"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowUpRight, Bell, ArrowUp } from "lucide-react";

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
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="pt-4">
              <a
                href="/pricing"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 group"
              >
                <span>More Details</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
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
                    <ArrowUp className="w-4 h-4 text-[#1e3a8a]" />
                  </div>
                </div>
              </div>

              {/* Update Job Alert Notification */}
              <div className="absolute top-8 right-8 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-gray-600" />
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
                        <ArrowUp className="w-3 h-3" />
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
