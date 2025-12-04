const ContactPanel = ({ link }) => (
  <a
    href={link}
    className="mb-3 w-32 md:w-48 text-left px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105
              bg-neutral-800/30 hover:bg-neutral-950/40 backdrop-blur-xl text-white"
  >
    Contact Us!
  </a>
);

export default ContactPanel;
