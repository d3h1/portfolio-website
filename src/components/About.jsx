import React from 'react';
import { Tilt  } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({title, index, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      {/* Style our cards, make the cards, and then output the cards */}
      <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
            max: 45,
            scale: 1,
            speed: 450
          }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    {/* Certain parts of the cards will be dynamically added */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn('','',0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a software engineer that has production level experience 
        with  C++, C#, Python, React, and Javascript along with knowledge in topics such as NodeJS, MySQL, REST, TCP/IP Clients and more. I collaborate closely with other programmers and am able to learn quickly when faced with challenges. When working on projects | work, I am able to create efficient, scalable, and clean <code>code</code> that creates results. 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');