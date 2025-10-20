import { ServiceData, CategoryInfo } from "@/types/service";

export const categories: CategoryInfo[] = [
  {
    name: "All Services",
    slug: "all",
    description: "Browse all available services",
    serviceCount: 0,
  },
  {
    name: "House Cleaning",
    slug: "house-cleaning",
    description: "Complete home cleaning solutions",
    serviceCount: 0,
  },
  {
    name: "Office Cleaning",
    slug: "office-cleaning",
    description: "Professional office maintenance",
    serviceCount: 0,
  },
  {
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description: "Thorough cleaning for special occasions",
    serviceCount: 0,
  },
  {
    name: "Carpet Cleaning",
    slug: "carpet-cleaning",
    description: "Professional carpet and rug cleaning",
    serviceCount: 0,
  },
  {
    name: "Window Cleaning",
    slug: "window-cleaning",
    description: "Crystal clear windows and glass",
    serviceCount: 0,
  },
  {
    name: "Kitchen Cleaning",
    slug: "kitchen-cleaning",
    description: "Complete kitchen sanitization",
    serviceCount: 0,
  },
  {
    name: "Bathroom Cleaning",
    slug: "bathroom-cleaning",
    description: "Hygienic bathroom maintenance",
    serviceCount: 0,
  },
  {
    name: "Regular Maintenance",
    slug: "maintenance",
    description: "Scheduled cleaning services",
    serviceCount: 0,
  },
  {
    name: "One-time Service",
    slug: "one-time",
    description: "Single cleaning appointments",
    serviceCount: 0,
  },
  {
    name: "Emergency Cleaning",
    slug: "emergency",
    description: "Urgent cleaning needs",
    serviceCount: 0,
  },
  {
    name: "Post-Construction",
    slug: "post-construction",
    description: "Cleanup after renovations",
    serviceCount: 0,
  },
];

