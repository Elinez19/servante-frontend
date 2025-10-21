"use client";

import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
}

interface AboutTeamProps {
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  initials,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 group">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div
          className={`w-24 h-24 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}
        >
          {initials}
        </div>
      </div>

      {/* Info */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-[#1e3a8a]">{name}</h3>
        <p className="text-[#f97316] font-medium text-sm">{role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
      </div>

      {/* Social Links Placeholder */}
      <div className="flex justify-center gap-3 mt-4 pt-4 border-t border-gray-100">
        <button className="w-8 h-8 bg-gray-100 hover:bg-[#f97316] rounded-full flex items-center justify-center transition-colors duration-200 group/btn">
          <svg
            className="w-4 h-4 text-gray-600 group-hover/btn:text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>
        <button className="w-8 h-8 bg-gray-100 hover:bg-[#1e3a8a] rounded-full flex items-center justify-center transition-colors duration-200 group/btn">
          <svg
            className="w-4 h-4 text-gray-600 group-hover/btn:text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </button>
        <button className="w-8 h-8 bg-gray-100 hover:bg-[#0077b5] rounded-full flex items-center justify-center transition-colors duration-200 group/btn">
          <svg
            className="w-4 h-4 text-gray-600 group-hover/btn:text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const AboutTeam: React.FC<AboutTeamProps> = ({ className = "" }) => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in tech and service industries.",
      initials: "SJ",
      gradientFrom: "from-[#1e3a8a]",
      gradientTo: "to-[#3b82f6]",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "AI expert passionate about building scalable platforms.",
      initials: "MC",
      gradientFrom: "from-[#f97316]",
      gradientTo: "to-[#ea580c]",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      bio: "Operations specialist ensuring seamless service delivery.",
      initials: "ER",
      gradientFrom: "from-[#1e3a8a]",
      gradientTo: "to-[#1e40af]",
    },
    {
      name: "David Thompson",
      role: "Head of Customer Success",
      bio: "Customer advocate dedicated to exceptional experiences.",
      initials: "DT",
      gradientFrom: "from-[#f97316]",
      gradientTo: "to-[#fb923c]",
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">
            Our Team
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mt-4 mb-4">
            Meet The Minds Behind Servat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A diverse team of passionate individuals committed to transforming
            how services are delivered and experienced.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              initials={member.initials}
              gradientFrom={member.gradientFrom}
              gradientTo={member.gradientTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
