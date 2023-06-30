import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

// This will be the function to create our project cards
const ProjectCard = ({index, name, description, tags, 
  image, source_code_link}) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt 
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full' 
        >
          {/* Images of our projects that can be changed */}
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              {/* Each project will link to the github repo, can be multiplied to make more links */}
              <div
                onClick={() => window.open(
                  source_code_link, "_blank"
                )}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                {/* Github icon will appear on each project */}
                <img src={github} alt={github} className='w-1/2 h-1/2 object-contain'/>

              </div>
            </div>
          </div>
          {/* How we are setting up our project descriptions */}
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
          {/* How we are setting up project categories */}
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`} >
                #{tag.name}
              </p>
            ))}
          </div>

        </Tilt>
      </motion.div>
    )
}

// This dynamically loads our projects and the previous description I have written for the section
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The shown projects are just some of the many I have worked on my own
          time and certain aspects of applications I created at work. Each
          project will have their own description and the repo to each on
          github. This showcases my ability to understand new topics while being
          able to work on complex production level applications.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project=${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
