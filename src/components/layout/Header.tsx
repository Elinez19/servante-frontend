"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import Button from "@/components/customs/Button";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const pathname = usePathname();

  // Hide header on authentication pages
  const hideHeader =
    pathname === "/auth/login" || pathname === "/auth/register";

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
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
