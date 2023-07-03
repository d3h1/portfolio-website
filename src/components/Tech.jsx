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
    <div className="w-full xsm:h-full md:h-screen flex mt-10">
      <div className="max-w-[1200px] m-auto xmd:grid xmd:grid-cols-2 gap-8">
        <div className="col-span-1 items-center mx-8">
          <motion.div variants={textVariant()}>
            <p className="uppercase text-xl tracking-widest text-violet-600">
              technology in
            </p>
            <h1 className="py-4">My Toolbox</h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="xsm:hidden md:flex text-base tracking-widest py-5"
          >
            As a software engineer, my toolbox—comprising languages like Python,
            C#, C++, JavaScript, and TypeScript—drives my daily operations. I
            lean on frameworks such as ReactJS and NextJS to streamline my work.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="xsm:hidden md:flex text-base tracking-widest py-5"
          >
            Git and Kubernetes ensure my software's consistency across
            platforms, while AWS offers nearly limitless computational power.
            This tangible collection is augmented by my problem-solving skills,
            design understanding, and knowledge of algorithms—my invisible yet
            essential tools.
          </motion.p>
        </div>
        {/* We are using technologies.map to output different technologies I know */}
        <div className="col-span-1 flex flex-wrap gap-3 justify-center items-center xmd:w-[500px]">
          {technologies.map((technology, index) => (
            <TechCard key={`technology=${index}`} index={index} {...technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech);
