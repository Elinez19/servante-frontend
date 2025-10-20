import { ServiceData, SortOption } from "@/types/service";

interface FilterOptions {
  category?: string;
  search?: string;
  minRating?: number;
  priceMin?: number;
  priceMax?: number;
  sortBy?: SortOption;
}

export function filterAndSortServices(
  services: ServiceData[],
  options: FilterOptions
): ServiceData[] {
  let filtered = [...services];

  // Category filter
  if (options.category && options.category !== "all") {
    filtered = filtered.filter(
      (service) => service.categorySlug === options.category
    );
  }

  // Search filter
  if (options.search) {
    const query = options.search.toLowerCase();
    filtered = filtered.filter(
      (service) =>
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query)
    );
  }

  // Rating filter
  if (options.minRating && options.minRating > 0) {
    filtered = filtered.filter(
      (service) => service.rating >= options.minRating
    );
  }

  // Price range filter
  if (options.priceMin !== undefined && options.priceMax !== undefined) {
    filtered = filtered.filter(
      (service) =>
        service.currentPrice >= options.priceMin! &&
        service.currentPrice <= options.priceMax!
    );
  }

  // Sorting
  switch (options.sortBy) {
    case "price-low-high":
      filtered.sort((a, b) => a.currentPrice - b.currentPrice);
      break;
    case "price-high-low":
      filtered.sort((a, b) => b.currentPrice - a.currentPrice);
      break;
    case "rating-high-low":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      // Keep original order (newest first in mock data)
      break;
    case "popularity":
    default:
      filtered.sort((a, b) => b.reviewCount - a.reviewCount);
      break;
  }

  return filtered;
}

export function paginateServices(
  services: ServiceData[],
  page: number,
  itemsPerPage: number
) {
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedServices = services.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(services.length / itemsPerPage);

  return {
    services: paginatedServices,
    totalPages,
    totalItems: services.length,
  };
}
