import React, { useState, useEffect } from "react";
import { SPONSORS } from "../data/sponsors";
import { useParams } from "react-router-dom";
import { TIER_FEATURES } from "../data/sponsors";
import LogoPanel from "../components/LogoPanel";
import ContactPanel from "../components/ContactPanel";
import VideoButton from "../components/VideoButton";
import IconPanel from "../components/IconPanel";
import MobileIconPanel from "../components/MobileIconPanel";
import AdditionalPanel from "../components/AdditionalPanel";
import MobileAdditionalPanel from "../components/MobileAdditionalPanel";

const SponsorBooth = ({ onBack }) => {
  const [containerSize, setContainerSize] = React.useState({
    width: 0,
    height: 0,
  });
  const [activePanels, setActivePanels] = useState({
    who: false,
    video: false,
    // smartToilet: false,
  }); // 'who', 'contact', 'video', 'smartToilet'
  const { id } = useParams();
  const sponsor = SPONSORS.find((s) => s.id === id);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showWhoModal, setShowWhoModal] = useState(false);
  const [activeToiletIcon, setActiveToiletIcon] = useState(null); // 'icon1' or 'icon2'
  const [activeAdditional, setActiveAdditional] = useState(null); // 'icon1' or 'icon2'
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile hamburger
  const [isLoaded, setIsLoaded] = useState(false);
  const allowed = TIER_FEATURES[sponsor.tier];
  const [scrollContainer, setScrollContainer] = React.useState(null);

  const handleIconClick = (iconId) => {
    setActiveToiletIcon((prev) => (prev === iconId ? null : iconId));
  };
  const handleAdditionalClick = (iconId) => {
    setActiveAdditional((prev) => (prev === iconId ? null : iconId));
  };

  const handlePanelClick = (panelId) => {
    if (panelId === "video") {
      setShowVideoModal(true);
    } else {
      if (panelId === "who") {
        setShowWhoModal(!showWhoModal);
      }
      setActivePanels((prev) => ({
        ...prev,
        [panelId]: !prev[panelId],
      }));
    }
  };

  useEffect(() => {
    const scrollEl = document.querySelector(".scroll-wrapper");
    if (scrollEl) {
      setScrollContainer(scrollEl);
      // Center the scroll horizontally
      const scrollLeft = (scrollEl.scrollWidth - scrollEl.clientWidth) / 2;
      scrollEl.scrollLeft = scrollLeft;
    }
  }, [containerSize.width]);

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
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Scroll Wrapper - allows horizontal scrolling */}
      <div
        className="scroll-wrapper h-full w-full overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Inner container that's wider than viewport */}
        <div className="relative min-w-max h-full">
          {/* Full-Screen Booth Photo Background */}
          <img
            src={sponsor.imageUrl}
            alt="background"
            className="h-screen w-full object-cover pointer-events-none select-none landing-container"
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

          {showWhoModal && (
            <div className="flex fixed inset-0 bg-black bg-opacity-75 md:hidden items-center justify-center z-50 p-4">
              <div className="bg-neutral-800/30 backdrop-blur-lg rounded-2xl p-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-end items-center mb-4">
                  {/* <h2 className="text-xl font-bold">Company Video</h2> */}
                  <button
                    onClick={() => handlePanelClick("who")}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <div
                  className={`overflow-auto transition-all text-white w-full`}
                >
                  {/* <h2 className="text-lg font-medium mb-3">Who are we?</h2> */}
                  {/* <p className="mb-4">{sponsor.description}</p> */}
                  {sponsor.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index !== sponsor.description.length - 1
                          ? "mb-4"
                          : "mb-4"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                  <a href="http" className="text-sky-400 underline">
                    Click here to find out more about us!
                  </a>
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

          <div className="fixed top-2 z-10 flex md:justify-between items-center gap-3 w-full p-4">
            <button
              onClick={onBack}
              className="px-4 py-2 backdrop-blur-md bg-gray-800/35 hover:bg-gray-500/40 border border-white/30 rounded-2xl text-white transition"
            >
              ←
            </button>

            {/* Desktop: Show Title */}
            <h1 className="text-2xl font-bold text-white block">
              {sponsor.name}
            </h1>
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
            {allowed.includes("icon") && (
              <MobileIconPanel
                icons={sponsor.points}
                onIconClick={handleIconClick}
                activeIcon={activeToiletIcon}
              />
            )}
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
              className={`mb-3 w-32 md:w-48 text-left px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                activePanels.who
                  ? "bg-brand-800/80 backdrop-blur-lg text-white border border-brand-300"
                  : "bg-gray-800/35 hover:bg-gray-500/40 border border-white/30 rounded-2xl text-white transition-all duration-300 hover:scale-105"
              }`}
            >
              Who are we?
            </button>
            <div
              className={`hidden md:grid w-full overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    activePanels.who
                      ? "grid-rows-[1fr] opacity-100 mb-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`overflow-auto h-64 transition-all duration-300 ease-in-out bg-gray-800/50 border border-white/30 rounded-2xl text-white p-6 max-w-sm md:max-w-lg w-full shadow-xl`}
                >
                  {/* <h2 className="text-lg font-medium mb-3">Who are we?</h2> */}
                  {/* <p className="mb-4">{sponsor.description}</p> */}
                  {sponsor.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index !== sponsor.description.length - 1
                          ? "mb-4"
                          : "mb-4"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                  <a href="http" className="text-sky-400 underline">
                    Click here to find out more about us!
                  </a>
                </div>
              </div>
            </div>

            {/* Contact button */}
            {allowed.includes("contact") && <ContactPanel link="http" />}

            {allowed.includes("additional") && (
              <MobileAdditionalPanel
                additionals={sponsor.additionals}
                onToggle={handleAdditionalClick}
                activePanel={activeAdditional}
              />
            )}

            {/* Video button */}
            {allowed.includes("video") && (
              <VideoButton
                isActive={activePanels.video}
                onToggle={() => handlePanelClick("video")}
              />
            )}
          </div>

          {/* Right Info Panel (Desktop Only) */}
          {allowed.includes("icon") && (
            <IconPanel
              icons={sponsor.points}
              onIconClick={handleIconClick}
              activeIcon={activeToiletIcon}
              content={
                allowed.includes("additional") && (
                  <AdditionalPanel
                    additionals={sponsor.additionals}
                    onToggle={handleAdditionalClick}
                    activePanel={activeAdditional}
                  />
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsorBooth;
