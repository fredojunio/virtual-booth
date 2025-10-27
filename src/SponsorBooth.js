import React, { useState, useEffect } from "react";
import boothBg from "./assets/3d-booth.png";
import logoSponsor from "./assets/logo.png";
import detailIcon from "./assets/detail-icon.png";
import { Icon } from "@iconify/react";

const SponsorBooth = ({ sponsor, onBack }) => {
  const [activePanel, setActivePanel] = useState(null); // 'who', 'contact', 'video', 'smartToilet'
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile hamburger
  const [isLoaded, setIsLoaded] = useState(false);

  // Mock content for demo — replace with real data per sponsor
  const sponsorContent = {
    name: "XYRESIC CAPITAL",
    logo: logoSponsor,
    whoWeAre: `
      At YY Group Holding, our commitment is to deliver innovative solutions across a broad spectrum of manpower needs. We are dedicated to providing high-quality services that meet our customers' requirements and surpass their expectations. We achieve this by staying at the forefront of industry trends and pushing the boundaries of what's possible.
    `,
    contactUs: `
      Reach out to us via email at info@xyresic.com or call +65 1234 5678. Our team is ready to assist you with any inquiries or partnership opportunities.
    `,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with real URL
    smartToiletInfo: {
      title: "What is Smart Toilet?",
      description: `
        In the context of maintenance, cleaning and upkeeping of toilet/restroom, Smart toilet or instig until univerisma and iner on (os) to constantly monitor the state of the toilet to optimize hygiene, safety, and resource usage.
      `,
      imageUrl: detailIcon,
      link: "https://www.infinergy.com.sg/smart_toilet.htm",
    },
  };

  const handlePanelClick = (panelId) => {
    if (panelId === "video") {
      setShowVideoModal(true);
    } else {
      setActivePanel(activePanel === panelId ? null : panelId);
    }
  };

  // Close panels when screen resizes to mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setActivePanel(null);
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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-Screen Booth Photo Background */}
      <img
        src={boothBg}
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
                src={sponsorContent.videoUrl}
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

      <div className="relative z-10 flex justify-between items-center p-4">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-neutral-800/30 text-white backdrop-blur-xl rounded-2xl hover:bg-blue-700 transition"
        >
          ←
        </button>

        {/* Desktop: Show Title */}
        <h1 className="text-2xl font-bold text-white hidden md:block">
          {sponsor.name || sponsorContent.name}
        </h1>
      </div>

      {/* Mobile: Hamburger Menu */}
      <div className="md:hidden flex gap-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-gray-200 bg-opacity-80 backdrop-blur-md rounded-full hover:bg-gray-300 transition"
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
        </button>
        <button className="p-2 bg-gray-200 bg-opacity-80 backdrop-blur-md rounded-full hover:bg-gray-300 transition">
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
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-6 3 3 0 010 6zm10.346 8.784-8-8 .346-.346a6 6 0 008 8l-.346.346z"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
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
      )}

      {/* Left Sidebar Buttons (Desktop Only) */}
      <div className="absolute left-4 top-20 flex flex-col z-20 hidden md:flex">
        {/* Logo Panel */}
        <div className="w-2/3 mb-3 bg-neutral-800/30 backdrop-blur-xl bg-opacity-80 rounded-2xl p-6 shadow-lg">
          <img
            src={sponsorContent.logo}
            alt="Company Logo"
            className="h-auto m-auto rounded-lg"
          />
        </div>

        {/* Action Buttons */}
        <button
          onClick={() => handlePanelClick("who")}
          className={`mb-3 w-48 text-left px-4 py-3 rounded-2xl transition ${
            activePanel === "who"
              ? "bg-blue-100 text-blue-800 border border-blue-300"
              : "bg-neutral-800/30 hover:bg-neutral-950/40 backdrop-blur-xl text-white"
          }`}
        >
          Who are we?
        </button>

        <div
          className={`
                  grid w-full overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    activePanel === "who"
                      ? "grid-rows-[1fr] opacity-100 mb-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
        >
          <div className="overflow-hidden">
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out bg-neutral-800/30 backdrop-blur-lg text-white bg-opacity-90 p-6 rounded-2xl max-w-lg w-full shadow-xl`}
            >
              <h2 className="text-lg font-medium mb-3">Who are we?</h2>
              <p className="mb-4">{sponsorContent.whoWeAre}</p>
              <a href="http" className="text-sky-400 underline">
                Click here to find out more about us!
              </a>
            </div>
          </div>
        </div>

        <a
          href="http"
          className={`mb-3 w-48 text-left px-4 py-3 rounded-2xl transition
              bg-neutral-800/30 hover:bg-neutral-950/40 backdrop-blur-xl text-white
          `}
        >
          Contact Us!
        </a>

        <button
          onClick={() => handlePanelClick("video")}
          className={`w-32 text-left px-3 py-4 rounded-lg transition flex items-center gap-2 ${
            activePanel === "video"
              ? "bg-blue-100 text-blue-800 border border-blue-300"
              : "bg-neutral-800/30 hover:bg-neutral-950/40 backdrop-blur-xl text-white text-4xl"
          }`}
        >
          <Icon icon="solar:play-bold" className="m-auto" />
        </button>
      </div>

      {/* Right Info Panel (Desktop Only) */}
      <div className="absolute right-4 top-20 z-20 items-end hidden md:flex md:flex-col gap-3">
        <div className="flex text-2xl max-w-min gap-x-2 text-left px-4 py-3 transition bg-neutral-800/30 backdrop-blur-lg rounded-2xl">
          <button
            onClick={() => handlePanelClick("smartToilet")}
            className={`p-2 rounded-xl ${
              activePanel === "smartToilet"
                ? "bg-blue-100 text-blue-800 border border-blue-300"
                : "bg-neutral-700/30 backdrop-blur-xl hover:bg-neutral-800/40 text-white"
            }`}
          >
            <Icon icon="mdi:toilet-paper-outline" />
          </button>
          <button
            onClick={() => handlePanelClick("smartToilet")}
            className={`p-2 rounded-xl ${
              activePanel === "smartToilet"
                ? "bg-blue-100 text-blue-800 border border-blue-300"
                : "bg-neutral-700/30 backdrop-blur-xl hover:bg-neutral-800/40 text-white"
            }`}
          >
            <Icon icon="hugeicons:toilet-01" />
          </button>
        </div>
        <div
          className={`
                  grid w-full overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    activePanel === "smartToilet"
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
        >
          <div className="overflow-hidden">
            <div className="overflow-hidden transition-all duration-300 ease-in-out bg-neutral-800/30 text-white bg-opacity-90 backdrop-blur-xl rounded-2xl p-6 max-w-lg w-full shadow-xl">
              <img
                src={sponsorContent.smartToiletInfo.imageUrl}
                alt="Smart Toilet Diagram"
                className="w-full h-auto rounded-lg mb-3"
              />
              <h3 className="font-bold text-lg mb-2">
                {sponsorContent.smartToiletInfo.title}
              </h3>
              <p className="text-sm mb-3">
                {sponsorContent.smartToiletInfo.description}
              </p>
              <a
                href={sponsorContent.smartToiletInfo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline text-sm"
              >
                For more info
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Bottom Panel for Buttons */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-20 flex gap-2">
        <button
          onClick={() => handlePanelClick("who")}
          className={`flex-1 text-left px-3 py-2 rounded-lg transition ${
            activePanel === "who"
              ? "bg-blue-100 text-blue-800 border border-blue-300"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Who?
        </button>
        <button
          onClick={() => handlePanelClick("contact")}
          className={`flex-1 text-left px-3 py-2 rounded-lg transition ${
            activePanel === "contact"
              ? "bg-blue-100 text-blue-800 border border-blue-300"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Contact
        </button>
        <button
          onClick={() => handlePanelClick("video")}
          className={`flex-1 text-left px-3 py-2 rounded-lg transition flex items-center justify-center ${
            activePanel === "video"
              ? "bg-blue-100 text-blue-800 border border-blue-300"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm2 2h12v8H6V5zm0 10v2h12v-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SponsorBooth;
