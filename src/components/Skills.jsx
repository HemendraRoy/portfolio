import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "React.js",
  "Express.js",
  "MongoDB",
  "Java",
  "Spring Boot",
  "MySQL",
  "Vercel",
  "Postman",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "React Native",
  "Docker",
  "DSA",
];

function Skills() {
  return (
    <section
      id="skills"
      className="section max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold glow-text mb-12 text-center"
      >
        Tech Stack
      </motion.h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-5 text-center hover-card neon-border"
          >
            <h3 className="font-medium">
              {skill}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;