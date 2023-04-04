import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { HeroModelCanvas } from './canvas';

// Our style properties will be from Tailwind CSS - everything can be found at https://tailwindcss.com/docs/

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* Background Image plus our flex box and regular styling */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eef]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          {/* Our text for main page */}
          <h1 className={`${styles.heroHeadText} text-white`}>Hi! I'm <span className='text-[#915eff]'>Deni</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}> I build fullstack applications, machine <br/>learning models, and video games </p>
        </div>
      </div>

      <HeroModelCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* We will link our framer motion animation to the about page so we can go to that on the scroll button */}
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* This is how we use framer motion to create a scrolling gif for users to go to the next page */}
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}    
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />  
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;