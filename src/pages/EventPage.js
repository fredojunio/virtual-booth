import React, { useState } from "react";
import { Menu, X, Calendar, Users, Zap, Heart, Info } from "lucide-react";
import rasLogo from "../assets/company/RAS Logo.png";
import { useNavigate } from "react-router-dom";

export default function EventLanding() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: Calendar, label: "Event Details", id: "event" },
    { icon: Users, label: "Speakers & Panelists", id: "speakers" },
    { icon: Zap, label: "Sponsors & Products", id: "sponsors" },
    { icon: Heart, label: "Engagement Groups", id: "engagement" },
    { icon: Info, label: "About", id: "about" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-700 to-cyan-200"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img
                alt="company logo"
                src={rasLogo}
                className="w-20 h-20 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md flex items-center justify-center font-bold text-white text-xl"
              />
              {/* <span className="text-white font-bold text-lg hidden sm:inline">
                Event Hub
              </span> */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8">
              {menuItems.map((item) => (
                <button
                  onClick={() => navigate(`/${item.id}`)}
                  key={item.id}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group"
                >
                  <item.icon
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-white/20">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className="w-full text-left text-white/80 hover:text-white py-3 px-4 text-sm font-medium flex items-center gap-3 transition-colors"
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                Transform{" "}
                <span className="bg-gradient-to-r from-mist-100 to-forest-400 bg-clip-text text-transparent">
                  Your World
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Join us for an extraordinary event bringing together industry
                leaders, innovators, and changemakers to drive meaningful
                impact.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { count: "50+", label: "Speakers" },
                { count: "1000+", label: "Attendees" },
                { count: "25+", label: "Partners" },
                { count: "5", label: "Tracks" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="backdrop-blur-md bg-white/15 border border-white/30 rounded-2xl hover:bg-white/20 p-4 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.count}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="backdrop-blur-md bg-white/25 hover:bg-white/35 border border-white/40 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Register Now
              </button>
              <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Glass Cards Stack */}
          <div className="hidden lg:block relative h-96">
            <div className="absolute inset-0 space-y-4">
              {[
                { title: "Event Details", delay: 0 },
                { title: "Speakers & Panelists", delay: 20 },
                { title: "Sponsors & Products", delay: 40 },
              ].map((card, i) => (
                <div
                  key={i}
                  className="backdrop-blur-xl bg-white/20 border border-white/40 rounded-2xl p-6 hover:bg-white/30 transition-all duration-500 hover:scale-105 cursor-pointer"
                  style={{
                    transform: `rotate(${i * 3}deg) translateY(${i * 20}px)`,
                  }}
                >
                  <h3 className="text-white font-bold text-lg">{card.title}</h3>
                  <p className="text-white/70 text-sm mt-2">
                    Discover more about our event
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Grid Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Explore Our Event
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {menuItems.map((item, i) => (
            <button
              onClick={() => navigate(`/${item.id}`)}
              key={item.id}
              className=" text-left backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 hover:bg-white/25 transition-all duration-300 hover:scale-110 cursor-pointer group"
            >
              <div className="mb-4 p-4 rounded-full bg-white/20 w-fit group-hover:bg-white/30 transition-colors">
                <item.icon size={32} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {item.label}
              </h3>
              <p className="text-white/70 text-sm">
                {i === 0 && "Learn when, where, and how to participate"}
                {i === 1 && "Meet our expert speakers and panelists"}
                {i === 2 && "Discover our amazing partners"}
                {i === 3 && "Connect with like-minded community members"}
                {i === 4 && "Find ways to contribute and make a difference"}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative backdrop-blur-md bg-white/10 border-t border-white/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">About RAS</h4>
              <p className="text-white/70 text-sm">
                Building positive change through community engagement.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Become a Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sponsorship
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <p className="text-white/70 text-sm">
                Stay updated with our latest news and updates.
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 RAS Event. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
