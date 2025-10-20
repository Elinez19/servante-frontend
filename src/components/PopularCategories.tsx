"use client";

import React from "react";

interface CategoryCardProps {
  title: string;
  providerCount: string;
  illustration: React.ReactNode;
}

interface PopularCategoriesProps {
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  providerCount,
  illustration,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer group">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Illustration */}
        <div className="w-20 h-20 flex items-center justify-center">
          {illustration}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-bold text-[#1e3a8a] text-lg group-hover:text-[#f97316] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{providerCount} Providers</p>
        </div>
      </div>
    </div>
  );
};

export const PopularCategories: React.FC<PopularCategoriesProps> = ({
  className = "",
}) => {
  const categories = [
    {
      title: "House Cleaning",
      providerCount: "4,982",
      illustration: (
        <div className="relative w-full h-full">
          {/* Person */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-4 bg-orange-400 rounded-sm absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-2 h-6 bg-pink-400 absolute -right-1 top-1"></div>
          </div>
          {/* Cabinet */}
          <div className="absolute top-2 left-2 w-6 h-8 bg-blue-600 rounded-sm">
            <div className="w-1 h-1 bg-white rounded-full absolute top-1 left-1"></div>
            <div className="w-1 h-1 bg-white rounded-full absolute top-1 right-1"></div>
          </div>
          {/* Cup */}
          <div className="absolute top-4 right-2 w-4 h-5 bg-blue-500 rounded-sm"></div>
          {/* Flower */}
          <div className="absolute top-1 right-6 w-2 h-2 bg-orange-400 rounded-full"></div>
        </div>
      ),
    },
    {
      title: "Electricity Services",
      providerCount: "4,982",
      illustration: (
        <div className="relative w-full h-full">
          {/* Person on ladder */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-1 h-4 bg-gray-600 absolute left-1/2 transform -translate-x-1/2 -top-2"></div>
          </div>
          {/* Electrical panel */}
          <div className="absolute top-2 left-2 w-8 h-6 bg-gray-700 rounded-sm">
            <div className="w-1 h-1 bg-yellow-400 rounded-full absolute top-1 left-1"></div>
            <div className="w-1 h-1 bg-yellow-400 rounded-full absolute top-1 right-1"></div>
          </div>
          {/* Lightbulb */}
          <div className="absolute top-1 right-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
          {/* Battery */}
          <div className="absolute bottom-1 right-1 w-3 h-2 bg-green-500 rounded-sm"></div>
        </div>
      ),
    },
    {
      title: "Furniture Replace",
      providerCount: "4,982",
      illustration: (
        <div className="relative w-full h-full">
          {/* Person */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          </div>
          {/* Wardrobe */}
          <div className="absolute top-2 left-1 w-6 h-10 bg-blue-600 rounded-sm">
            <div className="w-1 h-1 bg-white rounded-full absolute top-1 left-1"></div>
            <div className="w-1 h-1 bg-white rounded-full absolute top-1 right-1"></div>
          </div>
          {/* Cabinet */}
          <div className="absolute top-6 right-2 w-4 h-6 bg-yellow-400 rounded-sm"></div>
          {/* Box */}
          <div className="absolute bottom-1 left-1 w-3 h-2 bg-brown-600 rounded-sm"></div>
        </div>
      ),
    },
    {
      title: "Mechanic Zone",
      providerCount: "4,982",
      illustration: (
        <div className="relative w-full h-full">
          {/* Person */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-1 bg-gray-600 absolute -right-1 top-2"></div>
          </div>
          {/* Toolbox */}
          <div className="absolute top-2 left-2 w-8 h-6 bg-blue-600 rounded-sm">
            <div className="w-1 h-1 bg-white rounded-full absolute top-1 left-1"></div>
          </div>
          {/* Gears */}
          <div className="absolute top-1 right-2 w-3 h-3 bg-gray-600 rounded-full"></div>
          {/* Car part */}
          <div className="absolute bottom-1 right-1 w-4 h-2 bg-gray-500 rounded-sm"></div>
        </div>
      ),
    },
    {
      title: "Repairman",
      providerCount: "4,982",
      illustration: (
        <div className="relative w-full h-full">
          {/* Person */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-600 absolute -right-1 top-2"></div>
            <div className="w-1 h-2 bg-gray-600 absolute -right-2 top-1"></div>
          </div>
          {/* Washing machine */}
          <div className="absolute top-2 left-2 w-6 h-8 bg-white border-2 border-gray-400 rounded-sm">
            <div className="w-2 h-2 bg-gray-300 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
          </div>
          {/* Gears */}
          <div className="absolute top-1 right-2 w-3 h-3 bg-gray-600 rounded-full"></div>
          {/* Leaves */}
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      ),
    },
    {
      title: "Plumber Service",
      providerCount: "4,982",
      illustration: (
        <div className="relative w-full h-full">
          {/* Person */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-600 absolute -right-1 top-2"></div>
          </div>
          {/* Pipe */}
          <div className="absolute top-2 left-2 w-8 h-2 bg-gray-600 rounded-full"></div>
          {/* Toolbox */}
          <div className="absolute top-4 right-2 w-4 h-3 bg-blue-600 rounded-sm"></div>
          {/* Water droplets */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full"></div>
          <div className="absolute top-2 left-3 w-1 h-1 bg-blue-400 rounded-full"></div>
        </div>
      ),
    },
    {
      title: "Painter Chaise",
      providerCount: "4,982",
      illustration: (
        <div className="relative w-full h-full">
          {/* Person */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-600 absolute -right-1 top-2"></div>
          </div>
          {/* Wall */}
          <div className="absolute top-2 left-2 w-8 h-6 bg-gray-200 rounded-sm"></div>
          {/* Paint can */}
          <div className="absolute top-4 right-2 w-3 h-4 bg-red-500 rounded-sm">
            <div className="w-1 h-1 bg-white rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
          </div>
          {/* Ladder */}
          <div className="absolute bottom-1 left-1 w-1 h-4 bg-gray-600"></div>
        </div>
      ),
    },
    {
      title: "Carpenter",
      providerCount: "4,982",
      illustration: (
        <div className="relative w-full h-full">
          {/* Person */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-600 absolute -right-1 top-2"></div>
          </div>
          {/* Table */}
          <div className="absolute top-2 left-2 w-8 h-4 bg-yellow-600 rounded-sm"></div>
          {/* Saw */}
          <div className="absolute top-1 right-2 w-3 h-1 bg-gray-600"></div>
          {/* Hammer */}
          <div className="absolute top-3 right-1 w-2 h-2 bg-gray-600"></div>
          {/* Wood pieces */}
          <div className="absolute bottom-1 left-1 w-2 h-1 bg-yellow-500 rounded-sm"></div>
          <div className="absolute bottom-1 right-1 w-1 h-2 bg-yellow-500 rounded-sm"></div>
        </div>
      ),
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            {/* Category Label */}
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#f97316]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">
                Categories
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
              Popular Categories
            </h2>
          </div>

          {/* Explore More Button */}
          <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
            <span>Explore More</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              providerCount={category.providerCount}
              illustration={category.illustration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
