"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, User, BookOpen } from "lucide-react";

interface BlogPost {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
}

interface BlogSectionProps {
  className?: string;
  posts?: BlogPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  className = "",
  posts,
}) => {
  // Default blog posts data
  const defaultPosts: BlogPost[] = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&h=600&fit=crop",
      category: "Home Services",
      title: "Top 10 Tips for Choosing the Right Home Cleaning Service",
      excerpt:
        "Discover essential factors to consider when selecting a professional cleaning service for your home. Learn about certifications, reviews, and more.",
      author: "Sarah Johnson",
      date: "Oct 15, 2025",
      readTime: "5 min read",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f641?w=800&h=600&fit=crop",
      category: "Professional Tips",
      title: "How to Prepare Your Home for Professional Cleaning",
      excerpt:
        "Make the most of your professional cleaning service with these preparation tips. Save time and ensure a thorough clean every time.",
      author: "Michael Chen",
      date: "Oct 12, 2025",
      readTime: "4 min read",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
      category: "Business Insights",
      title: "The Future of Gig Economy: Trends in Service Industry",
      excerpt:
        "Explore emerging trends in the service industry and how technology is transforming the way we connect service providers with customers.",
      author: "Emma Williams",
      date: "Oct 10, 2025",
      readTime: "6 min read",
    },
  ];

  const postsToShow = posts || defaultPosts;

  return (
    <section className={`py-16 lg:py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="space-y-2 mb-6 md:mb-0">
            {/* Blog Label */}
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#f97316]" />
              <span className="text-[#f97316] text-sm font-bold uppercase tracking-wide">
                Our Blog
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
              Latest News & Insights
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Stay updated with the latest trends, tips, and insights from the
              service industry
            </p>
          </div>

          {/* View All Button - Desktop */}
          <Link
            href="/blog"
            className="hidden md:flex bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 items-center gap-2"
          >
            <span>View All Posts</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {postsToShow.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#1e3a8a] px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-[#f97316] transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#f97316] font-medium">
                    {post.readTime}
                  </span>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-[#1e3a8a] hover:text-[#f97316] font-semibold text-sm transition-colors duration-200 group/link"
                >
                  <span>Read More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div className="text-center mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-flex bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 items-center gap-2"
          >
            <span>View All Posts</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
