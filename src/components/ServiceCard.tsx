"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface ServiceCardData {
  id: string;
  image: string;
  category: string;
  title: string;
  location: string;
  rating: number;
  currentPrice: string;
  originalPrice: string;
  isFavorite?: boolean;
}

interface ServiceCardProps {
  service: ServiceCardData;
  onBookNow?: (serviceId: string) => void;
  onToggleFavorite?: (serviceId: string) => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onBookNow,
  onToggleFavorite,
  className = "",
}) => {
  const [isFavorite, setIsFavorite] = useState(service.isFavorite || false);

  const handleToggleFavorite = () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    onToggleFavorite?.(service.id);
  };

  const handleBookNow = () => {
    onBookNow?.(service.id);
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${className}`}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Category Tag */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-[#1e3a8a]">
            {service.category}
          </span>
        </div>

        {/* Heart Icon */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
        >
          <svg
            className={`w-4 h-4 transition-colors duration-200 ${
              isFavorite ? "text-red-500 fill-current" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Location and Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-600">{service.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">
              {service.rating}
            </span>
          </div>
        </div>

        {/* Service Title */}
        <h3 className="font-bold text-[#1e3a8a] text-lg leading-tight group-hover:text-[#f97316] transition-colors duration-200">
          {service.title}
        </h3>

        {/* Pricing */}
        <div className="space-y-1">
          <p className="text-sm text-gray-600">Starting from</p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#1e3a8a]">
              {service.currentPrice}
            </span>
            <span className="text-lg text-gray-400 line-through">
              {service.originalPrice}
            </span>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="flex justify-end">
          <button
            onClick={handleBookNow}
            className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <span>Book Now</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
