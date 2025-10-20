"use client";

import React from "react";
import Link from "next/link";
import { ProviderCard } from "@/components/ProviderCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { providersData } from "@/data/providersData";

export const FeaturedProviders: React.FC = () => {
  // Get top 3 providers by rating
  const topProviders = [...providersData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <Users className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">
              Trusted Professionals
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Top-Rated Providers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with verified professionals who are committed to delivering
            exceptional service quality
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {providersData.length}+
            </div>
            <div className="text-gray-600">Verified Providers</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {providersData.filter((p) => p.verified).length}
            </div>
            <div className="text-gray-600">Background Checked</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {Math.round(
                (providersData.reduce((acc, p) => acc + p.rating, 0) /
                  providersData.length) *
                  10
              ) / 10}
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Provider Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} layout="grid" />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/providers">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6"
            >
              View All Providers
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
