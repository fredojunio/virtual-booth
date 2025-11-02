import { Icon } from "@iconify/react";

const IconPanel = ({ icons, onIconClick, activeIcon }) => {
  const isPanelOpen = activeIcon !== null;
  const activeIconData = icons.find((icon) => icon.id === activeIcon);

  return (
    <div className="absolute right-4 top-20 z-20 items-end hidden md:flex md:flex-col gap-3">
      <div className="flex text-2xl max-w-min gap-x-2 text-left px-4 py-3 transition bg-neutral-800/30 backdrop-blur-lg rounded-2xl">
        {icons.map((icon) => (
          <button
            key={icon.id}
            onClick={() => onIconClick(icon.id)}
            className={`p-2 rounded-xl ${
              activeIcon === icon.id
                ? "bg-brand-800/80 backdrop-blur-lg text-white"
                : "bg-neutral-700/30 backdrop-blur-xl hover:bg-neutral-800/40 text-white"
            }`}
          >
            <Icon icon={icon.icon} />
          </button>
        ))}
      </div>
      <div
        className={`
                  grid w-full overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    isPanelOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
      >
        <div className="overflow-hidden">
          <div className="overflow-hidden transition-all duration-300 ease-in-out bg-neutral-800/30 text-white bg-opacity-90 backdrop-blur-xl rounded-2xl p-6 max-w-lg w-full shadow-xl">
            <img
              src={activeIconData?.imageUrl}
              alt="Smart Toilet Diagram"
              className="w-full h-auto rounded-lg mb-3"
            />
            <h3 className="font-bold text-lg mb-2">{activeIconData?.title}</h3>
            <p className="text-sm mb-3">{activeIconData?.description}</p>
            <a
              href={activeIconData?.link}
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
  );
};

export default IconPanel;
