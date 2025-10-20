"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";
import { SortOption } from "@/types/service";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ServiceSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  className?: string;
}

export const ServiceSort: React.FC<ServiceSortProps> = ({
  value,
  onChange,
  className = "",
}) => {
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "popularity", label: "Most Popular" },
    { value: "price-low-high", label: "Price: Low to High" },
    { value: "price-high-low", label: "Price: High to Low" },
    { value: "rating-high-low", label: "Highest Rated" },
    { value: "newest", label: "Newest First" },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <ArrowUpDown className="w-5 h-5 text-blue-700" />
      <Select
        value={value}
        onValueChange={(val) => onChange(val as SortOption)}
      >
        <SelectTrigger className="w-[200px] bg-white border-blue-200 hover:bg-orange-50 focus:ring-blue-600">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="cursor-pointer hover:bg-black/10 focus:bg-black/10"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
