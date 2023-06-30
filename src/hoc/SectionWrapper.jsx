import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* This allows us to move to each page */}
        <span className="hash-span" id={idName}></span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
