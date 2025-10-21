import { Logo } from "@/components/layout/Logo";
import Link from "next/link";
import { Check } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Image/Branding */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-black via-gray-900 to-gray-800 items-center justify-center p-12">
        <div className="max-w-md text-white">
          <h2 className="text-4xl font-bold mb-6">Welcome to Servante</h2>
          <p className="text-lg text-white/80 mb-8">
            Experience luxury and excellence in every interaction. Join our
            premium platform and unlock access to world-class services.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-black" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Premium Experience</h3>
                <p className="text-white/70 text-sm">
                  Luxury services tailored to your needs
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-black" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Quick Setup</h3>
                <p className="text-white/70 text-sm">
                  Get started in minutes with our streamlined process
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-black" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Trusted Platform</h3>
                <p className="text-white/70 text-sm">
                  Join thousands who trust us with their business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-3xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
}
