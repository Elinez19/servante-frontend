"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/customs/Button";
import { ArrowUpRight } from "lucide-react";

interface GetWorkersGetGigsProps {
  className?: string;
}

export const GetWorkersGetGigs: React.FC<GetWorkersGetGigsProps> = ({
  className = "",
}) => {
  return (
    <section className={`py-16 px-4 bg-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]">
          {/* Left Column - GET WORKERS */}
          <div className="bg-[#1e3a8a] flex flex-col justify-center items-center text-center p-12 lg:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 max-w-md">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
                GET WORKERS
              </h2>

              <p className="text-white text-lg leading-relaxed mb-8 text-left">
                Servante Get Workers provides a fast, simple, and reliable way
                to hire Workers on the fly at low costs with little to no lead
                times.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/workers">
                  <Button
                    className="bg-white hover:bg-gray-100 text-[#1e3a8a] font-semibold shadow-lg"
                    size="lg"
                  >
                    Explore Now
                  </Button>
                </Link>

                <Link
                  href="/workers"
                  aria-label="Explore Workers"
                  className="w-12 h-12 bg-white hover:bg-gray-100 text-[#1e3a8a] rounded-full shadow-lg flex items-center justify-center transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - GET GIGS */}
          <div className="bg-[#f97316] flex flex-col justify-center items-center text-center p-12 lg:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#1e3a8a]/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 max-w-md">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
                GET GIGS
              </h2>

              <p className="text-white text-lg leading-relaxed mb-8 text-left">
                Work on your terms. Servante gives you the freedom and control
                to find the work opportunities best suited to you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/gigs">
                  <Button
                    className="bg-white hover:bg-gray-100 text-[#f97316] font-semibold shadow-lg"
                    size="lg"
                  >
                    Find Work
                  </Button>
                </Link>

                <Link
                  href="/gigs"
                  aria-label="Find Work"
                  className="w-12 h-12 bg-white hover:bg-gray-100 text-[#f97316] rounded-full shadow-lg flex items-center justify-center transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
