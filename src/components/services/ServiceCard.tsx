"use client";

import React, { useState } from "react";
import { Heart, MapPin, Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/customs/Button";

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
  layout?: "grid" | "list";
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onBookNow,
  onToggleFavorite,
  className = "",
  layout = "grid",
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
  const isList = layout === "list";
  const href = `/services?book=${service.id}`;

  return (
    <Link href={href} className="block">
      <Card
        className={`p-0 gap-0 overflow-hidden group border-gray-200 hover:shadow-lg transition-all duration-300 ${
          isList ? "flex" : ""
        } cursor-pointer ${className}`}
      >
        {/* Image Section */}
        <div
          className={
            isList
              ? "relative w-[280px] h-[200px]"
              : "relative h-48 overflow-hidden"
          }
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/90 backdrop-blur-sm text-black border-transparent hover:bg-white">
              {service.category}
            </Badge>
          </div>

          {/* Heart Icon */}
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleToggleFavorite();
            }}
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white w-8 h-8 p-0"
          >
            <Heart
              className={`w-4 h-4 transition-colors duration-200 ${
                isFavorite ? "text-red-500 fill-current" : "text-gray-400"
              }`}
            />
          </Button>
        </div>

        {/* Content Section */}
        <div
          className={`${
            isList
              ? "p-5 flex-1 md:flex md:items-center md:justify-between gap-6"
              : "p-4"
          } ${isList ? "space-y-3 md:space-y-0" : "space-y-3"}`}
        >
          {/* Left: meta + title + features + price (grid) */}
          <div className={isList ? "flex-1 min-w-0" : "space-y-3"}>
            {/* Location (and rating for grid) */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {service.location}
                </span>
              </div>
              {!isList && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold text-gray-700">
                    {service.rating}
                  </span>
                </div>
              )}
            </div>

            {/* Service Title */}
            <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-black transition-colors duration-200 truncate">
              {service.title}
            </h3>

            {/* Feature chips (list only) */}
            {isList && (
              <div className="mt-2 flex flex-wrap gap-2">
                {(Array.isArray((service as any).features)
                  ? (service as any).features.slice(0, 3)
                  : []
                ).map((feat: string, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 rounded-md bg-blue-50 text-blue-800 border border-blue-100 px-3 py-1 text-sm"
                  >
                    {feat}
                  </span>
                ))}
                {Array.isArray((service as any).features) &&
                  (service as any).features.length > 3 && (
                    <span className="inline-flex items-center rounded-md bg-blue-50 text-blue-800 border border-blue-100 px-3 py-1 text-sm">
                      +{(service as any).features.length - 3}
                    </span>
                  )}
              </div>
            )}

            {/* Pricing */}
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Starting from</p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">
                  {service.currentPrice}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  {service.originalPrice}
                </span>
              </div>
            </div>
          </div>

          {/* Right: CTA only (list view) */}
          {isList ? (
            <div className="shrink-0 self-stretch flex items-end justify-end w-full md:w-auto md:min-w-[200px]">
              <Link
                href={href}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="flex justify-end">
              <Link
                href={href}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};
