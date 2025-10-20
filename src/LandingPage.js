import React from "react";

const LandingPage = ({ onViewChange, onSponsorClick, sponsors }) => {
  // Position sponsors as hotspots (adjust % as needed)
  const sponsorPositions = [
    { id: "gold1", x: "20%", y: "40%" },
    { id: "silver1", x: "50%", y: "55%" },
    { id: "bronze1", x: "78%", y: "38%" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Toilet Background — REPLACE with real image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://placehold.co/1400x900/1e40af/white?text=3D+Toilet+Render+Loo+Awards+2025')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Header Buttons */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 p-6 max-w-5xl mx-auto">
        {[
          { label: "What is the Loo Awards?", key: "about" },
          { label: "More about Restroom Association", key: "ras" },
          { label: "Donate towards the cause", key: "donate" },
          { label: "Want to join as a sponsor?", key: "sponsor" },
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => onViewChange(btn.key)}
            className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 transition transform hover:scale-105"
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Sponsor Hotspots (Stars) */}
      <div className="absolute inset-0 pointer-events-none">
        {sponsors.map((sponsor) => {
          const pos = sponsorPositions.find((p) => p.id === sponsor.id);
          if (!pos) return null;
          return (
            <div
              key={sponsor.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center pointer-events-auto cursor-pointer"
              style={{ left: pos.x, top: pos.y }}
              onClick={() => onSponsorClick(sponsor)}
              title={`Visit ${sponsor.name} Booth`}
            >
              <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center text-xl text-gray-800 border-2 border-yellow-600 shadow-lg">
                ★
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center px-4 py-2 bg-black bg-opacity-50 rounded-full text-sm font-medium">
        Each star represents a virtual booth led by an individual sponsor.
      </div>
    </div>
  );
};

export default LandingPage;
