"use client";

import React from "react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  badgeColor: string;
  textColor: string;
}

interface HowItWorksProps {
  className?: string;
}

const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  backgroundColor,
  borderColor,
  badgeColor,
  textColor,
}) => {
  return (
    <div
      className={`${backgroundColor} ${borderColor} border rounded-xl p-6 relative hover:shadow-lg transition-all duration-300 hover:scale-105`}
    >
      {/* Numbered Badge */}
      <div
        className={`${badgeColor} w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 shadow-lg`}
      >
        <span className={`${textColor} text-sm font-bold`}>{number}</span>
      </div>

      {/* Content */}
      <div className="pt-2">
        <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const HowItWorks: React.FC<HowItWorksProps> = ({ className = "" }) => {
  const steps = [
    {
      number: "01",
      title: "Tasker Evaluation",
      description: "Choose a Tasker by price, skills, and reviews.",
      backgroundColor: "bg-orange-50",
      borderColor: "border-orange-300",
      badgeColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      number: "02",
      title: "Book Now",
      description: "Schedule a Tasker as early as today",
      backgroundColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      badgeColor: "bg-yellow-400",
      textColor: "text-black",
    },
    {
      number: "03",
      title: "Get Extra Tip Hub",
      description: "Chat, pay, tip, and review all in one place easily.",
      backgroundColor: "bg-blue-50",
      borderColor: "border-blue-300",
      badgeColor: "bg-green-500",
      textColor: "text-white",
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Working Process Label */}
          <div className="mb-4">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wide">
              Working Process
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            <span className="text-black">How it</span>{" "}
            <span className="text-black underline decoration-blue-500 decoration-4 underline-offset-4">
              Works
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              backgroundColor={step.backgroundColor}
              borderColor={step.borderColor}
              badgeColor={step.badgeColor}
              textColor={step.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
