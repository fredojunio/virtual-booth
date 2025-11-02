import React, { useState } from "react";
import LandingPage from "./LandingPage";
import SponsorBooth from "./SponsorBooth";
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
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route
          path="/"
          element={<LandingPage onSponsorClick={handleSponsorClick} />}
        />
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
