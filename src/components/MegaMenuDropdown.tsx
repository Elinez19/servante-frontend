"use client";

import React from "react";
import Link from "next/link";
import { MegaMenuData } from "@/types/navigation";

interface MegaMenuDropdownProps {
  megaMenu: MegaMenuData;
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenuDropdown: React.FC<MegaMenuDropdownProps> = ({
  megaMenu,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !megaMenu.sections || megaMenu.sections.length === 0)
    return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="mega-menu-dropdown fixed inset-0 z-40 bg-black/20 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Mega Menu */}
      <div className="mega-menu-dropdown fixed top-16 left-1/2 transform -translate-x-1/2 z-50 w-screen max-w-6xl bg-white shadow-2xl border-t border-gray-100 animate-in slide-in-from-top-2 duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Sections */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {megaMenu.sections.map((section, index) => (
                  <div
                    key={index}
                    className="space-y-4 animate-in fade-in slide-in-from-left-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-lg font-semibold text-[#1e3a8a] border-b border-gray-200 pb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="group block p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-sm"
                            onClick={onClose}
                          >
                            <div className="font-medium text-[#1e3a8a] group-hover:text-[#f97316] transition-colors duration-200">
                              {link.label}
                            </div>
                            {link.description && (
                              <div className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-200">
                                {link.description}
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Section */}
            {megaMenu.featured && (
              <div
                className="lg:col-span-1 animate-in fade-in slide-in-from-right-2"
                style={{ animationDelay: "300ms" }}
              >
                <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-xl p-6 text-white hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-3">
                    {megaMenu.featured.title}
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    {megaMenu.featured.description}
                  </p>
                  <Link
                    href={megaMenu.featured.href}
                    className="inline-block bg-white text-[#f97316] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                    onClick={onClose}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            className="mt-8 pt-6 border-t border-gray-200 animate-in fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Need help choosing the right service? Our team is here to help.
              </div>
              <div className="flex space-x-4">
                <Link
                  href="/contact"
                  className="text-sm text-[#f97316] hover:text-[#ea580c] font-medium transition-colors duration-200"
                  onClick={onClose}
                >
                  Contact Support
                </Link>
                <Link
                  href="/faq"
                  className="text-sm text-[#f97316] hover:text-[#ea580c] font-medium transition-colors duration-200"
                  onClick={onClose}
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
