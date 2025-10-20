"use client";

import React, { useMemo, useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceFilters } from "@/components/ServiceFilters";
import { ServiceSort } from "@/components/ServiceSort";
import { Pagination } from "@/components/Pagination";
import { servicesData, categories } from "@/data/servicesData";
import { useServiceFilters } from "@/hooks/useServiceFilters";
import { filterAndSortServices, paginateServices } from "@/lib/filterServices";
import { Search } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { List, LayoutGrid } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function ServicesPage() {
  const { filters, updateFilters, resetFilters } = useServiceFilters();
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  // Filter, sort, and paginate services
  const { services: filteredServices, totalPages } = useMemo(() => {
    const filtered = filterAndSortServices(servicesData, {
      category: filters.category,
      search: filters.search,
      minRating: filters.minRating,
      priceMin: filters.priceMin,
      priceMax: filters.priceMax,
      sortBy: filters.sort,
    });

    return paginateServices(filtered, filters.page, ITEMS_PER_PAGE);
  }, [filters]);

  // Handlers
  const handlePageChange = (page: number) => {
    updateFilters({ page }, false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookNow = (serviceId: string) => {
    console.log("Booking service:", serviceId);
  };

  const handleToggleFavorite = (serviceId: string) => {
    console.log("Toggle favorite:", serviceId);
  };

  return (
    <>
      {/* Minimal header */}
      <section className="border-b border-blue-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-gray-500">
            Home / <span className="text-gray-900">Services</span>
          </p>
          <h1 className="mt-2 text-3xl font-bold text-blue-900">Services</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-4">
                <ServiceFilters
                  categories={categories}
                  selectedCategory={filters.category}
                  onCategoryChange={(slug) => updateFilters({ category: slug })}
                  search={filters.search}
                  onSearchChange={(value: string) =>
                    updateFilters({ search: value })
                  }
                  minRating={filters.minRating}
                  onMinRatingChange={(rating) =>
                    updateFilters({ minRating: rating })
                  }
                  priceRange={{ min: filters.priceMin, max: filters.priceMax }}
                  onPriceRangeChange={(range) =>
                    updateFilters({ priceMin: range.min, priceMax: range.max })
                  }
                  onResetAll={resetFilters}
                />
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Mobile Filters */}
              <div className="lg:hidden mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <ServiceFilters
                      categories={categories}
                      selectedCategory={filters.category}
                      onCategoryChange={(slug) =>
                        updateFilters({ category: slug })
                      }
                      search={filters.search}
                      onSearchChange={(value: string) =>
                        updateFilters({ search: value })
                      }
                      minRating={filters.minRating}
                      onMinRatingChange={(rating) =>
                        updateFilters({ minRating: rating })
                      }
                      priceRange={{
                        min: filters.priceMin,
                        max: filters.priceMax,
                      }}
                      onPriceRangeChange={(range) =>
                        updateFilters({
                          priceMin: range.min,
                          priceMax: range.max,
                        })
                      }
                      onResetAll={resetFilters}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Sort and Results Count */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredServices.length}
                  </span>{" "}
                  results
                  {filters.search && (
                    <span>
                      {" "}
                      for &quot;
                      <span className="font-semibold">{filters.search}</span>
                      &quot;
                    </span>
                  )}
                </p>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:block">
                    <ServiceSort
                      value={filters.sort}
                      onChange={(value) =>
                        updateFilters({ sort: value }, false)
                      }
                    />
                  </div>
                  <div className="inline-flex rounded-md border border-blue-200 overflow-hidden">
                    <Button
                      variant={layout === "grid" ? "default" : "ghost"}
                      className={
                        layout === "grid"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "text-blue-700 hover:bg-orange-50"
                      }
                      onClick={() => setLayout("grid")}
                      aria-label="Grid view"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={layout === "list" ? "default" : "ghost"}
                      className={
                        layout === "list"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "text-blue-700 hover:bg-orange-50"
                      }
                      onClick={() => setLayout("list")}
                      aria-label="List view"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              {filteredServices.length > 0 ? (
                <>
                  {layout === "grid" ? (
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
                            originalPrice: `$${service.originalPrice.toFixed(
                              2
                            )}`,
                            isFavorite: service.isFavorite,
                          }}
                          onBookNow={handleBookNow}
                          onToggleFavorite={handleToggleFavorite}
                          layout="grid"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4 mb-12">
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
                            originalPrice: `$${service.originalPrice.toFixed(
                              2
                            )}`,
                            isFavorite: service.isFavorite,
                          }}
                          onBookNow={handleBookNow}
                          onToggleFavorite={handleToggleFavorite}
                          layout="list"
                        />
                      ))}
                    </div>
                  )}

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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No services found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button
                    onClick={resetFilters}
                    className="bg-orange-500 hover:bg-orange-600 text-white"
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
      <Footer />
    </>
  );
}
