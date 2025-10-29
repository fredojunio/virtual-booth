import React, { useState } from "react";
import LandingPage from "./LandingPage";
import SponsorBooth from "./SponsorBooth";

function App() {
  const [currentView, setCurrentView] = useState("landing"); // 'landing', 'about', 'ras', 'donate', 'sponsor', 'booth'
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const handleSponsorClick = (sponsor) => {
    setSelectedSponsor(sponsor);
    setCurrentView("booth");
  };

  const renderView = () => {
    switch (currentView) {
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
          />
        );
    }
  };

  return <div className="min-h-screen bg-gray-50">{renderView()}</div>;
}

export default App;
