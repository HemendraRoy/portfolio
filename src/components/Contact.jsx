import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="section max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-10 text-center neon-border"
      >
        <h2 className="text-4xl font-bold glow-text mb-5">
          Let's Build Something
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto leading-8">
          Interested in working together, discussing ideas or
          building products? My inbox is always open.
        </p>

        <a
          href="mailto:hemendraroy04@gmail.com"
          className="inline-flex items-center gap-3 mt-8 px-7 py-4 rounded-xl neon-border hover:bg-violet-500/10 transition"
        >
          <FaEnvelope />
          hemendraroy04@gmail.com
        </a>

        <div className="flex justify-center gap-5 mt-8">

          <a
            href="https://github.com/HemendraRoy"
            target="_blank"
            rel="noreferrer"
            className="glass p-4 rounded-xl hover:text-violet-400 transition text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/hemendra-roy-b22624287/"
            target="_blank"
            rel="noreferrer"
            className="glass p-4 rounded-xl hover:text-violet-400 transition text-xl"
          >
            <FaLinkedin />
          </a>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;