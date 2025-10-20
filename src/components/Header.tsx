"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { AuthButtons } from "./AuthButtons";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const pathname = usePathname();

  // Hide header on authentication pages
  const hideHeader = pathname === "/sign-in" || pathname === "/sign-up";

  if (hideHeader) {
    return null;
  }

  return (
    <>
      {/* Top Border Line */}
      <div className="fixed top-0 left-0 w-full h-px bg-black z-50"></div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full bg-[#fefefe]/95 backdrop-blur-sm border-b border-gray-100 z-40 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Navigation Section */}
            <div className="hidden md:block">
              <Navigation />
            </div>

            {/* Auth Buttons Section */}
            <div className="flex-shrink-0">
              <AuthButtons />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
