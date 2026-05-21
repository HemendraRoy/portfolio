import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="section max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-10 hover-card"
      >
        <h2 className="text-4xl font-bold glow-text mb-6">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          I'm Hemendra Roy, a Full Stack Developer passionate about
          building scalable digital products and startup ideas.
          From web applications to mobile apps, I enjoy turning
          concepts into fast, modern and production-ready experiences.
        </p>

        <p className="text-gray-400 leading-8 mt-5">
          I have worked on monetized products like Serenic,
          full-stack ecommerce systems and mobile solutions with
          AI integration. I enjoy combining design, backend logic
          and deployment into complete user experiences.
        </p>
      </motion.div>
    </section>
  );
}

export default About;