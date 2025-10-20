"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ServiceCard, ServiceCardData } from "./ServiceCard";

interface FeaturedServicesProps {
  className?: string;
  title?: string;
  services?: ServiceCardData[];
  onBookNow?: (serviceId: string) => void;
  onToggleFavorite?: (serviceId: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  className = "",
  title = "Included Services",
  services,
  onBookNow,
  onToggleFavorite,
}) => {
  // Default services data
  const defaultServices: ServiceCardData[] = [
    {
      id: "cleaning-1",
      image:
        "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c6?w=400&h=300&fit=crop&crop=center",
      category: "Cleaning",
      title: "Office Cleaning Service From Best Cleaner",
      location: "New York, USA",
      rating: 4.5,
      currentPrice: "$24.00",
      originalPrice: "$32.00",
      isFavorite: false,
    },
    {
      id: "construction-1",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
      category: "Construction",
      title: "Dreams are meant to come true easily",
      location: "New York, USA",
      rating: 4.5,
      currentPrice: "$28.00",
      originalPrice: "$32.00",
      isFavorite: false,
    },
    {
      id: "carpenter-1",
      image:
        "https://images.unsplash.com/photo-1504148455328-c3762d087bdb?w=400&h=300&fit=crop&crop=center",
      category: "Carpenter",
      title: "Masterful Carpentry, Delivered with Style",
      location: "New York, USA",
      rating: 4.5,
      currentPrice: "$24.00",
      originalPrice: "$32.00",
      isFavorite: false,
    },
  ];

  const servicesToShow = services || defaultServices;

  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Featured Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <ArrowRight className="w-4 h-4 text-[#f97316]" />
            <span className="text-[#f97316] text-sm font-bold uppercase tracking-wide">
              Featured
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
            {title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesToShow.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBookNow={onBookNow}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 mx-auto"
          >
            <span>View All Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
