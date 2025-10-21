"use client";

import React from "react";
import { Search, X, Star, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import Button from "@/components/customs/Button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProviderCategory } from "@/types/provider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface ProviderFiltersProps {
  categories: ProviderCategory[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
  hourlyRateRange: { min: number; max: number };
  onHourlyRateRangeChange: (range: { min: number; max: number }) => void;
  availability: string;
  onAvailabilityChange: (availability: string) => void;
  verifiedOnly: boolean;
  onVerifiedOnlyChange: (verified: boolean) => void;
  onResetAll: () => void;
}

export const ProviderFilters: React.FC<ProviderFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  search,
  onSearchChange,
  minRating,
  onMinRatingChange,
  hourlyRateRange,
  onHourlyRateRangeChange,
  availability,
  onAvailabilityChange,
  verifiedOnly,
  onVerifiedOnlyChange,
  onResetAll,
}) => {
  const ratings = [
    { value: 0, label: "All Ratings" },
    { value: 4, label: "4+ Stars" },
    { value: 4.5, label: "4.5+ Stars" },
    { value: 4.8, label: "4.8+ Stars" },
  ];

  const availabilityOptions = [
    { value: "all", label: "All Providers" },
    { value: "available", label: "Available Now" },
    { value: "busy", label: "Busy" },
  ];

  const hourlyRates = [
    { min: 0, max: 1000, label: "Any Rate" },
    { min: 0, max: 50, label: "Under $50" },
    { min: 50, max: 75, label: "$50 - $75" },
    { min: 75, max: 100, label: "$75 - $100" },
    { min: 100, max: 1000, label: "$100+" },
  ];

  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="text-sm font-semibold text-gray-900 mb-2 block">
          Search Providers
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by name or skill..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-10 border-gray-300 focus:border-black focus:ring-black"
          />
          {search && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <label className="text-sm font-semibold text-gray-900 mb-3 block">
          Category
        </label>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => onCategoryChange(category.slug)}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all text-left ${
                selectedCategory === category.slug
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <Badge
                variant="secondary"
                className={
                  selectedCategory === category.slug
                    ? "bg-white text-black"
                    : "bg-gray-100 text-gray-600"
                }
              >
                {category.providerCount}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div>
        <label className="text-sm font-semibold text-gray-900 mb-2 block">
          Availability
        </label>
        <Select value={availability} onValueChange={onAvailabilityChange}>
          <SelectTrigger className="w-full border-gray-300 focus:border-black focus:ring-black">
            <SelectValue placeholder="Select availability" />
          </SelectTrigger>
          <SelectContent>
            {availabilityOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Rating Filter */}
      <div>
        <label className="text-sm font-semibold text-gray-900 mb-2 block">
          Minimum Rating
        </label>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <button
              key={rating.value}
              onClick={() => onMinRatingChange(rating.value)}
              className={`w-full flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                minRating === rating.value
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              {rating.value > 0 && (
                <Star
                  className={`w-4 h-4 ${
                    minRating === rating.value
                      ? "text-yellow-300 fill-yellow-300"
                      : "text-yellow-400 fill-yellow-400"
                  }`}
                />
              )}
              <span className="font-medium">{rating.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Hourly Rate Filter */}
      <div>
        <label className="text-sm font-semibold text-gray-900 mb-2 block">
          Hourly Rate
        </label>
        <div className="space-y-2">
          {hourlyRates.map((rate) => (
            <button
              key={`${rate.min}-${rate.max}`}
              onClick={() =>
                onHourlyRateRangeChange({ min: rate.min, max: rate.max })
              }
              className={`w-full px-4 py-2.5 rounded-lg transition-all text-left ${
                hourlyRateRange.min === rate.min &&
                hourlyRateRange.max === rate.max
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              <span className="font-medium">{rate.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Verified Only Toggle */}
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-black" />
            <Label
              htmlFor="verified-only"
              className="text-sm font-semibold text-gray-900"
            >
              Verified Only
            </Label>
          </div>
          <Switch
            id="verified-only"
            checked={verifiedOnly}
            onCheckedChange={onVerifiedOnlyChange}
          />
        </div>
        <p className="text-xs text-gray-600 mt-2">
          Show only verified providers
        </p>
      </div>

      {/* Reset Button */}
      <Button
        onClick={onResetAll}
        variant="outline"
        size="md"
        className="w-full"
      >
        <X className="w-4 h-4 mr-2" />
        Reset All Filters
      </Button>
    </div>
  );
};
