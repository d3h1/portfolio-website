import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xsm:w-[150px] xmd:w-[200px] m-2">
      {/* Style our cards, make the cards, and then output the cards */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="bg-gradient-to-b from-violet-800/40 to-transparent p-[1px] rounded-[20px] shadow-md shadow-black"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] px-1 h-[150px] max-w-[300px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          <h3 className="text-white w-[100px] uppercase tracking-widest text-sm font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="w-full xsm:h-full md:h-screen flex flex-col bg-gradient-to-t from-zinc-900 to-black bg-cover">
      <div className="max-w-[1450px] m-auto xmd:grid md:grid-cols-2 gap-8">
        <div className="col-span-1 m-2 items-center">
          <motion.div variants={textVariant()}>
            <p className="uppercase text-xl tracking-widest text-violet-600">
              About
            </p>
            <h1 className="py-4">Who I Am</h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-base tracking-widest"
          >
            I am a software engineer that has production level experience with
            C++, C#, Python, React, and Javascript along with knowledge in
            topics such as NodeJS, MySQL, REST, TCP/IP Clients and more.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-base tracking-widest py-5"
          >
            I collaborate closely with other programmers and am able to learn
            quickly when faced with challenges. Developing efficient and
            scalable applications is something I do on a daily basis
            consistently providing results. With that in mind, learning the
            newest technologies is necessary, so building projects and engaging
            with other engineers is always in the works!
          </motion.p>
        </div>

        {/* Certain parts of the cards will be dynamically added */}
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default SectionWrapper(About, "about");
