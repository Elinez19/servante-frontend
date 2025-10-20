export interface ServiceData {
  id: string;
  image: string;
  category: string;
  categorySlug: string;
  title: string;
  description: string;
  location: string;
  rating: number;
  reviewCount: number;
  currentPrice: number;
  originalPrice: number;
  discount?: number;
  isFavorite?: boolean;
  provider: {
    id: string;
    name: string;
    avatar?: string;
    verified: boolean;
  };
  features?: string[];
  duration?: string;
  availability?: string;
}

export interface FilterOptions {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  minRating: number;
  searchQuery: string;
}

export type SortOption =
  | "popularity"
  | "price-low-high"
  | "price-high-low"
  | "rating-high-low"
  | "newest";

export interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface CategoryInfo {
  name: string;
  slug: string;
  description: string;
  serviceCount: number;
}
