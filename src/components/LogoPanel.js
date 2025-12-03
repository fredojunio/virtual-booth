const LogoPanel = ({ logo }) => (
  <div>
    <div className="hidden md:block max-w-max mb-3 bg-neutral-800/30 backdrop-blur-xl bg-opacity-80 rounded-2xl p-6 shadow-lg">
      <img src={logo} alt="Company Logo" className="h-24 m-auto rounded-lg" />
    </div>
    <div className="md:hidden top-20 w-[35vw] right-4 fixed mb-3 bg-neutral-800/30 backdrop-blur-xl bg-opacity-80 rounded-2xl p-3 shadow-lg">
      <img src={logo} alt="Company Logo" className="h-24 m-auto rounded-lg" />
    </div>
  </div>
);

export default LogoPanel;
