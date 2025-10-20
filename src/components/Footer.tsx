"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about/story" },
      { label: "Mission & Vision", href: "/about/mission" },
      { label: "Leadership Team", href: "/about/leadership" },
      { label: "Careers", href: "/careers" },
    ],
    services: [
      { label: "House Cleaning", href: "/services/house-cleaning" },
      { label: "Office Cleaning", href: "/services/office-cleaning" },
      { label: "Deep Cleaning", href: "/services/deep-cleaning" },
      { label: "Carpet Cleaning", href: "/services/carpet-cleaning" },
      { label: "Window Cleaning", href: "/services/window-cleaning" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Book a Service", href: "/book" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Refund Policy", href: "/refunds" },
      { label: "Insurance", href: "/insurance" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: <Linkedin className="w-5 h-5" />,
    },
  ];

  return (
    <footer className={`bg-[#0f172a] text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            <p className="text-white/80 leading-relaxed max-w-md">
              Servat is your AI-Powered Remote Maid Booking System. We connect
              you with top-rated professionals for all your cleaning and
              maintenance needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#f97316]" />
                <span className="text-white/80">New York, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#f97316]" />
                <span className="text-white/80">support@servat.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f97316]" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-[#f97316] rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#f97316] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#f97316] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#f97316] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-white/80">
                Get the latest updates on new services, special offers, and
                cleaning tips.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Servat. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-[#f97316] text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
