const ContactPanel = ({ link }) => (
  <a
    href={link}
    className="mb-3 w-32 md:w-48 text-left px-4 py-3 transition-all duration-300 hover:scale-105
              bg-gray-800/35 hover:bg-gray-500/40 border border-white/30 rounded-2xl text-white"
  >
    Contact Us!
  </a>
);

export default ContactPanel;
