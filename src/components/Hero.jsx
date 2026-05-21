import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section">

      <div className="max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[5px] text-violet-400 mb-4"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="text-5xl md:text-7xl font-black glow-text leading-tight"
        >
          HEMENDRA
          <br />
          ROY
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-violet-300"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "Startup Builder",
              1500,
              "React + Backend Engineer",
              1500,
              "Mobile App Developer",
              1500,
            ]}
            speed={45}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .6 }}
          className="mt-10 flex gap-5 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="magnetic px-7 py-3 rounded-xl neon-border bg-violet-600/10 hover:bg-violet-600/20 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="magnetic px-7 py-3 rounded-xl neon-border bg-violet-600/10 hover:bg-violet-600/20 transition"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;