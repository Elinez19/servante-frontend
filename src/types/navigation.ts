export interface MegaMenuSection {
  title: string;
  links: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface MegaMenuData {
  title: string;
  href: string;
  sections: MegaMenuSection[];
  featured?: {
    title: string;
    description: string;
    href: string;
    image?: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
  megaMenu?: MegaMenuData;
}
