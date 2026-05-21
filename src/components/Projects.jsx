import { motion } from "framer-motion";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="section max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold glow-text mb-20 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >

            {/* Image */}
            <div className="overflow-hidden rounded-3xl neon-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full hover:scale-105 transition duration-700"
              />
            </div>

            {/* Content */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-3xl font-bold glow-text mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-violet-300">
                {project.stats}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-7 px-6 py-3 rounded-xl neon-border hover:bg-violet-600/10 transition"
              >
                View Project
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;