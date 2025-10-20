import React, { useState } from "react";
import LandingPage from "./LandingPage";
import SponsorBooth from "./SponsorBooth";

function App() {
  const [currentView, setCurrentView] = useState("landing"); // 'landing', 'about', 'ras', 'donate', 'sponsor', 'booth'
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const sponsors = [
    { id: "gold1", name: "EcoFlush Pte Ltd", tier: "gold" },
    { id: "silver1", name: "PureSan Solutions", tier: "silver" },
    { id: "bronze1", name: "CleanRest Co", tier: "bronze" },
  ];

  const handleSponsorClick = (sponsor) => {
    setSelectedSponsor(sponsor);
    setCurrentView("booth");
  };

  const renderView = () => {
    switch (currentView) {
      case "about":
        return (
          <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">What is the Loo Awards?</h1>
            <p className="mb-4 text-gray-700">
              The Loo Awards is an annual event held in conjunction with World
              Toilet Day to celebrate and recognize excellence in restroom
              cleanliness, innovation, and advocacy across Singapore.
            </p>
            <p className="mb-6 text-gray-700">
              Since its inception, the awards have grown into a key platform for
              promoting public health, sustainability, and dignity through
              better sanitation.
            </p>
            <button
              onClick={() => setCurrentView("landing")}
              className="text-blue-600 font-medium hover:underline"
            >
              ← Back to Home
            </button>
          </div>
        );

      case "ras":
        return (
          <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">
              More about Restroom Association Singapore
            </h1>
            <p className="mb-4 text-gray-700">
              Founded in 1998, the Restroom Association (Singapore) is a
              non-profit organization dedicated to promoting clean, accessible,
              and inclusive restrooms for all.
            </p>
            <p className="mb-6 text-gray-700">
              RAS works with government agencies, businesses, and communities to
              uplift restroom standards, train cleaners, and advocate for better
              sanitation policies.
            </p>
            <button
              onClick={() => setCurrentView("landing")}
              className="text-blue-600 font-medium hover:underline"
            >
              ← Back to Home
            </button>
          </div>
        );

      case "donate":
        return (
          <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">
              Donate towards the Cause
            </h1>
            <p className="mb-4 text-gray-700">
              Support our frontline restroom cleaners through{" "}
              <strong>Sanigives</strong>, RAS’s official donation platform.
            </p>
            <a
              href="https://sanigives.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
            >
              Donate Now →
            </a>
            <p className="mt-6 text-gray-600 italic">
              Your contribution helps provide welfare, training, and recognition
              for cleaners who keep our public spaces hygienic.
            </p>
            <button
              onClick={() => setCurrentView("landing")}
              className="block mt-4 text-blue-600 font-medium hover:underline"
            >
              ← Back to Home
            </button>
          </div>
        );

      case "sponsor":
        return (
          <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">
              Want to Join as a Sponsor?
            </h1>
            <p className="mb-4 text-gray-700">
              Be part of the Loo Awards 2026! We offer Bronze, Silver, and Gold
              sponsorship tiers with increasing visibility, engagement, and
              brand alignment with public health advocacy.
            </p>
            <p className="mb-6 text-gray-700">
              Sponsors get a virtual booth, logo placement, speaking
              opportunities, and more.
            </p>
            <button
              onClick={() => setCurrentView("landing")}
              className="text-blue-600 font-medium hover:underline"
            >
              ← Back to Home
            </button>
          </div>
        );

      case "booth":
        return (
          <SponsorBooth
            sponsor={selectedSponsor}
            onBack={() => setCurrentView("landing")}
          />
        );

      default:
        return (
          <LandingPage
            onViewChange={setCurrentView}
            onSponsorClick={handleSponsorClick}
            sponsors={sponsors}
          />
        );
    }
  };

  return <div className="min-h-screen bg-gray-50">{renderView()}</div>;
}

export default App;
