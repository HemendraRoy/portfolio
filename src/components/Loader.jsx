import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050816]"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-4xl md:text-6xl font-black glow-text"
      >
        HEMENDRA
      </motion.h1>
    </motion.div>
  );
}

export default Loader;