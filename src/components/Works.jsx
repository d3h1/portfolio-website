import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// This will be the function to create our project cards
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="">
          {/* <h3 className="text-white">hello</h3> */}
          {/* <p className=" text-violet-600">{description}</p> */}
        </div>
      <div className="bg-tertiary p-4 rounded-lg xsm:w-[295px] sm:w-[300px] w-full">
        {/* Images of our projects that can be changed */}
        <div className=" w-full h-[230px]">
          <img
            src={image}
            onClick={() => window.open(source_code_link, "_blank")}
            alt={name}
            className="w-full h-full object-cover rounded-2xl cursor-pointer"
          />
          <div className=" top-0 flex justify-end ">
            {/* Each project will link to the github repo, can be multiplied to make more links */}
            <div
              
              className="w-30 h-10 bg-gradient-to-tr from-black to-violet-600/50  text-small font-small rounded-lg p-5 flex justify-center items-center"
            >
              {/* Github icon will appear on each project */}
              
              <p className="text-small">{name}</p>
            </div>
          </div>
        </div>
        {/* How we are setting up our project descriptions */}
        
        {/* How we are setting up project categories */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px]`}
            >
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// This dynamically loads our projects and the previous description I have written for the section
const Works = () => {
  return (
    <div className="w-full xsm:h-full md:h-screen flex mt-10">
      <div className="max-w-[1200px] m-auto xmd:grid xmd:grid-cols-2 gap-8">
        <div className="col-span-1 items-center mx-8">
          <motion.div variants={textVariant()}>
            <p className="uppercase text-xl tracking-widest text-violet-600">
              projects in
            </p>
            <h1 className="py-4">My Repo</h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="xsm:hidden md:flex text-base tracking-widest py-5"
          >
            The shown projects are just some of the many I have worked on my own
            time and certain aspects of applications I created at work. Each
            project will have their own description and the repo to each on
            github. This showcases my ability to understand new topics while
            being able to work on complex production level applications.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
