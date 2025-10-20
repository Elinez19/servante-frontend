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
  providers: {
    title: "Our Providers",
    href: "/providers",
  },
  about: {
    title: "About Us",
    href: "/about",
  },
};
