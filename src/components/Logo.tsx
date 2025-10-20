import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative w-10 h-10">
        {/* House/Building Base */}
        <div className="absolute inset-0 bg-[#1e3a8a] rounded-sm"></div>

        {/* Roof */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#f97316]"></div>

        {/* Inner S design */}
        <div className="absolute inset-2 flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-[#f97316] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Text */}
      <div className="text-2xl font-semibold">
        <span className="text-[#1e3a8a]">S</span>
        <span className="text-[#f97316]">erv</span>
        <span className="text-[#1e3a8a]">ante</span>
      </div>
    </div>
  );
};
