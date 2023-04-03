import React from 'react';
import { Tilt  } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn('','',0.1, 1)}>
        I am a software engineer that has production level experience 
        with  C++, C#, Python, React, and Javascript along with knowledge in topics such as NodeJS, MySQL, REST, TCP/IP Clients and more.
      </motion.p>
    </>
  )
}

export default About