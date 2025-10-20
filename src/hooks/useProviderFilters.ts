import { useState, useCallback } from "react";
import { ProviderSortOption } from "@/types/provider";

interface ProviderFilters {
  category: string;
  search: string;
  minRating: number;
  hourlyRateMin: number;
  hourlyRateMax: number;
  availability: string;
  verifiedOnly: boolean;
  sort: ProviderSortOption;
  page: number;
}

const DEFAULT_FILTERS: ProviderFilters = {
  category: "all",
  search: "",
  minRating: 0,
  hourlyRateMin: 0,
  hourlyRateMax: 1000,
  availability: "all",
  verifiedOnly: false,
  sort: "rating-high-low",
  page: 1,
};

export const useProviderFilters = () => {
  const [filters, setFilters] = useState<ProviderFilters>(DEFAULT_FILTERS);

  const updateFilters = useCallback(
    (newFilters: Partial<ProviderFilters>, resetPage = true) => {
      setFilters((prev) => ({
        ...prev,
        ...newFilters,
        page: resetPage ? 1 : prev.page,
      }));
    },
    []
  );

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  return {
    filters,
    updateFilters,
    resetFilters,
  };
};
