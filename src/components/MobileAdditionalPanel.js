const MobileAdditionalPanel = ({ additionals, onToggle, activePanel }) => {
  return (
    <div>
      {additionals.map((additional) => (
        <div className="flex-col z-20 flex md:hidden">
          {/* Action Buttons */}
          <button
            onClick={() => onToggle(additional.id)}
            className={`mb-3 w-32 md:w-48 text-left px-4 py-3 rounded-2xl transition ${
              activePanel === additional.id
                ? "bg-brand-800/80 backdrop-blur-lg text-white border border-brand-300"
                : "bg-neutral-800/30 hover:bg-neutral-950/40 backdrop-blur-xl text-white"
            }`}
          >
            {additional.title}
          </button>
          <div
            className={`
                          grid w-full overflow-hidden transition-all duration-300 ease-in-out
                          ${
                            activePanel === additional.id
                              ? "grid-rows-[1fr] opacity-100 mb-3"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
          >
            <div className="overflow-hidden">
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-neutral-800/30 backdrop-blur-lg text-white bg-opacity-90 p-6 rounded-2xl max-w-sm md:max-w-lg w-full shadow-xl`}
              >
                <h2 className="text-lg font-medium mb-3">{additional.title}</h2>
                <p className="mb-4">{additional.description}</p>
                <a href="http" className="text-sky-400 underline">
                  Click here to find out more about us!
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileAdditionalPanel;
