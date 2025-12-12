import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import SponsorBooth from "./pages/SponsorBooth";
import EventPage from "./pages/EventPage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const navigate = useNavigate();
  const handleSponsorClick = (sponsor) => {
    setSelectedSponsor(sponsor);
    navigate(`/booth/${sponsor.id}`);
  };

  const handleBack = () => {
    setSelectedSponsor(null);
    navigate(-1);
  };

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route
          path="/sponsors"
          element={<LandingPage onSponsorClick={handleSponsorClick} />}
        />
        <Route path="/event" element={<EventPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/booth/:id"
          element={<SponsorBooth onBack={handleBack} />}
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
