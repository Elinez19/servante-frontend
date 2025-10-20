"use client";

import React from "react";

interface StepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HowItWorksProps {
  className?: string;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 relative">
      {/* Step Number */}
      <div className="text-6xl lg:text-8xl font-bold text-white/20 absolute -top-4 -left-4 lg:-top-8 lg:-left-8">
        {number}
      </div>

      {/* Icon Circle */}
      <div className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 border-2 border-white rounded-full flex items-center justify-center bg-transparent">
        {icon}
      </div>

      {/* Content */}
      <div className="space-y-2 max-w-xs">
        <h3 className="text-xl lg:text-2xl font-bold text-white">{title}</h3>
        <p className="text-sm lg:text-base text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const HowItWorks: React.FC<HowItWorksProps> = ({ className = "" }) => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Service",
      description:
        "Pick the service you are looking for- from the website or the app.",
      icon: (
        <svg
          className="w-8 h-8 lg:w-10 lg:h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Pick Your Schedule",
      description:
        "Select your preferred date and time that works best for you.",
      icon: (
        <svg
          className="w-8 h-8 lg:w-10 lg:h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Place The Order",
      description:
        "Confirm your booking and get ready for professional service.",
      icon: (
        <svg
          className="w-8 h-8 lg:w-10 lg:h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="bg-[#1e3a8a] rounded-2xl lg:rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#f97316] rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              {/* How It Works Label */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[#f97316] text-lg font-bold">
                  &gt;&gt;
                </span>
                <span className="text-[#f97316] text-sm font-bold uppercase tracking-wide">
                  How It Works
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Convenient Service Access
              </h2>

              {/* Description */}
              <div className="max-w-3xl mx-auto">
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                  Launch your online presence with ease! Our Professional
                  Website
                </p>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                  Setup service offers a comprehensive solution for your
                  business needs.
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
              {/* Connecting Lines - Hidden on mobile */}
              <div className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 w-full h-0.5">
                {/* Line from Step 1 to Step 2 */}
                <div className="absolute top-0 left-1/3 w-1/3 h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 200 4"
                    fill="none"
                  >
                    <path
                      d="M0 2 Q100 0 200 2"
                      stroke="#f97316"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      fill="none"
                    />
                    <polygon points="190,0 200,2 190,4" fill="#f97316" />
                  </svg>
                </div>
              </div>

              {steps.map((step, index) => (
                <Step
                  key={index}
                  number={step.number}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
