import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { SPONSORS } from "../data/sponsors";
import { useParams } from "react-router-dom";
import LogoPanel from "../components/LogoPanel";
import ContactPanel from "../components/ContactPanel";
import VideoButton from "../components/VideoButton";
import IconPanel from "../components/IconPanel";
import MobileIconPanel from "../components/IconPanel";

const SponsorBooth = ({ onBack }) => {
  const [activePanels, setActivePanels] = useState({
    who: false,
    video: false,
    // smartToilet: false,
  }); // 'who', 'contact', 'video', 'smartToilet'
  const { id } = useParams();
  const sponsor = SPONSORS.find((s) => s.id === id);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeToiletIcon, setActiveToiletIcon] = useState(null); // 'icon1' or 'icon2'
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile hamburger
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIconClick = (iconId) => {
    setActiveToiletIcon((prev) => (prev === iconId ? null : iconId));
  };

  const handlePanelClick = (panelId) => {
    if (panelId === "video") {
      setShowVideoModal(true);
    } else {
      setActivePanels((prev) => ({
        ...prev,
        [panelId]: !prev[panelId],
      }));
    }
  };

  // Close panels when screen resizes to mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Close all panels on mobile
        setActivePanels({
          who: false,
          contact: false,
          video: false,
          smartToilet: false,
        });
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!sponsor) {
    return (
      <div className="flex items-center justify-center h-screen">
        Sponsor not found. <button onClick={onBack}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="relative w-[200vw] md:w-full h-screen overflow-y-hidden overflow-x-auto md:overflow-x-hidden">
      {/* Full-Screen Booth Photo Background */}
      <img
        src={sponsor.imageUrl}
        alt="Sponsor Booth"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-800/30 backdrop-blur-lg rounded-2xl p-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end items-center mb-4">
              {/* <h2 className="text-xl font-bold">Company Video</h2> */}
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={sponsor.videoUrl}
                title="Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Animated Content Wrapper */}
      {/* <div
        className={`relative h-full w-full z-10 transition-opacity ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className={isLoaded ? "animate-zoom-fade-in" : "opacity-0"}>
        </div>
      </div> */}

      <div className="relative z-10 hidden md:flex justify-between items-center p-4">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-neutral-800/30 text-white backdrop-blur-xl rounded-2xl hover:bg-brand-800/80 transition"
        >
          ←
        </button>

        {/* Desktop: Show Title */}
        <h1 className="text-2xl font-bold text-white hidden md:block">
          {sponsor.name}
        </h1>
      </div>

      <div className="relative md:hidden z-10 p-4">
        <button
          onClick={onBack}
          className="fixed px-4 py-2 bg-neutral-800/30 text-white backdrop-blur-xl rounded-2xl hover:bg-brand-800/80 transition"
        >
          ←
        </button>
      </div>

      {/* Mobile: Hamburger Menu */}
      <div className="md:hidden flex gap-2 mx-4">
        {/* <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="max-h-min max-w-min p-2 bg-gray-200 bg-opacity-80 backdrop-blur-md rounded-full hover:bg-gray-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}
        <MobileIconPanel
          icons={sponsor.points}
          onIconClick={handleIconClick}
          activeIcon={activeToiletIcon}
        />
      </div>
      {/* Mobile Menu Drawer */}
      {/* {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-black bg-opacity-90 z-50 p-4 md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mb-4 text-white underline"
          >
            Close Menu
          </button>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                handlePanelClick("who");
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 bg-gray-800 text-white rounded-lg"
            >
              Who are we?
            </button>

            <a
              href="http"
              className="w-full text-left px-4 py-3 bg-gray-800 text-white rounded-lg"
            >
              Contact Us!
            </a>
            <button
              onClick={() => {
                handlePanelClick("video");
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 bg-gray-800 text-white rounded-lg flex items-center gap-2"
            >
              <Icon icon="solar:play-bold" />
            </button>
          </div>
        </div>
      )} */}

      {/* Left Sidebar Buttons (Desktop Only) */}
      <div className="fixed left-4 top-20 flex-col z-20 flex">
        {/* Logo Panel */}
        <LogoPanel logo={sponsor.logo} />

        {/* Action Buttons */}
        <button
          onClick={() => handlePanelClick("who")}
          className={`mb-3 w-32 md:w-48 text-left px-4 py-3 rounded-2xl transition ${
            activePanels.who
              ? "bg-brand-800/80 backdrop-blur-lg text-white border border-brand-300"
              : "bg-neutral-800/30 hover:bg-neutral-950/40 backdrop-blur-xl text-white"
          }`}
        >
          Who are we?
        </button>
        <div
          className={`
                  grid w-full overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    activePanels.who
                      ? "grid-rows-[1fr] opacity-100 mb-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
        >
          <div className="overflow-hidden">
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out bg-neutral-800/30 backdrop-blur-lg text-white bg-opacity-90 p-6 rounded-2xl max-w-sm md:max-w-lg w-full shadow-xl`}
            >
              <h2 className="text-lg font-medium mb-3">Who are we?</h2>
              <p className="mb-4">{sponsor.description}</p>
              <a href="http" className="text-sky-400 underline">
                Click here to find out more about us!
              </a>
            </div>
          </div>
        </div>

        {/* Contact button */}
        <ContactPanel link="http" />

        {/* Video button */}
        <VideoButton
          isActive={activePanels.video}
          onToggle={() => handlePanelClick("video")}
        />
      </div>

      {/* Right Info Panel (Desktop Only) */}
      <IconPanel
        icons={sponsor.points}
        onIconClick={handleIconClick}
        activeIcon={activeToiletIcon}
      />

      {/* Mobile: Bottom Panel for Buttons */}
      {/* <div className="md:hidden fixed bottom-20 left-4 right-4 z-20 flex gap-2">
        <div
          className={`
                  grid w-full overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    activePanels.who
                      ? "grid-rows-[1fr] opacity-100 mb-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
        >
          <div className="overflow-hidden">
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out bg-neutral-800/30 backdrop-blur-lg text-white bg-opacity-90 p-6 rounded-2xl max-w-lg w-full shadow-xl`}
            >
              <h2 className="text-lg font-medium mb-3">Who are we?</h2>
              <p className="mb-4">{sponsor.whoWeAre}</p>
              <a href="http" className="text-sky-400 underline">
                Click here to find out more about us!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-20 flex gap-2">
        <button
          onClick={() => handlePanelClick("who")}
          className={`flex-1 text-center px-3 py-2 rounded-lg transition ${
            activePanels.who
              ? "bg-brand-800/80 backdrop-blur-lg text-white"
              : "bg-neutral-800/30 hover:bg-neutral-950/30 text-white"
          }`}
        >
          Who are we?
        </button>
        <button
          onClick={() => handlePanelClick("contact")}
          className="flex-1 text-center px-3 py-2 rounded-lg transition bg-neutral-800/30 hover:bg-neutral-950/30 text-white"
        >
          Contact us
        </button>
        <button
          onClick={() => handlePanelClick("video")}
          className={`px-3 text-left py-2 rounded-lg transition flex items-center justify-center ${
            activePanels.video
              ? "bg-brand-800/80 backdrop-blur-lg text-white"
              : "bg-neutral-800/30 hover:bg-neutral-950/30 text-white"
          }`}
        >
          <Icon icon="solar:play-bold" className="m-auto" />
        </button>
      </div> */}
    </div>
  );
};

export default SponsorBooth;
