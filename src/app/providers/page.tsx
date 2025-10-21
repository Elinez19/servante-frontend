"use client";

import React, { useMemo, useState } from "react";
import { ProviderCard } from "@/components/providers/ProviderCard";
import { ProviderFilters } from "@/components/providers/ProviderFilters";
import { ProviderSort } from "@/components/providers/ProviderSort";
import { Pagination } from "@/components/common/Pagination";
import { providersData, providerCategories } from "@/data/providersData";
import { useProviderFilters } from "@/hooks/useProviderFilters";
import {
  filterAndSortProviders,
  paginateProviders,
} from "@/lib/filterProviders";
import { Search, Users, List, LayoutGrid } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import Button from "@/components/customs/Button";
import { Card, CardContent } from "@/components/ui/card";

const ITEMS_PER_PAGE = 9;

export default function ProvidersPage() {
  const { filters, updateFilters, resetFilters } = useProviderFilters();
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  // Filter, sort, and paginate providers
  const { providers: filteredProviders, totalPages } = useMemo(() => {
    const filtered = filterAndSortProviders(providersData, {
      category: filters.category,
      search: filters.search,
      minRating: filters.minRating,
      hourlyRateMin: filters.hourlyRateMin,
      hourlyRateMax: filters.hourlyRateMax,
      availability: filters.availability,
      verifiedOnly: filters.verifiedOnly,
      sortBy: filters.sort,
    });

    return paginateProviders(filtered, filters.page, ITEMS_PER_PAGE);
  }, [filters]);

  // Handlers
  const handlePageChange = (page: number) => {
    updateFilters({ page }, false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContact = (providerId: string) => {
    console.log("Contacting provider:", providerId);
    // TODO: Implement contact functionality
  };

  return (
    <>
      {/* Header Section */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-gray-500">
            Home / <span className="text-gray-900">Providers</span>
          </p>
          <div className="mt-2 flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Our Service Providers
              </h1>
              <p className="mt-2 text-gray-600">
                Connect with verified professionals for your service needs
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
              <Users className="w-5 h-5 text-gray-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {providersData.length}
                </div>
                <div className="text-xs text-gray-600">Total Providers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-4 bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Filter Providers
                </h2>
                <ProviderFilters
                  categories={providerCategories}
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
                  hourlyRateRange={{
                    min: filters.hourlyRateMin,
                    max: filters.hourlyRateMax,
                  }}
                  onHourlyRateRangeChange={(range) =>
                    updateFilters({
                      hourlyRateMin: range.min,
                      hourlyRateMax: range.max,
                    })
                  }
                  availability={filters.availability}
                  onAvailabilityChange={(availability) =>
                    updateFilters({ availability })
                  }
                  verifiedOnly={filters.verifiedOnly}
                  onVerifiedOnlyChange={(verified) =>
                    updateFilters({ verifiedOnly: verified })
                  }
                  onResetAll={resetFilters}
                />
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Mobile Filters */}
              <div className="lg:hidden mb-6">
                <Card className="shadow-sm">
                  <CardContent className="pt-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">
                      Filter Providers
                    </h2>
                    <ProviderFilters
                      categories={providerCategories}
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
                      hourlyRateRange={{
                        min: filters.hourlyRateMin,
                        max: filters.hourlyRateMax,
                      }}
                      onHourlyRateRangeChange={(range) =>
                        updateFilters({
                          hourlyRateMin: range.min,
                          hourlyRateMax: range.max,
                        })
                      }
                      availability={filters.availability}
                      onAvailabilityChange={(availability) =>
                        updateFilters({ availability })
                      }
                      verifiedOnly={filters.verifiedOnly}
                      onVerifiedOnlyChange={(verified) =>
                        updateFilters({ verifiedOnly: verified })
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
                    {filteredProviders.length}
                  </span>{" "}
                  {filteredProviders.length === 1 ? "provider" : "providers"}
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
                    <ProviderSort
                      value={filters.sort}
                      onChange={(value) =>
                        updateFilters({ sort: value }, false)
                      }
                    />
                  </div>
                  <div className="inline-flex rounded-md border border-gray-200 overflow-hidden">
                    <Button
                      variant={layout === "grid" ? "primary" : "ghost"}
                      size="sm"
                      className={layout === "grid" ? "" : "text-gray-700"}
                      onClick={() => setLayout("grid")}
                      aria-label="Grid view"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={layout === "list" ? "primary" : "ghost"}
                      size="sm"
                      className={layout === "list" ? "" : "text-gray-700"}
                      onClick={() => setLayout("list")}
                      aria-label="List view"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Providers Grid/List */}
              {filteredProviders.length > 0 ? (
                <>
                  {layout === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                      {filteredProviders.map((provider) => (
                        <ProviderCard
                          key={provider.id}
                          provider={provider}
                          onContact={handleContact}
                          layout="grid"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4 mb-12">
                      {filteredProviders.map((provider) => (
                        <ProviderCard
                          key={provider.id}
                          provider={provider}
                          onContact={handleContact}
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
                <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No providers found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button
                    onClick={resetFilters}
                    className="bg-black hover:bg-gray-800 text-white"
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
