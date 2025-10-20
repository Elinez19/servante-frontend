export interface ProviderData {
  id: string;
  name: string;
  avatar: string;
  coverImage?: string;
  bio: string;
  specialties: string[];
  location: string;
  rating: number;
  reviewCount: number;
  completedJobs: number;
  responseTime: string;
  verified: boolean;
  badges?: string[];
  hourlyRate?: number;
  availability: "available" | "busy" | "offline";
  memberSince: string;
  languages?: string[];
  certifications?: string[];
  topSkills: string[];
  successRate: number;
}

export interface ProviderFilterOptions {
  categories: string[];
  location?: string;
  minRating: number;
  availability?: "available" | "busy" | "offline" | "all";
  verified?: boolean;
  searchQuery: string;
  hourlyRateMin?: number;
  hourlyRateMax?: number;
}

export type ProviderSortOption =
  | "rating-high-low"
  | "rating-low-high"
  | "jobs-completed"
  | "hourly-rate-low-high"
  | "hourly-rate-high-low"
  | "newest";

export interface ProviderCategory {
  name: string;
  slug: string;
  icon?: string;
  providerCount: number;
}
