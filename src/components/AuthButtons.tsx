import React from "react";
import Link from "next/link";

interface AuthButtonsProps {
  className?: string;
}

export const AuthButtons: React.FC<AuthButtonsProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Sign In Button */}
      <Link
        href="/signin"
        className="px-6 py-2 text-sm font-medium text-[#1e3a8a] bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
      >
        Sign In
      </Link>

      {/* Sign Up Button */}
      <Link
        href="/signup"
        className="px-6 py-2 text-sm font-medium text-white bg-[#f97316] rounded-lg hover:bg-[#ea580c] transition-colors duration-200"
      >
        Sign Up
      </Link>
    </div>
  );
};
