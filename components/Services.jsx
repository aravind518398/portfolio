import React from 'react'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id='services' className='w-full px-[21%] py-10 scroll-mt-20'>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='text-center mb-2 text-lg '>What I offer</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className='text-center text-5xl '>My Services</motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        I am a frontend developer from Kerala, India with 10 year of experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className='grid grid-cols-auto gap-6 my-10 '>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index} className=
            "border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white">
            <Image src={icon} alt={title} className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} className='w-4' alt='right-arrow' /></a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services