import React, { useState } from "react";
import {
  Menu,
  X,
  Calendar,
  Users,
  Zap,
  Heart,
  HelpCircle,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import rasLogo from "../assets/company/RAS Logo.png";
import { useNavigate } from "react-router-dom";

export default function EventLanding() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-700 to-cyan-200"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <nav className="relative backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-semibold"
            >
              <ArrowLeft size={24} />
              <span>Back</span>
            </button>
            <img
              alt="company logo"
              src={rasLogo}
              className="w-20 h-20 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md flex items-center justify-center font-bold text-white text-xl"
            />
          </div>
        </div>
      </nav>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-12 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            LOO Awards 2025
          </h1>
          <p className="text-xl text-white/90">
            Recognizing excellence in restroom cleanliness and management across
            Singapore
          </p>
        </div>

        <div className="space-y-8">
          <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Scope & Eligibility
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Scope</h3>
                <p className="text-white/90 leading-relaxed">
                  All efforts made by an organisation and individual in
                  promoting and enhancing the standard of restroom cleanliness
                  will be taken into account in the selection of recipients for
                  the awards.
                </p>
              </div>

              <div className="pt-4 border-t border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">
                  Who Can Participate?
                </h3>
                <p className="text-white/90 leading-relaxed">
                  The LOO Awards is open to all organisations and individuals in
                  Singapore.
                </p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-white mb-8">
              Award Categories
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  🏢 Organisation
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">Private/Public Sector</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">
                      Educational (Tertiary) Institution
                    </span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  🧹 Cleaning Industry
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">Cleaning Crew</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">
                      Cleaning Service Provider
                    </span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  👤 Individual
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">Private/Public Sector</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">Youth</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">LOO Kidz</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Criteria for Organisations
            </h3>
            <p className="text-white/80 mb-6 text-sm">
              Organisations nominated for the awards should have fulfilled some
              or all of the following criteria:
            </p>

            <div className="space-y-4">
              {[
                "Good restroom design",
                "Good practices such as recognition, best sourcing, etc",
                "Initiatives or projects in line with restroom cleanliness & maintenance",
                "Participation in RAS programmes or activities",
                "Collaborations with RAS",
              ].map((criteria, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400/30 flex items-center justify-center pt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-100"></div>
                  </div>
                  <p className="text-white/90">{criteria}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Criteria for Cleaning Industry
            </h3>
            <p className="text-white/80 mb-6 text-sm">
              Cleaning Industry nominated for the awards should have fulfilled
              some or all of the following criteria:
            </p>

            <div className="space-y-4">
              {[
                "Help cleaners to upgrade their skills",
                "Provide the right equipment for the cleaner",
                "Take care of cleaners' welfare",
                "Dedicated cleaner with good customer service as perceived by the user & operator",
              ].map((criteria, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400/30 flex items-center justify-center pt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-100"></div>
                  </div>
                  <p className="text-white/90">{criteria}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Criteria for Individuals
            </h3>
            <p className="text-white/80 mb-6 text-sm">
              Individuals nominated for the awards should have fulfilled some or
              all of the following criteria:
            </p>

            <div className="space-y-4">
              {[
                "Initiatives or projects in line with restroom cleanliness & maintenance",
                "Participation in RAS programmes or activities",
                "Provision of valuable feedback that contributed to the enhancement of restrooms",
              ].map((criteria, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400/30 flex items-center justify-center pt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-100"></div>
                  </div>
                  <p className="text-white/90">{criteria}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(-1)}
            className="backdrop-blur-md bg-white/15 hover:bg-white/25 border border-white/30 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Return to Event Home
          </button>
        </div>
      </div>
    </div>
  );
}
