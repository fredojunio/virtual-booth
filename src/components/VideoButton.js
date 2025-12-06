import { Icon } from "@iconify/react";

const VideoButton = ({ isActive, onToggle }) => (
  <button
    onClick={onToggle}
    className={`w-20 md:w-32 text-left px-3 py-4 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
      isActive
        ? "bg-brand-800/80 backdrop-blur-lg text-white border border-brand-300 text-xl md:text-4xl"
        : "bg-gray-800/35 hover:bg-gray-500/40 border border-white/30 rounded-2xl text-white text-xl md:text-4xl"
    }`}
  >
    <Icon icon="solar:play-bold" className="m-auto" />
  </button>
);

export default VideoButton;
