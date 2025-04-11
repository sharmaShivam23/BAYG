

import React from 'react'
import { motion } from 'framer-motion'

const Splash = () => {
  return (
    <div className='h-screen bg-[#202730] w-screen flex flex-col justify-center items-center text-white'>
      
  
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 2 , delay : 0.5 }}
      >
        <img src="/logoPhoto.png" className='h-[100px] w-[100px] object-cover' alt="Bayg Logo" />
      </motion.div>
      <motion.p
        className='mt-6 text-lg sm:text-xl text-center px-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className='font-bold  text-center text-2xl text-[#00FFD1]'>Bayg</span> – a startup for selling premium hardware components.
      </motion.p>
      
    </div>
  )
}

export default Splash;
