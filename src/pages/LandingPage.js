import React from "react";
import toiletBg from "../assets/3d-toilet-background.jpeg";
import { SPONSORS } from "../data/sponsors";

const LandingPage = ({ onSponsorClick }) => {
  const [containerSize, setContainerSize] = React.useState({
    width: 0,
    height: 0,
  });
  const IMAGE_WIDTH = 1920;
  const IMAGE_HEIGHT = 1080;

  // Get container size on mount and resize
  React.useEffect(() => {
    const updateSize = () => {
      const el = document.querySelector(".landing-container");
      if (el) {
        setContainerSize({
          width: el.offsetWidth,
          height: el.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Calculate scaled position for a hotspot
  const getHotspotPosition = (originalX, originalY) => {
    const { width: containerWidth, height: containerHeight } = containerSize;

    // Calculate scale factor (maintain aspect ratio)
    const scaleX = containerWidth / IMAGE_WIDTH;
    const scaleY = containerHeight / IMAGE_HEIGHT;
    const scale = Math.max(scaleX, scaleY); // cover mode

    // Calculate offset due to cropping
    const scaledWidth = IMAGE_WIDTH * scale;
    const scaledHeight = IMAGE_HEIGHT * scale;
    const offsetX = (containerWidth - scaledWidth) / 2;
    const offsetY = (containerHeight - scaledHeight) / 2;

    // Convert original pixel coords to current screen coords
    const x = originalX * scale + offsetX;
    const y = originalY * scale + offsetY;

    return { x, y };
  };

  return (
    <div className="relative w-[200vw] md:w-full h-screen overflow-y-hidden overflow-x-auto md:overflow-x-hidden bg-black">
      <img
        src={toiletBg}
        alt="background"
        className="absolute top-0 left-0 h-full w-full object-cover pointer-events-none select-none landing-container"
      />

      {/* Left Sidebar Buttons (Desktop Only) */}
      <div className="left-1/2 transform -translate-x-1/2 md:translate-x-0 text-center md:text-left fixed md:left-4 right-auto gap-3 top-10 flex-col z-20 md:items-start items-center flex bg-neutral-800/30 backdrop-blur-lg rounded-3xl p-5">
        <h1 className="text-white font-medium text-4xl">
          World Toilet Day <br /> Loo Awards 2025
        </h1>
        <a
          href="https://www.toilet.org.sg/loowards"
          className="w-72 text-left px-4 py-3 rounded-2xl transition
                    bg-neutral-700/30 backdrop-blur-xl hover:bg-neutral-800/40 text-white"
        >
          What is the Loo Awards?
        </a>
        <a
          href="https://www.toilet.org.sg/about"
          className="w-72 w-scr text-left px-4 py-3 rounded-2xl transition
                    bg-neutral-700/30 backdrop-blur-xl hover:bg-neutral-800/40 text-white"
        >
          More about Restroom Association
        </a>
        <a
          href="https://www.giving.sg/organisation/profile/d11d7604-261a-4581-980b-0b12b75550b0"
          className="w-72 text-left px-4 py-3 rounded-2xl transition
                    bg-neutral-700/30 backdrop-blur-xl hover:bg-neutral-800/40 text-white"
        >
          Donate towards the cause
        </a>
      </div>
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center landing-container"
        style={{
          backgroundImage: `url(${toiletBg})`,
        }}
      /> */}

      {/* Sponsor Hotspots */}
      <div className="absolute inset-0 pointer-events-none">
        {SPONSORS.map((sponsor) => {
          const pos = getHotspotPosition(sponsor.x, sponsor.y);
          if (!pos.x || !pos.y) return null;

          return (
            <div
              key={sponsor.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-auto cursor-pointer group"
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
              }}
              onClick={() => onSponsorClick(sponsor)}
              title={`Visit ${sponsor.name} Booth`}
            >
              {/* The Sponsor Button */}
              <div className="animate-pulse hover:animate-none w-full h-full bg-white/80 rounded-full flex items-center justify-center text-xl text-gray-800 border-4 border-neutral-800/30 hover:bg-brand-300 backdrop-blur-lg shadow-lg"></div>

              {/* Tooltip (shows on hover) */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-neutral-800/30 backdrop-blur-xl bg-opacity-90 p-2 rounded-2xl shadow-lg min-w-max">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-10 w-auto rounded"
                  />
                  {/* <p className="text-xs mt-1 text-gray-800">{sponsor.name}</p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center px-4 py-2 bg-black bg-opacity-50 rounded-full text-sm font-medium">
        Each star represents a virtual booth led by an individual sponsor.
      </div> */}
    </div>
  );
};

export default LandingPage;
