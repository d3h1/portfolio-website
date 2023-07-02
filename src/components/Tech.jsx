import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const Tech = () => {
  const TechCard = ({ title, index, icon }) => {
    return (
      <Tilt className="xsm:w-[100px]">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
          className="bg-gradient-to-b from-violet-800/40 to-transparent rounded-[20px] shadow-md shadow-black"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className=" rounded-[20px] p-2 flex justify-evenly items-center flex-col"
          >
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain flex items-center justify-center"
            />
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <div className="w-full xsm:h-full md:h-screen flex">
      <div className="max-w-[1200px] m-auto xmd:grid md:grid-cols-2 gap-8">
        <div className="col-span-1 m-2 items-center">
          <motion.div variants={textVariant()}>
            <p className="uppercase text-xl tracking-widest text-violet-600">
              technologies in
            </p>
            <h1 className="py-4">My Toolbox</h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="xsm:hidden md:flex text-base tracking-widest py-5"
          >
            I use a vast tool box of technologies and 
          </motion.p>
        </div>
        {/* We are using technologies.map to output different technologies I know */}
        <div className="col-span-1 mt-5 mb-10 mx-1 flex flex-wrap gap-10 justify-center items-center  xmd:w-[450px]">
          {technologies.map((technology, index) => (
              <TechCard key={technology.title} index={index} {...technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech);
