import React from "react";
import toiletBg from "../assets/background.png";
import { SPONSORS } from "../data/sponsors";
import { Icon } from "@iconify/react";

const LandingPage = ({ onSponsorClick }) => {
  const [containerSize, setContainerSize] = React.useState({
    width: 0,
    height: 0,
  });
  const imageRef = React.useRef(null);
  const [scrollContainer, setScrollContainer] = React.useState(null);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const IMAGE_WIDTH = 1920;
  const IMAGE_HEIGHT = 1080;

  // Update size using the image ref (called on load and by ResizeObserver)
  const updateSize = React.useCallback(() => {
    const el = imageRef.current;
    if (el) {
      setContainerSize({
        width: el.clientWidth,
        height: el.clientHeight,
      });
    }
  }, []);

  // Center scroll once we have a valid container size
  React.useEffect(() => {
    if (containerSize.width > 0 && containerSize.height > 0) {
      const scrollEl = document.querySelector(".scroll-wrapper");
      if (scrollEl) {
        setScrollContainer(scrollEl);
        // wait for layout, then center
        requestAnimationFrame(() => {
          const scrollLeft = (scrollEl.scrollWidth - scrollEl.clientWidth) / 2;
          scrollEl.scrollLeft = scrollLeft;
        });
      }
    }
  }, [containerSize]);

  // Observe image size changes so hotspots update reliably
  React.useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    // call once in case image already loaded
    updateSize();

    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(() => updateSize());
      ro.observe(img);
    } else {
      // fallback
      window.addEventListener("resize", updateSize);
    }

    return () => {
      if (ro && img) ro.unobserve(img);
      if (!window.ResizeObserver)
        window.removeEventListener("resize", updateSize);
    };
  }, [updateSize]);

  // Calculate scaled position for a hotspot
  const getHotspotPosition = (originalX, originalY) => {
    const { width: containerWidth, height: containerHeight } = containerSize;

    if (!containerWidth || !containerHeight) {
      return { x: NaN, y: NaN };
    }

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
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Scroll Wrapper - allows horizontal scrolling */}
      <div
        className="scroll-wrapper h-full w-full overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Inner container that's wider than viewport */}
        <div className="relative min-w-max h-full">
          <img
            ref={imageRef}
            src={toiletBg}
            alt="background"
            onLoad={updateSize}
            className="h-full object-cover pointer-events-none select-none landing-container"
          />

          {/* Left Sidebar Buttons (Desktop Only) */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`fixed left-4 top-10 mb-3 text-left px-4 py-3 rounded-2xl transition ${
              isExpanded
                ? "bg-brand-800/80 backdrop-blur-lg text-white border border-brand-300"
                : "bg-neutral-800/30 hover:bg-neutral-950/40 backdrop-blur-xl text-white"
            }`}
          >
            <Icon
              icon={isExpanded ? "mdi:hamburger-close" : "mdi:hamburger-open"}
              className="text-white text-2xl float-left"
            />
            <span className="hidden md:flex">Menu</span>
          </button>
          <h1 className="fixed top-10 left-1/2 transform -translate-x-1/2 text-white font-extrabold backdrop-blur-xl rounded-2xl p-5 text-center text-md md:text-4xl mb-3">
            World Toilet Day <br /> Loo Awards 2025
          </h1>
          <div
            className={`text-left fixed left-4 right-auto top-24 flex-col z-20 items-start flex bg-neutral-800/30 backdrop-blur-lg rounded-3xl ${
              isExpanded ? "p-5" : "p-0"
            }`}
          >
            <div
              className={`${
                isExpanded ? "block" : "hidden"
              } flex flex-col gap-3 mb-3`}
            >
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
          </div>

          {/* Sponsor Hotspots */}
          <div className="absolute inset-0 pointer-events-none">
            {SPONSORS.map((sponsor) => {
              const pos = getHotspotPosition(sponsor.x, sponsor.y);
              // don't filter out zero - only skip if not a number
              if (
                typeof pos.x !== "number" ||
                typeof pos.y !== "number" ||
                Number.isNaN(pos.x) ||
                Number.isNaN(pos.y)
              )
                return null;

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
                        className="h-16 w-auto rounded"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
