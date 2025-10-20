import { ProviderData, ProviderSortOption } from "@/types/provider";

interface FilterOptions {
  category?: string;
  search?: string;
  minRating?: number;
  hourlyRateMin?: number;
  hourlyRateMax?: number;
  availability?: string;
  verifiedOnly?: boolean;
  sortBy?: ProviderSortOption;
}

export function filterAndSortProviders(
  providers: ProviderData[],
  options: FilterOptions
): ProviderData[] {
  let filtered = [...providers];

  // Filter by category
  if (options.category && options.category !== "all") {
    filtered = filtered.filter((provider) =>
      provider.specialties.some(
        (specialty) =>
          specialty.toLowerCase().includes(options.category!.toLowerCase()) ||
          provider.topSkills.some((skill) =>
            skill.toLowerCase().includes(options.category!.toLowerCase())
          )
      )
    );
  }

  // Filter by search query
  if (options.search) {
    const searchLower = options.search.toLowerCase();
    filtered = filtered.filter(
      (provider) =>
        provider.name.toLowerCase().includes(searchLower) ||
        provider.bio.toLowerCase().includes(searchLower) ||
        provider.specialties.some((s) =>
          s.toLowerCase().includes(searchLower)
        ) ||
        provider.topSkills.some((s) => s.toLowerCase().includes(searchLower)) ||
        provider.location.toLowerCase().includes(searchLower)
    );
  }

  // Filter by minimum rating
  if (options.minRating && options.minRating > 0) {
    filtered = filtered.filter(
      (provider) => provider.rating >= options.minRating!
    );
  }

  // Filter by hourly rate range
  if (
    options.hourlyRateMin !== undefined &&
    options.hourlyRateMax !== undefined
  ) {
    filtered = filtered.filter((provider) => {
      const rate = provider.hourlyRate || 0;
      return rate >= options.hourlyRateMin! && rate <= options.hourlyRateMax!;
    });
  }

  // Filter by availability
  if (options.availability && options.availability !== "all") {
    filtered = filtered.filter(
      (provider) => provider.availability === options.availability
    );
  }

  // Filter by verified status
  if (options.verifiedOnly) {
    filtered = filtered.filter((provider) => provider.verified);
  }

  // Sort
  if (options.sortBy) {
    filtered.sort((a, b) => {
      switch (options.sortBy) {
        case "rating-high-low":
          return b.rating - a.rating;
        case "rating-low-high":
          return a.rating - b.rating;
        case "jobs-completed":
          return b.completedJobs - a.completedJobs;
        case "hourly-rate-low-high":
          return (a.hourlyRate || 0) - (b.hourlyRate || 0);
        case "hourly-rate-high-low":
          return (b.hourlyRate || 0) - (a.hourlyRate || 0);
        case "newest":
          return (
            new Date(b.memberSince).getTime() -
            new Date(a.memberSince).getTime()
          );
        default:
          return 0;
      }
    });
  }

  return filtered;
}

export function paginateProviders(
  providers: ProviderData[],
  page: number,
  itemsPerPage: number
): { providers: ProviderData[]; totalPages: number } {
  const totalPages = Math.ceil(providers.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProviders = providers.slice(startIndex, endIndex);

  return {
    providers: paginatedProviders,
    totalPages,
  };
}
