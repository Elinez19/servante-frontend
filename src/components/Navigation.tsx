"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavigationItem } from "@/types/navigation";
import { megaMenuData } from "@/data/megaMenuData";
import { MegaMenuDropdown } from "./MegaMenuDropdown";

interface NavigationProps {
  className?: string;
}

const navItems: NavigationItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "About Us", href: "/about", megaMenu: megaMenuData.about },
  { label: "Service", href: "/service", megaMenu: megaMenuData.service },
  { label: "Workers", href: "/workers", megaMenu: megaMenuData.workers },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const handleMouseEnter = (itemLabel: string) => {
    if (navItems.find((item) => item.label === itemLabel)?.megaMenu) {
      setActiveMegaMenu(itemLabel);
    }
  };

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  const handleMegaMenuClose = () => {
    setActiveMegaMenu(null);
  };

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {navItems.map((item) => {
        const hasMegaMenu = !!item.megaMenu;
        const isMegaMenuActive = activeMegaMenu === item.label;

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                item.isActive
                  ? "text-[#f97316] border-b-2 border-dotted border-[#f97316] pb-1"
                  : "text-[#1e3a8a] hover:text-[#f97316]"
              }`}
            >
              {item.label}
              {hasMegaMenu && (
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMegaMenuActive ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>

            {hasMegaMenu && item.megaMenu && (
              <MegaMenuDropdown
                megaMenu={item.megaMenu}
                isOpen={isMegaMenuActive}
                onClose={handleMegaMenuClose}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};
