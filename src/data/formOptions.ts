// Form options for registration fields

export const SKILLS_OPTIONS = [
  "Plumbing",
  "Electrical",
  "Carpentry",
  "Painting",
  "Flooring",
  "Roofing",
  "HVAC",
  "Landscaping",
  "Cleaning",
  "Moving",
  "Appliance Repair",
  "Handyman Services",
  "Drywall",
  "Tiling",
  "Welding",
  "Masonry",
  "Fencing",
  "Window Installation",
  "Door Installation",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Deck Building",
  "Furniture Assembly",
  "Pressure Washing",
  "Gutter Cleaning",
  "Snow Removal",
  "Lawn Care",
  "Tree Services",
  "Pool Maintenance",
  "Security System Installation",
  "Smart Home Installation",
  "Generator Installation",
  "Solar Panel Installation",
  "Water Heater Installation",
  "Garage Door Repair",
  "Locksmith Services",
  "Concrete Work",
  "Asphalt Paving",
  "Insulation Installation",
  "Siding Installation",
] as const;

export const CERTIFICATIONS_OPTIONS = [
  "Licensed Electrician",
  "Licensed Plumber",
  "HVAC Certified",
  "OSHA Certified",
  "EPA Certified",
  "General Contractor License",
  "Journeyman License",
  "Master Electrician",
  "Master Plumber",
  "Certified Welder",
  "Certified Painter",
  "Certified Carpenter",
  "Landscaping Certification",
  "Pool Service Certification",
  "Security System Certification",
  "Solar Installation Certification",
  "Water Treatment Certification",
  "Fire Safety Certification",
  "First Aid Certified",
  "CPR Certified",
  "Lead Paint Certified",
  "Asbestos Removal Certified",
  "Mold Remediation Certified",
  "Water Damage Restoration Certified",
  "Commercial Driver's License",
  "Forklift Operator Certified",
  "Crane Operator Certified",
  "Scaffolding Certified",
  "Confined Space Certified",
  "Fall Protection Certified",
] as const;

export const AVAILABILITY_OPTIONS = [
  "Monday - Friday 9AM - 5PM",
  "Monday - Friday 8AM - 6PM",
  "Monday - Friday 7AM - 7PM",
  "Weekends Only",
  "Evenings Only (6PM - 10PM)",
  "Early Mornings (6AM - 12PM)",
  "Flexible Schedule",
  "On-Call Availability",
  "Holiday Availability",
  "Emergency Services Available",
] as const;

export const EXPERIENCE_LEVELS = [
  { value: 0, label: "Entry Level (0-1 years)" },
  { value: 1, label: "1-2 years" },
  { value: 2, label: "2-3 years" },
  { value: 3, label: "3-5 years" },
  { value: 5, label: "5-10 years" },
  { value: 10, label: "10+ years" },
] as const;

export const HOURLY_RATE_RANGES = [
  { value: 15, label: "$15-25/hour" },
  { value: 25, label: "$25-35/hour" },
  { value: 35, label: "$35-50/hour" },
  { value: 50, label: "$50-75/hour" },
  { value: 75, label: "$75-100/hour" },
  { value: 100, label: "$100+/hour" },
] as const;

// Type exports for TypeScript
export type SkillOption = (typeof SKILLS_OPTIONS)[number];
export type CertificationOption = (typeof CERTIFICATIONS_OPTIONS)[number];
export type AvailabilityOption = (typeof AVAILABILITY_OPTIONS)[number];
export type ExperienceLevel = (typeof EXPERIENCE_LEVELS)[number];
export type HourlyRateRange = (typeof HOURLY_RATE_RANGES)[number];
