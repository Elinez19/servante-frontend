"use client";

import React, { useMemo, Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceSearch } from "@/components/services/ServiceSearch";
import { ServiceSort } from "@/components/services/ServiceSort";
import { Pagination } from "@/components/common/Pagination";
import { getCategoryBySlug, servicesData } from "@/data/servicesData";
import { useServiceFilters } from "@/hooks/useServiceFilters";
import { filterAndSortServices, paginateServices } from "@/lib/filterServices";
import { Search, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ITEMS_PER_PAGE = 12;

function CategoryContent() {
  const params = useParams();
  const router = useRouter();
  const categorySlug = params.category as string;
  const category = getCategoryBySlug(categorySlug);

  const { filters, updateFilters, resetFilters } = useServiceFilters(
    `/services/${categorySlug}`
  );

  // Filter, sort, and paginate services for this category
  const { services: filteredServices, totalPages } = useMemo(() => {
    const filtered = filterAndSortServices(servicesData, {
      category: categorySlug, // Force category filter
      search: filters.search,
      minRating: filters.minRating,
      priceMin: filters.priceMin,
      priceMax: filters.priceMax,
      sortBy: filters.sort,
    });

    return paginateServices(filtered, filters.page, ITEMS_PER_PAGE);
  }, [categorySlug, filters]);

  // Redirect if category not found
  if (!category || category.slug === "all") {
    router.push("/services");
    return null;
  }

  const handlePageChange = (page: number) => {
    updateFilters({ page }, false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookNow = (serviceId: string) => {
    console.log("Booking service:", serviceId);
    // TODO: Implement booking logic
  };

  const handleToggleFavorite = (serviceId: string) => {
    console.log("Toggle favorite:", serviceId);
    // TODO: Implement favorite toggle logic
  };

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

  const hasFilters =
    filters.minRating !== 0 ||
    filters.priceMin !== 0 ||
    filters.priceMax !== 1000 ||
    filters.search !== "";

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-1 hover:text-[#1e3a8a]"
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/services" className="hover:text-[#1e3a8a]">
                    Services
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#1e3a8a] font-semibold">
                  {category.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">{category.name}</h1>
            <p className="text-lg text-gray-100">{category.description}</p>
            <p className="text-sm text-gray-200">
              {category.serviceCount} service
              {category.serviceCount !== 1 ? "s" : ""} available
            </p>

            <div className="max-w-xl mt-6">
              <ServiceSearch
                value={filters.search}
                onChange={(value) => updateFilters({ search: value })}
                placeholder={`Search ${category.name.toLowerCase()}...`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-4 space-y-4">
                {/* Rating Filter */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-[#1e3a8a]">
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
                          checked={filters.minRating === rating.value}
                          onChange={() =>
                            updateFilters({ minRating: rating.value })
                          }
                          className="w-4 h-4 text-[#1e3a8a] focus:ring-[#1e3a8a] cursor-pointer"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-[#1e3a8a] transition-colors duration-200">
                          {rating.label}
                        </span>
                      </Label>
                    ))}
                  </CardContent>
                </Card>

                {/* Price Range Filter */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-[#1e3a8a]">
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
                            filters.priceMin === range.min &&
                            filters.priceMax === range.max
                          }
                          onChange={() =>
                            updateFilters({
                              priceMin: range.min,
                              priceMax: range.max,
                            })
                          }
                          className="w-4 h-4 text-[#1e3a8a] focus:ring-[#1e3a8a] cursor-pointer"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-[#1e3a8a] transition-colors duration-200">
                          {range.label}
                        </span>
                      </Label>
                    ))}
                  </CardContent>
                </Card>

                {/* Reset Filters */}
                {hasFilters && (
                  <Button
                    variant="outline"
                    onClick={resetFilters}
                    className="w-full hover:bg-[#1e3a8a]/10 hover:text-[#1e3a8a] hover:border-[#1e3a8a]"
                  >
                    Reset All Filters
                  </Button>
                )}

                {/* Browse All Services */}
                <Button
                  asChild
                  className="w-full bg-[#f97316] hover:bg-[#ea580c]"
                >
                  <Link href="/services">Browse All Services</Link>
                </Button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Sort and Results Count */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-semibold text-[#1e3a8a]">
                    {filteredServices.length}
                  </span>{" "}
                  result{filteredServices.length !== 1 ? "s" : ""}
                  {filters.search && (
                    <span>
                      {" "}
                      for &quot;
                      <span className="font-semibold">{filters.search}</span>
                      &quot;
                    </span>
                  )}
                </p>
                <ServiceSort
                  value={filters.sort}
                  onChange={(value) => updateFilters({ sort: value }, false)}
                />
              </div>

              {/* Services Grid */}
              {filteredServices.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                    {filteredServices.map((service) => (
                      <ServiceCard
                        key={service.id}
                        service={{
                          id: service.id,
                          image: service.image,
                          category: service.category,
                          title: service.title,
                          location: service.location,
                          rating: service.rating,
                          currentPrice: `$${service.currentPrice.toFixed(2)}`,
                          originalPrice: `$${service.originalPrice.toFixed(2)}`,
                          isFavorite: service.isFavorite,
                        }}
                        onBookNow={handleBookNow}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  <Pagination
                    currentPage={filters.page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              ) : (
                /* No Results State */
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">
                    No services found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button
                    onClick={resetFilters}
                    className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                    size="lg"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CategoryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <CategoryContent />
    </Suspense>
  );
}