export const servicesData: ServiceData[] = [
  // House Cleaning Services
  {
    id: "house-1",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    category: "House Cleaning",
    categorySlug: "house-cleaning",
    title: "Complete House Cleaning Package",
    description:
      "Comprehensive cleaning for your entire home including all rooms, kitchen, and bathrooms",
    location: "New York, USA",
    rating: 4.8,
    reviewCount: 156,
    currentPrice: 89,
    originalPrice: 120,
    discount: 26,
    provider: {
      id: "provider-1",
      name: "Clean Masters Pro",
      verified: true,
    },
    features: [
      "All rooms",
      "Kitchen deep clean",
      "Bathroom sanitization",
      "Vacuum & mop",
    ],
    duration: "3-4 hours",
    availability: "Same day available",
  },
  {
    id: "house-2",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    category: "House Cleaning",
    categorySlug: "house-cleaning",
    title: "Basic Home Cleaning Service",
    description: "Essential cleaning service for maintaining a tidy home",
    location: "Los Angeles, USA",
    rating: 4.6,
    reviewCount: 98,
    currentPrice: 65,
    originalPrice: 85,
    discount: 24,
    provider: {
      id: "provider-2",
      name: "Sparkle Home Services",
      verified: true,
    },
    features: ["Living areas", "Kitchen surfaces", "Basic vacuuming"],
    duration: "2-3 hours",
    availability: "Book in advance",
  },
  {
    id: "house-3",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    category: "House Cleaning",
    categorySlug: "house-cleaning",
    title: "Premium Home Cleaning Deluxe",
    description:
      "Luxury cleaning service with premium products and attention to detail",
    location: "Chicago, USA",
    rating: 4.9,
    reviewCount: 203,
    currentPrice: 145,
    originalPrice: 190,
    discount: 24,
    provider: {
      id: "provider-3",
      name: "Elite Clean Co",
      verified: true,
    },
    features: [
      "White glove service",
      "Eco-friendly products",
      "Full house detailing",
      "Organizing included",
    ],
    duration: "4-5 hours",
    availability: "Premium booking",
  },

  // Office Cleaning Services
  {
    id: "office-1",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    category: "Office Cleaning",
    categorySlug: "office-cleaning",
    title: "Corporate Office Cleaning",
    description:
      "Professional cleaning for corporate environments and business spaces",
    location: "New York, USA",
    rating: 4.7,
    reviewCount: 124,
    currentPrice: 120,
    originalPrice: 160,
    discount: 25,
    provider: {
      id: "provider-4",
      name: "Business Clean Solutions",
      verified: true,
    },
    features: [
      "Desk sanitization",
      "Floor care",
      "Restroom cleaning",
      "Break room service",
    ],
    duration: "2-3 hours",
    availability: "After hours available",
  },
  {
    id: "office-2",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    category: "Office Cleaning",
    categorySlug: "office-cleaning",
    title: "Small Office Cleaning Package",
    description:
      "Affordable cleaning solution for small businesses and startups",
    location: "San Francisco, USA",
    rating: 4.5,
    reviewCount: 87,
    currentPrice: 75,
    originalPrice: 95,
    discount: 21,
    provider: {
      id: "provider-5",
      name: "Quick Office Clean",
      verified: true,
    },
    features: ["Workspace cleaning", "Trash removal", "Surface sanitization"],
    duration: "1-2 hours",
    availability: "Flexible scheduling",
  },
  {
    id: "office-3",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    category: "Office Cleaning",
    categorySlug: "office-cleaning",
    title: "Executive Office Deep Clean",
    description:
      "Premium cleaning service for executive suites and high-end offices",
    location: "Miami, USA",
    rating: 4.9,
    reviewCount: 142,
    currentPrice: 180,
    originalPrice: 240,
    discount: 25,
    provider: {
      id: "provider-6",
      name: "Executive Care Services",
      verified: true,
    },
    features: [
      "Luxury finish",
      "Wood polish",
      "Leather care",
      "Art-safe dusting",
    ],
    duration: "3-4 hours",
    availability: "VIP scheduling",
  },

  // Deep Cleaning Services
  {
    id: "deep-1",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop",
    category: "Deep Cleaning",
    categorySlug: "deep-cleaning",
    title: "Complete Deep Cleaning Service",
    description:
      "Intensive cleaning reaching every corner and crevice of your space",
    location: "Boston, USA",
    rating: 4.8,
    reviewCount: 178,
    currentPrice: 199,
    originalPrice: 280,
    discount: 29,
    provider: {
      id: "provider-7",
      name: "Deep Clean Experts",
      verified: true,
    },
    features: [
      "Behind appliances",
      "Baseboards",
      "Ceiling fans",
      "Detailed scrubbing",
    ],
    duration: "5-6 hours",
    availability: "Book 2 days ahead",
  },
  {
    id: "deep-2",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop",
    category: "Deep Cleaning",
    categorySlug: "deep-cleaning",
    title: "Spring Deep Cleaning Special",
    description: "Seasonal deep cleaning to refresh your entire home",
    location: "Seattle, USA",
    rating: 4.7,
    reviewCount: 134,
    currentPrice: 165,
    originalPrice: 220,
    discount: 25,
    provider: {
      id: "provider-8",
      name: "Fresh Start Cleaning",
      verified: true,
    },
    features: ["Window washing", "Closet organization", "Upholstery cleaning"],
    duration: "4-5 hours",
    availability: "Seasonal special",
  },

  // Carpet Cleaning Services
  {
    id: "carpet-1",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    category: "Carpet Cleaning",
    categorySlug: "carpet-cleaning",
    title: "Professional Carpet Steam Cleaning",
    description: "Deep steam cleaning for carpets and rugs of all sizes",
    location: "Denver, USA",
    rating: 4.9,
    reviewCount: 215,
    currentPrice: 85,
    originalPrice: 110,
    discount: 23,
    provider: {
      id: "provider-9",
      name: "Carpet Care Pros",
      verified: true,
    },
    features: ["Steam cleaning", "Stain removal", "Deodorizing", "Fast drying"],
    duration: "2-3 hours",
    availability: "Same day available",
  },
  {
    id: "carpet-2",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    category: "Carpet Cleaning",
    categorySlug: "carpet-cleaning",
    title: "Area Rug Cleaning Service",
    description: "Specialized cleaning for delicate and expensive area rugs",
    location: "Portland, USA",
    rating: 4.8,
    reviewCount: 167,
    currentPrice: 95,
    originalPrice: 130,
    discount: 27,
    provider: {
      id: "provider-10",
      name: "Rug Masters",
      verified: true,
    },
    features: ["Hand washing", "Color restoration", "Pet odor removal"],
    duration: "Varies by size",
    availability: "By appointment",
  },
  {
    id: "carpet-3",
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&h=400&fit=crop",
    category: "Carpet Cleaning",
    categorySlug: "carpet-cleaning",
    title: "Pet Stain & Odor Carpet Treatment",
    description:
      "Specialized service for homes with pets, removing tough stains and odors",
    location: "Austin, USA",
    rating: 4.7,
    reviewCount: 143,
    currentPrice: 110,
    originalPrice: 145,
    discount: 24,
    provider: {
      id: "provider-11",
      name: "Pet-Friendly Clean",
      verified: true,
    },
    features: [
      "Enzyme treatment",
      "Odor elimination",
      "Safe for pets",
      "Satisfaction guaranteed",
    ],
    duration: "2-4 hours",
    availability: "Emergency available",
  },

  // Window Cleaning Services
  {
    id: "window-1",
    image:
      "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?w=600&h=400&fit=crop",
    category: "Window Cleaning",
    categorySlug: "window-cleaning",
    title: "Residential Window Washing",
    description: "Crystal clear windows for your home, inside and out",
    location: "Phoenix, USA",
    rating: 4.6,
    reviewCount: 92,
    currentPrice: 79,
    originalPrice: 105,
    discount: 25,
    provider: {
      id: "provider-12",
      name: "Clear View Windows",
      verified: true,
    },
    features: ["Inside & outside", "Screen cleaning", "Streak-free finish"],
    duration: "2-3 hours",
    availability: "Weather dependent",
  },
  {
    id: "window-2",
    image:
      "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&h=400&fit=crop",
    category: "Window Cleaning",
    categorySlug: "window-cleaning",
    title: "Commercial High-Rise Window Cleaning",
    description:
      "Professional window cleaning for commercial buildings and high-rises",
    location: "New York, USA",
    rating: 4.9,
    reviewCount: 188,
    currentPrice: 250,
    originalPrice: 350,
    discount: 29,
    provider: {
      id: "provider-13",
      name: "Sky High Cleaners",
      verified: true,
    },
    features: [
      "Safety certified",
      "All heights",
      "Commercial grade",
      "Insured",
    ],
    duration: "Full day",
    availability: "Contract basis",
  },

  // Kitchen Cleaning Services
  {
    id: "kitchen-1",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
    category: "Kitchen Cleaning",
    categorySlug: "kitchen-cleaning",
    title: "Deep Kitchen Cleaning Service",
    description: "Thorough cleaning and sanitization of your entire kitchen",
    location: "Dallas, USA",
    rating: 4.8,
    reviewCount: 156,
    currentPrice: 125,
    originalPrice: 165,
    discount: 24,
    provider: {
      id: "provider-14",
      name: "Kitchen Care Experts",
      verified: true,
    },
    features: [
      "Appliance cleaning",
      "Grease removal",
      "Cabinet cleaning",
      "Floor scrubbing",
    ],
    duration: "3-4 hours",
    availability: "Same day available",
  },
  {
    id: "kitchen-2",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    category: "Kitchen Cleaning",
    categorySlug: "kitchen-cleaning",
    title: "Appliance Deep Clean Package",
    description:
      "Specialized cleaning for ovens, refrigerators, and other appliances",
    location: "Houston, USA",
    rating: 4.7,
    reviewCount: 134,
    currentPrice: 95,
    originalPrice: 125,
    discount: 24,
    provider: {
      id: "provider-15",
      name: "Appliance Shine Pro",
      verified: true,
    },
    features: ["Oven deep clean", "Fridge sanitization", "Dishwasher cleaning"],
    duration: "2-3 hours",
    availability: "Book ahead",
  },

  // Bathroom Cleaning Services
  {
    id: "bathroom-1",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
    category: "Bathroom Cleaning",
    categorySlug: "bathroom-cleaning",
    title: "Complete Bathroom Sanitization",
    description: "Deep cleaning and sanitization for hygienic bathrooms",
    location: "Philadelphia, USA",
    rating: 4.8,
    reviewCount: 198,
    currentPrice: 75,
    originalPrice: 95,
    discount: 21,
    provider: {
      id: "provider-16",
      name: "Bathroom Bliss Cleaning",
      verified: true,
    },
    features: [
      "Toilet sanitization",
      "Shower/tub scrubbing",
      "Tile & grout cleaning",
      "Mirror polishing",
    ],
    duration: "1-2 hours",
    availability: "Flexible times",
  },
  {
    id: "bathroom-2",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
    category: "Bathroom Cleaning",
    categorySlug: "bathroom-cleaning",
    title: "Luxury Bathroom Detailing",
    description: "Premium bathroom cleaning with attention to every detail",
    location: "San Diego, USA",
    rating: 4.9,
    reviewCount: 167,
    currentPrice: 110,
    originalPrice: 145,
    discount: 24,
    provider: {
      id: "provider-17",
      name: "Luxury Clean Services",
      verified: true,
    },
    features: [
      "Premium products",
      "Fixture polishing",
      "Grout restoration",
      "Mold treatment",
    ],
    duration: "2-3 hours",
    availability: "Premium booking",
  },

  // Regular Maintenance Services
  {
    id: "maintenance-1",
    image:
      "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c6?w=600&h=400&fit=crop",
    category: "Regular Maintenance",
    categorySlug: "maintenance",
    title: "Weekly Home Maintenance Cleaning",
    description:
      "Regular weekly cleaning service to keep your home consistently clean",
    location: "San Antonio, USA",
    rating: 4.7,
    reviewCount: 245,
    currentPrice: 85,
    originalPrice: 110,
    discount: 23,
    provider: {
      id: "provider-18",
      name: "Weekly Clean Co",
      verified: true,
    },
    features: [
      "Weekly schedule",
      "Consistent cleaner",
      "Flexible days",
      "Supplies included",
    ],
    duration: "2-3 hours",
    availability: "Subscription service",
  },
  {
    id: "maintenance-2",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop",
    category: "Regular Maintenance",
    categorySlug: "maintenance",
    title: "Bi-Weekly Cleaning Service",
    description: "Professional cleaning every two weeks for busy households",
    location: "Charlotte, USA",
    rating: 4.6,
    reviewCount: 189,
    currentPrice: 95,
    originalPrice: 125,
    discount: 24,
    provider: {
      id: "provider-19",
      name: "Bi-Weekly Pros",
      verified: true,
    },
    features: ["Every 2 weeks", "Full house clean", "Priority scheduling"],
    duration: "3-4 hours",
    availability: "Ongoing service",
  },
  {
    id: "maintenance-3",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop",
    category: "Regular Maintenance",
    categorySlug: "maintenance",
    title: "Monthly Deep Maintenance",
    description: "Monthly comprehensive cleaning for maintaining your space",
    location: "Columbus, USA",
    rating: 4.5,
    reviewCount: 156,
    currentPrice: 120,
    originalPrice: 160,
    discount: 25,
    provider: {
      id: "provider-20",
      name: "Monthly Clean Masters",
      verified: true,
    },
    features: [
      "Monthly schedule",
      "Rotating focus areas",
      "Deep cleaning included",
    ],
    duration: "4-5 hours",
    availability: "Monthly plans",
  },

  // One-time Service
  {
    id: "onetime-1",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop",
    category: "One-time Service",
    categorySlug: "one-time",
    title: "One-Time Special Event Cleaning",
    description: "Get your home party-ready with our special event cleaning",
    location: "Indianapolis, USA",
    rating: 4.8,
    reviewCount: 178,
    currentPrice: 140,
    originalPrice: 185,
    discount: 24,
    provider: {
      id: "provider-21",
      name: "Event Clean Specialists",
      verified: true,
    },
    features: ["Pre-party prep", "Post-party cleanup", "Quick turnaround"],
    duration: "3-4 hours",
    availability: "Last minute OK",
  },
  {
    id: "onetime-2",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    category: "One-time Service",
    categorySlug: "one-time",
    title: "Move-In Ready Cleaning",
    description: "Complete cleaning before you move into your new home",
    location: "Jacksonville, USA",
    rating: 4.9,
    reviewCount: 201,
    currentPrice: 155,
    originalPrice: 205,
    discount: 24,
    provider: {
      id: "provider-22",
      name: "Move-In Clean Pro",
      verified: true,
    },
    features: ["Empty home cleaning", "All surfaces", "Ready to move in"],
    duration: "4-5 hours",
    availability: "Flexible scheduling",
  },
  {
    id: "onetime-3",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
    category: "One-time Service",
    categorySlug: "one-time",
    title: "Move-Out Cleaning Service",
    description: "Thorough cleaning to ensure you get your deposit back",
    location: "San Jose, USA",
    rating: 4.7,
    reviewCount: 167,
    currentPrice: 145,
    originalPrice: 190,
    discount: 24,
    provider: {
      id: "provider-23",
      name: "Deposit Back Cleaners",
      verified: true,
    },
    features: ["Landlord approved", "Checklist included", "Deposit guarantee"],
    duration: "4-5 hours",
    availability: "Same week available",
  },

  // Emergency Cleaning Services
  {
    id: "emergency-1",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop",
    category: "Emergency Cleaning",
    categorySlug: "emergency",
    title: "24/7 Emergency Cleaning Response",
    description: "Immediate cleaning services for urgent situations",
    location: "Fort Worth, USA",
    rating: 4.8,
    reviewCount: 134,
    currentPrice: 195,
    originalPrice: 260,
    discount: 25,
    provider: {
      id: "provider-24",
      name: "Emergency Clean Squad",
      verified: true,
    },
    features: [
      "24/7 availability",
      "Rapid response",
      "Any situation",
      "Discreet service",
    ],
    duration: "Varies",
    availability: "Call anytime",
  },
  {
    id: "emergency-2",
    image:
      "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c6?w=600&h=400&fit=crop",
    category: "Emergency Cleaning",
    categorySlug: "emergency",
    title: "Water Damage Cleanup",
    description: "Emergency response for water damage and flooding",
    location: "Detroit, USA",
    rating: 4.9,
    reviewCount: 156,
    currentPrice: 225,
    originalPrice: 300,
    discount: 25,
    provider: {
      id: "provider-25",
      name: "Water Rescue Cleaners",
      verified: true,
    },
    features: [
      "Water extraction",
      "Mold prevention",
      "Fast drying",
      "Insurance help",
    ],
    duration: "4-8 hours",
    availability: "Emergency only",
  },

  // Post-Construction Services
  {
    id: "construction-1",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    category: "Post-Construction",
    categorySlug: "post-construction",
    title: "Complete Post-Construction Cleanup",
    description: "Thorough cleanup after renovations and construction work",
    location: "El Paso, USA",
    rating: 4.8,
    reviewCount: 189,
    currentPrice: 210,
    originalPrice: 280,
    discount: 25,
    provider: {
      id: "provider-26",
      name: "Construction Clean Experts",
      verified: true,
    },
    features: [
      "Dust removal",
      "Debris cleanup",
      "Window cleaning",
      "Final polish",
    ],
    duration: "6-8 hours",
    availability: "Project basis",
  },
  {
    id: "construction-2",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    category: "Post-Construction",
    categorySlug: "post-construction",
    title: "Renovation Cleanup Service",
    description: "Specialized cleaning after home renovations and remodeling",
    location: "Memphis, USA",
    rating: 4.7,
    reviewCount: 145,
    currentPrice: 185,
    originalPrice: 245,
    discount: 24,
    provider: {
      id: "provider-27",
      name: "Reno Clean Pro",
      verified: true,
    },
    features: [
      "Fine dust removal",
      "Paint cleanup",
      "Floor protection",
      "Detail work",
    ],
    duration: "5-7 hours",
    availability: "Post-project",
  },
  {
    id: "construction-3",
    image:
      "https://images.unsplash.com/photo-1504148455328-c3762d087bdb?w=600&h=400&fit=crop",
    category: "Post-Construction",
    categorySlug: "post-construction",
    title: "New Construction Final Clean",
    description: "Final cleaning for new construction before move-in",
    location: "Nashville, USA",
    rating: 4.9,
    reviewCount: 212,
    currentPrice: 195,
    originalPrice: 260,
    discount: 25,
    provider: {
      id: "provider-28",
      name: "New Build Cleaners",
      verified: true,
    },
    features: [
      "Builder grade clean",
      "All surfaces",
      "Ready for occupancy",
      "Quality guarantee",
    ],
    duration: "6-8 hours",
    availability: "Scheduled with builder",
  },

  // Additional Mixed Services
  {
    id: "mixed-1",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop",
    category: "House Cleaning",
    categorySlug: "house-cleaning",
    title: "Eco-Friendly Home Cleaning",
    description: "Green cleaning using only environmentally friendly products",
    location: "Baltimore, USA",
    rating: 4.9,
    reviewCount: 234,
    currentPrice: 105,
    originalPrice: 140,
    discount: 25,
    provider: {
      id: "provider-29",
      name: "Green Clean Solutions",
      verified: true,
    },
    features: [
      "100% eco-friendly",
      "Non-toxic",
      "Safe for kids & pets",
      "Sustainable",
    ],
    duration: "3-4 hours",
    availability: "Book ahead",
  },
  {
    id: "mixed-2",
    image:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&h=400&fit=crop",
    category: "Deep Cleaning",
    categorySlug: "deep-cleaning",
    title: "Holiday Preparation Deep Clean",
    description: "Get your home guest-ready for the holidays",
    location: "Milwaukee, USA",
    rating: 4.8,
    reviewCount: 176,
    currentPrice: 175,
    originalPrice: 230,
    discount: 24,
    provider: {
      id: "provider-30",
      name: "Holiday Ready Cleaners",
      verified: true,
    },
    features: [
      "Full house detail",
      "Guest room prep",
      "Kitchen deep clean",
      "Quick turnaround",
    ],
    duration: "5-6 hours",
    availability: "Holiday season",
  },
  {
    id: "mixed-3",
    image:
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=400&fit=crop",
    category: "Office Cleaning",
    categorySlug: "office-cleaning",
    title: "Medical Office Sanitization",
    description: "Hospital-grade cleaning for medical and dental offices",
    location: "Oklahoma City, USA",
    rating: 4.9,
    reviewCount: 198,
    currentPrice: 165,
    originalPrice: 220,
    discount: 25,
    provider: {
      id: "provider-31",
      name: "MedClean Specialists",
      verified: true,
    },
    features: [
      "Medical-grade products",
      "OSHA compliant",
      "Biohazard certified",
      "Disinfection focus",
    ],
    duration: "3-4 hours",
    availability: "After hours",
  },
];

// Update category counts
categories.forEach((category) => {
  if (category.slug === "all") {
    category.serviceCount = servicesData.length;
  } else {
    category.serviceCount = servicesData.filter(
      (service) => service.categorySlug === category.slug
    ).length;
  }
});

export const getCategoryBySlug = (slug: string): CategoryInfo | undefined => {
  return categories.find((cat) => cat.slug === slug);
};

export const getServicesByCategory = (categorySlug: string): ServiceData[] => {
  if (categorySlug === "all") {
    return servicesData;
  }
  return servicesData.filter(
    (service) => service.categorySlug === categorySlug
  );
};
