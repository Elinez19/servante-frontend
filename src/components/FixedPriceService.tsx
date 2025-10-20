"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  CalendarDays,
  CreditCard,
  ArrowUpRight,
} from "lucide-react";

interface FixedPriceServiceProps {
  className?: string;
}

export const FixedPriceService: React.FC<FixedPriceServiceProps> = ({
  className = "",
}) => {
  return (
    <section className={`py-16 px-4 bg-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Image */}
            <div className="relative lg:w-1/2 h-96 lg:h-auto">
              <Image
                src="/home_one_contact_img.png"
                alt="Professional electrician working"
                fill
                className="object-cover rounded-l-2xl lg:rounded-l-2xl lg:rounded-r-none"
              />
              {/* Dark blue L-shaped background element */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1A234B] rounded-tr-3xl opacity-90"></div>
            </div>

            {/* Right Section - Content */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              {/* Service Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">
                  Fixed Price Service
                </h2>

                {/* Service Features */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-medium">
                      See your price.
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <CalendarDays className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-medium">
                      Book a time.
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-medium">
                      Pay online.
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1A234B] mb-4 leading-tight">
                Looking to book a<br />
                fixed price service?
              </h1>

              {/* Descriptive Text */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Interested in scheduling a service at a set rate? Browse our
                selection of fixed-price offerings and book with confidence
                today.
              </p>

              {/* Service List */}
              <p className="text-gray-600 mb-8">
                Plumbing, Handyman, House Cleaning, and more...
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#FFD140] hover:bg-[#FFD140]/90 text-[#1A234B] font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                  size="lg"
                >
                  <Link href="/contact">Contact Now</Link>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 bg-[#FFD140] hover:bg-[#FFD140]/90 text-[#1A234B] border-none rounded-full"
                >
                  <Link href="/contact" aria-label="Contact Now">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
