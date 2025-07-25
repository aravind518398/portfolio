import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

function Header({isDarkMode}) {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
       >
        <Image src={isDarkMode?assets.profile_img: assets.profile_image_white} alt='profile-pic' className='rounded-full w-32 shadow-box-image  ' />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 '>Hi! I'm Aravind R Krishnan</motion.h3>
      <Image src={assets.hand_icon} alt='hand-icon' className='w-6' />
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className='text-3xl sm:text-6xl lg:text-[66px] '>Frontend web developer based in India.</motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className='max-w-2xl mx-auto '>
        I am a frontend developer from Kerala, India with 10 year of experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          href='#contact'
          className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent'>contact me
          <Image src={assets.right_arrow_white} alt='right-arrow' className=' w-4 ' /> </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          href='/sample-resume.pdf' download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume
          <Image src={assets.download_icon} alt='download-icon' className=' w-4 ' /> </motion.a>
      </div>
    </div>
  )
}

export default Header