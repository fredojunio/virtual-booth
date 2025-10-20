import React from "react";

const SponsorBooth = ({ sponsor, onBack }) => {
  // Define clickpoints based on tier
  const getClickPoints = () => {
    if (sponsor.tier === "gold") {
      return [
        { id: 1, x: "25%", y: "35%", label: "Company Video", url: "#" },
        { id: 2, x: "60%", y: "50%", label: "Our Mission", url: "#" },
        { id: 3, x: "40%", y: "75%", label: "Contact Us", url: "#" },
      ];
    } else if (sponsor.tier === "silver") {
      return [
        { id: 1, x: "30%", y: "40%", label: "Learn More", url: "#" },
        { id: 2, x: "65%", y: "60%", label: "Visit Website", url: "#" },
      ];
    } else {
      return [{ id: 1, x: "50%", y: "50%", label: "About Us", url: "#" }];
    }
  };

  const clickPoints = getClickPoints();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={onBack}
        className="mb-6 text-blue-600 font-medium hover:underline flex items-center"
      >
        ← Back to Home
      </button>

      <h1 className="text-2xl font-bold text-gray-800 mb-2">{sponsor.name}</h1>
      <p className="text-gray-600 mb-6">
        {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} Tier
        Sponsor
      </p>

      {/* Booth Photo with Hotspots */}
      <div className="relative w-full h-[500px] mb-8 rounded-xl overflow-hidden shadow-lg">
        <img
          src={`https://placehold.co/900x500/4b5563/white?text=${encodeURIComponent(
            sponsor.name
          )}+Booth`}
          alt={`${sponsor.name} Booth`}
          className="w-full h-full object-cover"
        />
        {clickPoints.map((cp) => (
          <a
            key={cp.id}
            href={cp.url}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-800 font-bold px-4 py-2 rounded-full text-sm shadow-md hover:bg-yellow-300 z-10"
            style={{ left: cp.x, top: cp.y }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cp.label}
          </a>
        ))}
      </div>

      <p className="text-gray-600 italic">
        Background: Booth photo taken during the Loo Awards 2025 event. Click on
        hotspots to explore more.
      </p>
    </div>
  );
};

export default SponsorBooth;
