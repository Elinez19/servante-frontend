"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProviderSortOption } from "@/types/provider";

interface ProviderSortProps {
  value: ProviderSortOption;
  onChange: (value: ProviderSortOption) => void;
}

export const ProviderSort: React.FC<ProviderSortProps> = ({
  value,
  onChange,
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px] border-gray-300 focus:border-black focus:ring-black">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="rating-high-low">Highest Rated</SelectItem>
        <SelectItem value="rating-low-high">Lowest Rated</SelectItem>
        <SelectItem value="jobs-completed">Most Jobs</SelectItem>
        <SelectItem value="hourly-rate-low-high">Price: Low to High</SelectItem>
        <SelectItem value="hourly-rate-high-low">Price: High to Low</SelectItem>
        <SelectItem value="newest">Newest Members</SelectItem>
      </SelectContent>
    </Select>
  );
};
