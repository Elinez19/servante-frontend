"use client";

import React from "react";
import Link from "next/link";
import { MegaMenuData } from "@/types/navigation";

interface MobileMegaMenuProps {
  megaMenu: MegaMenuData;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMegaMenu: React.FC<MobileMegaMenuProps> = ({
  megaMenu,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-[#1e3a8a]">
          {megaMenu.title}
        </h2>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto h-full pb-20">
        <div className="p-4 space-y-6">
          {megaMenu.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-[#1e3a8a] border-b border-gray-200 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      onClick={onClose}
                    >
                      <div className="font-medium text-[#1e3a8a]">
                        {link.label}
                      </div>
                      {link.description && (
                        <div className="text-sm text-gray-600 mt-1">
                          {link.description}
                        </div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Featured Section */}
          {megaMenu.featured && (
            <div className="mt-8">
              <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">
                  {megaMenu.featured.title}
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  {megaMenu.featured.description}
                </p>
                <Link
                  href={megaMenu.featured.href}
                  className="inline-block bg-white text-[#f97316] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                  onClick={onClose}
                >
                  Learn More
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
