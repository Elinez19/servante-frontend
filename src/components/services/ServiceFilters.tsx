"use client";

import React from "react";
import { CategoryInfo } from "@/types/service";
import { Filter } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/customs/Button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ServiceFiltersProps {
  categories: CategoryInfo[];
  selectedCategory: string;
  onCategoryChange: (slug: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
  priceRange: { min: number; max: number };
  onPriceRangeChange: (range: { min: number; max: number }) => void;
  className?: string;
  onResetAll?: () => void;
}

export const ServiceFilters: React.FC<ServiceFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  search,
  onSearchChange,
  minRating,
  onMinRatingChange,
  priceRange,
  onPriceRangeChange,
  className = "",
  onResetAll,
}) => {
  const ratings = [
    { value: 0, label: "All Ratings" },
    { value: 4, label: "4+ Stars" },
    { value: 4.5, label: "4.5+ Stars" },
    { value: 4.8, label: "4.8+ Stars" },
  ];

  const priceRanges = [
    { min: 0, max: 1000, label: "All Prices" },
    { min: 0, max: 75, label: "Under $75" },
    { min: 75, max: 150, label: "$75 - $150" },
    { min: 150, max: 1000, label: "$150+" },
  ];

  const hasActiveFilters =
    selectedCategory !== "all" ||
    minRating > 0 ||
    priceRange.min > 0 ||
    priceRange.max < 1000;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search */}
      <div className="lg:block">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-blue-900">
              Search By Keyword
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Input
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="What are you looking for?"
                className="bg-white border-blue-200 focus-visible:ring-orange-500"
              />
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Category Tabs */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base text-blue-900 flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedCategory} onValueChange={onCategoryChange}>
            <ScrollArea className="w-full">
              <TabsList className="w-full inline-flex flex-wrap gap-2 bg-transparent p-0">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.slug}
                    value={category.slug}
                    className="rounded-full border border-blue-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 hover:bg-orange-50 text-sm px-3 py-1.5"
                  >
                    <span className="truncate max-w-[160px]">
                      {category.name}
                    </span>
                    <span className="ml-1 text-[11px] opacity-75">
                      ({category.serviceCount})
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>
          </Tabs>
        </CardContent>
      </Card>

      {/* Desktop Sidebar Filters */}
      <div className="hidden lg:block space-y-4">
        {/* Rating Filter Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-blue-900">
              Minimum Rating
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {ratings.map((rating) => (
              <Label
                key={rating.value}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="rating"
                  value={rating.value}
                  checked={minRating === rating.value}
                  onChange={() => onMinRatingChange(rating.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-blue-900 transition-colors duration-200">
                  {rating.label}
                </span>
              </Label>
            ))}
          </CardContent>
        </Card>

        {/* Price Range Filter Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-blue-900">
              Price Range
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {priceRanges.map((range) => (
              <Label
                key={`${range.min}-${range.max}`}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="price"
                  checked={
                    priceRange.min === range.min && priceRange.max === range.max
                  }
                  onChange={() =>
                    onPriceRangeChange({ min: range.min, max: range.max })
                  }
                  className="w-4 h-4 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-blue-900 transition-colors duration-200">
                  {range.label}
                </span>
              </Label>
            ))}
          </CardContent>
        </Card>

        {/* Reset Filters Button */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              onResetAll?.();
              if (!onResetAll) {
                onCategoryChange("all");
                onMinRatingChange(0);
                onPriceRangeChange({ min: 0, max: 1000 });
              }
            }}
            className="w-full"
          >
            Reset All Filters
          </Button>
        )}
      </div>
    </div>
  );
};
