import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn} from "../utils/motion";

const Tech = () => {
  const TechCard = ({ title, index, icon }) => {
    return (
      <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="bg-gradient-to-t from-violet-600/40 to-transparent p-[1px] rounded-[20px] shadow-md shadow-black"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-[20px] px-1 h-[150px] w-[150px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          </div>
        </motion.div>

    )
  }

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* We are using technologies.map to output different technologies I know */}
      {technologies.map((technology, index) => (
        <div className="w-28 h-28">
          <TechCard key={technology.title} index={index} {...technology} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
