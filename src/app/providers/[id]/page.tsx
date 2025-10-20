"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { providersData } from "@/data/providersData";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  MapPin,
  Star,
  CheckCircle2,
  Clock,
  Briefcase,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  Award,
  Globe,
  ArrowLeft,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProviderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const providerId = params.id as string;

  const provider = providersData.find((p) => p.id === providerId);

  if (!provider) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Provider Not Found
          </h1>
          <Button
            onClick={() => router.push("/providers")}
            className="bg-black hover:bg-gray-800 text-white"
          >
            Back to Providers
          </Button>
        </div>
      </div>
    );
  }

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "busy":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getAvailabilityText = (status: string) => {
    switch (status) {
      case "available":
        return "Available Now";
      case "busy":
        return "Currently Busy";
      case "offline":
        return "Offline";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      {/* Back Navigation */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/providers")}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Providers
          </Button>
        </div>
      </section>

      {/* Cover Image */}
      {provider.coverImage && (
        <div className="relative h-64 lg:h-80 w-full">
          <Image
            src={provider.coverImage}
            alt={`${provider.name} cover`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      {/* Main Content */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Left Column - Provider Info */}
            <div className="lg:col-span-8 space-y-6">
              {/* Profile Card */}
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="relative">
                      <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                        <AvatarImage
                          src={provider.avatar}
                          alt={provider.name}
                        />
                        <AvatarFallback className="bg-black text-white text-2xl">
                          {provider.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute bottom-0 right-0 w-5 h-5 rounded-full border-4 border-white ${getAvailabilityColor(
                          provider.availability
                        )}`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold text-gray-900">
                              {provider.name}
                            </h1>
                            {provider.verified && (
                              <CheckCircle2 className="w-6 h-6 text-black" />
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">
                              {provider.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Stats Row */}
                      <div className="flex flex-wrap items-center gap-4 mt-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span className="text-lg font-semibold text-gray-900">
                            {provider.rating}
                          </span>
                          <span className="text-gray-600">
                            ({provider.reviewCount} reviews)
                          </span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="text-gray-900 font-semibold">
                            {provider.successRate}% Success Rate
                          </span>
                        </div>
                      </div>

                      {/* Badges */}
                      {provider.badges && provider.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {provider.badges.map((badge, idx) => (
                            <Badge
                              key={idx}
                              className="bg-black text-white hover:bg-gray-800"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Availability Status */}
                      <div className="flex items-center gap-2 mt-4">
                        <div
                          className={`w-3 h-3 rounded-full ${getAvailabilityColor(
                            provider.availability
                          )}`}
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {getAvailabilityText(provider.availability)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {provider.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs Section */}
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="skills">Skills</TabsTrigger>
                      <TabsTrigger value="certifications">
                        Certifications
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6 mt-6">
                      {/* Specialties */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Specialties
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {provider.specialties.map((specialty, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-sm py-2 px-3"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Languages */}
                      {provider.languages && provider.languages.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Languages
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {provider.languages.map((language, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg"
                              >
                                <Globe className="w-4 h-4 text-gray-600" />
                                <span className="text-gray-800">
                                  {language}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Briefcase className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">
                            {provider.completedJobs}
                          </div>
                          <div className="text-sm text-gray-600">
                            Completed Jobs
                          </div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Clock className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-gray-900">
                            {provider.responseTime}
                          </div>
                          <div className="text-sm text-gray-600">
                            Response Time
                          </div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Calendar className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-gray-900">
                            {new Date(provider.memberSince).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            Member Since
                          </div>
                        </div>
                        <div className="text-center p-4 bg-black rounded-lg">
                          <div className="text-2xl font-bold text-white">
                            ${provider.hourlyRate}
                          </div>
                          <div className="text-sm text-gray-300">Per Hour</div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="skills" className="mt-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Top Skills
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {provider.topSkills.map((skill, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              <span className="text-gray-800 font-medium">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="certifications" className="mt-6">
                      {provider.certifications &&
                      provider.certifications.length > 0 ? (
                        <div className="space-y-3">
                          {provider.certifications.map((cert, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                            >
                              <Award className="w-6 h-6 text-black" />
                              <span className="text-gray-900 font-medium">
                                {cert}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600 text-center py-8">
                          No certifications listed
                        </p>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Card */}
            <div className="lg:col-span-4 mt-6 lg:mt-0">
              <Card className="shadow-md sticky top-4">
                <CardContent className="p-6">
                  <div className="text-center mb-6 pb-6 border-b border-gray-200">
                    <div className="text-4xl font-bold text-gray-900">
                      ${provider.hourlyRate}
                    </div>
                    <div className="text-gray-600">Per Hour</div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white text-lg py-6">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Contact Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 hover:bg-gray-50 text-lg py-6"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Request Call
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 hover:bg-gray-50 text-lg py-6"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Response Rate
                    </h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Typically responds</span>
                      <span className="font-semibold text-gray-900">
                        {provider.responseTime}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-black h-2 rounded-full"
                        style={{ width: `${provider.successRate}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      {provider.successRate}% success rate
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      🔒 Your payment is protected. Only release funds when work
                      is complete.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
