"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SortOption } from "@/types/service";

interface FilterState {
  category: string;
  search: string;
  sort: SortOption;
  page: number;
  minRating: number;
  priceMin: number;
  priceMax: number;
}

const DEFAULT_FILTERS: FilterState = {
  category: "all",
  search: "",
  sort: "popularity",
  page: 1,
  minRating: 0,
  priceMin: 0,
  priceMax: 1000,
};

export function useServiceFilters(basePath: string = "/services") {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from URL params
  const [filters, setFilters] = useState<FilterState>(() => ({
    category: searchParams.get("category") || DEFAULT_FILTERS.category,
    search: searchParams.get("search") || DEFAULT_FILTERS.search,
    sort: (searchParams.get("sort") as SortOption) || DEFAULT_FILTERS.sort,
    page: parseInt(searchParams.get("page") || String(DEFAULT_FILTERS.page)),
    minRating: parseFloat(
      searchParams.get("minRating") || String(DEFAULT_FILTERS.minRating)
    ),
    priceMin: parseInt(
      searchParams.get("priceMin") || String(DEFAULT_FILTERS.priceMin)
    ),
    priceMax: parseInt(
      searchParams.get("priceMax") || String(DEFAULT_FILTERS.priceMax)
    ),
  }));

  // Update URL when filters change
  const updateURL = useCallback(
    (newFilters: FilterState) => {
      const params = new URLSearchParams();

      if (newFilters.category !== "all")
        params.set("category", newFilters.category);
      if (newFilters.search) params.set("search", newFilters.search);
      if (newFilters.sort !== "popularity") params.set("sort", newFilters.sort);
      if (newFilters.page > 1) params.set("page", String(newFilters.page));
      if (newFilters.minRating > 0)
        params.set("minRating", String(newFilters.minRating));
      if (newFilters.priceMin > 0)
        params.set("priceMin", String(newFilters.priceMin));
      if (newFilters.priceMax < 1000)
        params.set("priceMax", String(newFilters.priceMax));

      const queryString = params.toString();
      router.push(queryString ? `${basePath}?${queryString}` : basePath, {
        scroll: false,
      });
    },
    [router, basePath]
  );

  // Update filters and URL
  const updateFilters = useCallback(
    (updates: Partial<FilterState>, resetPage = true) => {
      const newFilters = {
        ...filters,
        ...updates,
        page: resetPage ? 1 : updates.page || filters.page,
      };
      setFilters(newFilters);
      updateURL(newFilters);
    },
    [filters, updateURL]
  );

  // Reset all filters
  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    router.push(basePath);
  }, [router, basePath]);

  // Check if any filters are active
  const hasActiveFilters =
    filters.category !== "all" ||
    filters.search !== "" ||
    filters.minRating > 0 ||
    filters.priceMin > 0 ||
    filters.priceMax < 1000;

  return {
    filters,
    updateFilters,
    resetFilters,
    hasActiveFilters,
  };
}
