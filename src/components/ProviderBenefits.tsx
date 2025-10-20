"use client";

import React from "react";
import {
  ShieldCheck,
  Award,
  Clock,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description:
      "All providers undergo thorough background checks and verification processes.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "Our providers maintain high standards with an average 96% success rate.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "Get responses within hours, not days. Most providers respond within 1-2 hours.",
  },
  {
    icon: TrendingUp,
    title: "Top-Rated Service",
    description:
      "Average provider rating of 4.8+ stars based on real customer reviews.",
  },
  {
    icon: Users,
    title: "Diverse Expertise",
    description:
      "Access to specialists across multiple service categories and skill sets.",
  },
  {
    icon: Star,
    title: "Transparent Pricing",
    description:
      "Clear hourly rates with no hidden fees. Pay only for completed work.",
  },
];

export const ProviderBenefits: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Providers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We carefully vet every provider to ensure you receive the best
            service experience possible
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-semibold">100% Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};
