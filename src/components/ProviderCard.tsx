"use client";

import React from "react";
import {
  MapPin,
  Star,
  CheckCircle2,
  Clock,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ProviderData } from "@/types/provider";

interface ProviderCardProps {
  provider: ProviderData;
  onContact?: (providerId: string) => void;
  className?: string;
  layout?: "grid" | "list";
}

export const ProviderCard: React.FC<ProviderCardProps> = ({
  provider,
  onContact,
  className = "",
  layout = "grid",
}) => {
  const handleContact = () => {
    onContact?.(provider.id);
  };

  const isList = layout === "list";
  const href = `/providers/${provider.id}`;

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "busy":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getAvailabilityText = (status: string) => {
    switch (status) {
      case "available":
        return "Available";
      case "busy":
        return "Busy";
      case "offline":
        return "Offline";
      default:
        return "Unknown";
    }
  };

  return (
    <Link href={href} className="block">
      <Card
        className={`overflow-hidden group border-gray-200 hover:shadow-xl transition-all duration-300 ${
          isList ? "flex" : ""
        } cursor-pointer bg-white ${className}`}
      >
        {/* Profile Section */}
        <div className={isList ? "w-[320px] p-6" : "p-6"}>
          <div className="flex items-start gap-4">
            <div className="relative">
              <Avatar className="w-16 h-16 border-2 border-gray-100">
                <AvatarImage src={provider.avatar} alt={provider.name} />
                <AvatarFallback className="bg-black text-white">
                  {provider.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {/* Availability Indicator */}
              <div
                className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${getAvailabilityColor(
                  provider.availability
                )}`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-gray-900 text-lg leading-tight truncate">
                  {provider.name}
                </h3>
                {provider.verified && (
                  <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                )}
              </div>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {provider.location}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">
                    {provider.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({provider.reviewCount})
                  </span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-600">
                  {provider.successRate}% Success
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-600 mt-4 line-clamp-2">
            {provider.bio}
          </p>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mt-4">
            {provider.specialties.slice(0, 3).map((specialty, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats & Info Section */}
        <div
          className={`${
            isList ? "flex-1 p-6 border-l border-gray-100" : "p-6 pt-0"
          }`}
        >
          <div className={isList ? "h-full flex flex-col" : ""}>
            {/* Stats Grid */}
            <div
              className={`grid ${
                isList ? "grid-cols-2 gap-4" : "grid-cols-3 gap-3"
              } mb-4`}
            >
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Briefcase className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">
                  {provider.completedJobs}
                </div>
                <div className="text-xs text-gray-600">Jobs Done</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Clock className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                <div className="text-xs font-semibold text-gray-900 truncate">
                  {provider.responseTime}
                </div>
                <div className="text-xs text-gray-600">Response</div>
              </div>
              {!isList && (
                <div className="text-center p-3 bg-black rounded-lg">
                  <div className="text-lg font-bold text-white">
                    ${provider.hourlyRate}
                  </div>
                  <div className="text-xs text-gray-300">Per Hour</div>
                </div>
              )}
            </div>

            {/* Top Skills */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Top Skills
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {provider.topSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-white border border-gray-200 rounded-md text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Badges */}
            {provider.badges && provider.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {provider.badges.map((badge, idx) => (
                  <Badge
                    key={idx}
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <div className={isList ? "mt-auto" : ""}>
              <div className="flex items-center justify-between gap-3">
                {isList && (
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-900">
                      ${provider.hourlyRate}
                    </div>
                    <div className="text-sm text-gray-600">Per Hour</div>
                  </div>
                )}
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleContact();
                  }}
                  className="bg-black hover:bg-gray-800 text-white flex-1 group-hover:shadow-lg transition-all"
                >
                  <span>Contact Provider</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-3 justify-center">
                <div
                  className={`w-2 h-2 rounded-full ${getAvailabilityColor(
                    provider.availability
                  )}`}
                />
                <span className="text-sm text-gray-600">
                  {getAvailabilityText(provider.availability)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
