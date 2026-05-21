import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold glow-text tracking-wide"
        >
          Hemendra Roy
        </a>

        {/* Links */}
        <div className="flex items-center gap-6">

          <a
            href="#about"
            className="text-sm text-gray-300 hover:text-violet-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-gray-300 hover:text-violet-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-300 hover:text-violet-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-300 hover:text-violet-400 transition"
          >
            Contact
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/HemendraRoy"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-violet-400 transition hover:scale-110"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hemendra-roy-b22624287/"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-violet-400 transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;