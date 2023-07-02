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
              technologies
            </p>
            <h1 className="py-4">What I Use</h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="xsm:hidden md:flex text-base tracking-widest py-5"
          >
            I collaborate closely with other programmers and am able to learn
            quickly when faced with challenges. Developing efficient and
            scalable applications is something I do on a daily basis
            consistently providing results. With that in mind, learning the
            newest technologies is necessary, so building projects and engaging
            with other engineers is always in the works!
          </motion.p>
        </div>
      </div>
      {/* We are using technologies.map to output different technologies I know */}
      <div className="col-span-1 mt-20 flex flex-wrap gap-10 justify-center md:w-[400px] xmd:[300px]">
        {technologies.map((technology, index) => (
          <div className="w-20 h-16" key={technology.title}>
            <TechCard key={technology.title} index={index} {...technology} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech);
