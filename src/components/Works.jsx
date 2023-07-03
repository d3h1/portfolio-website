import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useState } from "react";

// This will be the function to create our project cards
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTitleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-4 rounded-lg xsm:w-full sm:w-[300px] w-full">
        {/* Images of our projects that can be changed */}
        <div className=" w-full h-[230px]">
          <img
            src={image}
            onClick={() => window.open(source_code_link, "_blank")}
            alt={name}
            className="w-full h-full object-cover rounded-2xl cursor-pointer"
          />
          <div className=" top-0 flex justify-end ">
            <div
              className="w-30 h-10 bg-gradient-to-tr md:hover:translate-y-1 active:scale-95 cursor-pointer from-black to-violet-600/50  text-small font-small rounded-lg p-5 flex justify-center items-center"
              onClick={handleTitleClick}
            >
              <p className="text-small">{name}</p>
            </div>
          </div>
        </div>
        {/* How we are setting up project categories */}
      </div>

      {/* This is the modal that will show the description */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-4 rounded xsm:w-[350px] xmd:w-[450px] md:w-[700px]">
            <h2 className="mb-1">{name}</h2>
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={`${name}-${tag.name}`} className={`text-[16px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            <p>{description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

// This dynamically loads our projects and the previous description I have written for the section
const Works = () => {
  return (
    <div className="w-full xsm:h-full md:h-screen flex mt-10 xsm:mb-16 smd:mb-80 md:mb-54 xxmd:mb-28 xmd:mb-0">
      <div className="max-w-[1200px] m-auto">
        <div className="flex flex-col mx-8">
          <motion.div variants={textVariant()}>
            <p className="uppercase text-xl tracking-widest text-violet-600 ">
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
