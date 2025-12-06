import React, { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import rasLogo from "../assets/company/RAS Logo.png";

export default function EventLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-700 to-cyan-200"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => navigate(`/event`)}
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

      {/* About Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-12 mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            About RAS
          </h1>
          <p className="text-xl text-white/90">
            Restroom Association (Singapore) - Advocating for Clean Public
            Toilets Since 1998
          </p>
        </div>

        {/* Official Information */}
        <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-10 mb-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Official Registration
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-white/70 text-sm font-semibold">
                  Charity Registration Number
                </p>
                <p className="text-white text-lg font-bold">01757</p>
              </div>
              <div>
                <p className="text-white/70 text-sm font-semibold">
                  Charity Registration Date
                </p>
                <p className="text-white text-lg font-bold">09/01/2004</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-white/70 text-sm font-semibold">
                  ROS Registration Number
                </p>
                <p className="text-white text-lg font-bold">S98SS0167J</p>
              </div>
              <div>
                <p className="text-white/70 text-sm font-semibold">
                  IPC Effective Date
                </p>
                <p className="text-white text-lg font-bold">01/05/2010</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-white/70 text-sm font-semibold">
              Constitution: Society
            </p>
            <p className="text-white text-lg font-bold">
              Date of Establishment: 08/12/1998
            </p>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-emerald-100 bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-300/30">
            <CheckCircle size={18} />
            <span className="font-semibold">
              Institution of Public Character (IPC)
            </span>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="space-y-8">
          <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-white/90 leading-relaxed mb-6">
              As a non-profit organization which advocates for clean public
              toilets, the Restroom Association (Singapore) or RAS strives to
              reach out to our target audience with innovative programmes and
              activities that have impact and can be sustained.
            </p>
            <p className="text-white/90 leading-relaxed">
              Since its inception in 1998, RAS has been working closely with
              partners from the 3P sectors i.e. public, private and people
              sectors, which are cornerstones for the success of our programmes,
              to raise the benchmarks in the whole restroom value chain. Coupled
              with this, RAS also engages in continuous consultation, research &
              development, regional and global conferences to keep abreast of
              the latest in toilet related technologies and management.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Challenge & Vision
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              The challenge for RAS is to meet the rising expectations of users
              and elevate the standards of design and cleanliness. In our bid to
              meet the rising expectations, we must take on the role of a social
              change agent by:
            </p>

            <div className="space-y-4 mb-6">
              {[
                "Selling the benefits of the cause to policy makers, building owners, architects, designers, facility managers, and cleaning contractors",
                "Investigating and finding the root cause of dirty toilets",
                "Identifying the needs of various users including tourists and foreign workers to promote better designed toilets",
                "Constantly sourcing for the best practices in cleanliness, design and maintenance of public toilets",
                "Reviewing and improving local standards",
                "Raising awareness among the community on public health issues and educating users on good toilet etiquette",
              ].map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400/30 flex items-center justify-center pt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-100"></div>
                  </div>
                  <p className="text-white/90">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-white/90 leading-relaxed font-semibold text-lg">
              Together with the government and other strategic partners, we must
              continue to ensure that Singapore's public toilets remain an icon
              of our nation's star quality.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-white mb-6">Learn More</h2>
            <p className="text-white/90 mb-4">
              Visit our official website for more information:
            </p>
            <a
              href="https://www.toilet.org.sg/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 backdrop-blur-md bg-white/25 hover:bg-white/35 border border-white/40 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Visit toilet.org.sg
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(`/event`)}
            className="backdrop-blur-md bg-white/15 hover:bg-white/25 border border-white/30 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Return to Event Home
          </button>
        </div>
      </div>
    </div>
  );
}
