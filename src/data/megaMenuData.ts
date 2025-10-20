import { MegaMenuData } from "@/types/navigation";

export const megaMenuData: Record<string, MegaMenuData> = {
  service: {
    title: "Services",
    href: "/services",
    sections: [
      {
        title: "Cleaning Services",
        links: [
          {
            label: "House Cleaning",
            href: "/services/house-cleaning",
            description: "Complete home cleaning solutions",
          },
          {
            label: "Office Cleaning",
            href: "/services/office-cleaning",
            description: "Professional office maintenance",
          },
          {
            label: "Deep Cleaning",
            href: "/services/deep-cleaning",
            description: "Thorough cleaning for special occasions",
          },
          {
            label: "Move-in/Move-out",
            href: "/services/move-cleaning",
            description: "Cleaning for property transitions",
          },
        ],
      },
      {
        title: "Specialized Services",
        links: [
          {
            label: "Carpet Cleaning",
            href: "/services/carpet-cleaning",
            description: "Professional carpet and rug cleaning",
          },
          {
            label: "Window Cleaning",
            href: "/services/window-cleaning",
            description: "Crystal clear windows and glass",
          },
          {
            label: "Kitchen Deep Clean",
            href: "/services/kitchen-cleaning",
            description: "Complete kitchen sanitization",
          },
          {
            label: "Bathroom Cleaning",
            href: "/services/bathroom-cleaning",
            description: "Hygienic bathroom maintenance",
          },
        ],
      },
      {
        title: "Maintenance",
        links: [
          {
            label: "Regular Maintenance",
            href: "/services/maintenance",
            description: "Scheduled cleaning services",
          },
          {
            label: "One-time Service",
            href: "/services/one-time",
            description: "Single cleaning appointments",
          },
          {
            label: "Emergency Cleaning",
            href: "/services/emergency",
            description: "Urgent cleaning needs",
          },
          {
            label: "Post-Construction",
            href: "/services/post-construction",
            description: "Cleanup after renovations",
          },
        ],
      },
    ],
    featured: {
      title: "Premium Cleaning Package",
      description:
        "Get 20% off on our comprehensive cleaning service that includes everything you need for a spotless home.",
      href: "/services/premium-package",
    },
  },
  workers: {
    title: "Our Workers",
    href: "/workers",
    sections: [
      {
        title: "Worker Categories",
        links: [
          {
            label: "House Cleaners",
            href: "/workers/house-cleaners",
            description: "Experienced residential cleaners",
          },
          {
            label: "Office Cleaners",
            href: "/workers/office-cleaners",
            description: "Commercial cleaning specialists",
          },
          {
            label: "Specialized Cleaners",
            href: "/workers/specialized",
            description: "Expert cleaners for specific needs",
          },
          {
            label: "Senior Cleaners",
            href: "/workers/senior",
            description: "Most experienced professionals",
          },
        ],
      },
      {
        title: "Worker Features",
        links: [
          {
            label: "Background Checked",
            href: "/workers/background-checked",
            description: "All workers are thoroughly vetted",
          },
          {
            label: "Insured & Bonded",
            href: "/workers/insured",
            description: "Fully protected and insured",
          },
          {
            label: "Trained Professionals",
            href: "/workers/trained",
            description: "Certified cleaning experts",
          },
          {
            label: "Customer Rated",
            href: "/workers/rated",
            description: "Highly rated by customers",
          },
        ],
      },
      {
        title: "Hiring Process",
        links: [
          {
            label: "Apply Now",
            href: "/workers/apply",
            description: "Join our team of professionals",
          },
          {
            label: "Requirements",
            href: "/workers/requirements",
            description: "What we look for in workers",
          },
          {
            label: "Training Program",
            href: "/workers/training",
            description: "Comprehensive training provided",
          },
          {
            label: "Benefits",
            href: "/workers/benefits",
            description: "Employee benefits and perks",
          },
        ],
      },
    ],
    featured: {
      title: "Join Our Team",
      description:
        "Become a part of Servat's professional cleaning team. Competitive pay, flexible hours, and great benefits.",
      href: "/workers/join-team",
    },
  },
  about: {
    title: "About Us",
    href: "/about",
    sections: [
      {
        title: "Company",
        links: [
          {
            label: "Our Story",
            href: "/about/story",
            description: "How Servat started",
          },
          {
            label: "Mission & Vision",
            href: "/about/mission",
            description: "Our goals and aspirations",
          },
          {
            label: "Leadership Team",
            href: "/about/leadership",
            description: "Meet our leadership",
          },
          {
            label: "Company Values",
            href: "/about/values",
            description: "What we stand for",
          },
        ],
      },
      {
        title: "Operations",
        links: [
          {
            label: "Service Areas",
            href: "/about/service-areas",
            description: "Cities we serve",
          },
          {
            label: "Technology",
            href: "/about/technology",
            description: "AI-powered booking system",
          },
          {
            label: "Quality Assurance",
            href: "/about/quality",
            description: "Our quality standards",
          },
          {
            label: "Sustainability",
            href: "/about/sustainability",
            description: "Eco-friendly practices",
          },
        ],
      },
      {
        title: "Recognition",
        links: [
          {
            label: "Awards",
            href: "/about/awards",
            description: "Industry recognition",
          },
          {
            label: "Testimonials",
            href: "/about/testimonials",
            description: "What customers say",
          },
          {
            label: "Press Coverage",
            href: "/about/press",
            description: "Media mentions",
          },
          {
            label: "Partnerships",
            href: "/about/partnerships",
            description: "Our business partners",
          },
        ],
      },
    ],
    featured: {
      title: "Why Choose Servat?",
      description:
        "Discover what makes us the leading choice for professional cleaning services with our AI-powered platform.",
      href: "/about/why-choose-us",
    },
  },
};
