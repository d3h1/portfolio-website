import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

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
      <ComputersCanvas/>
    </section>
  )
}

export default Hero