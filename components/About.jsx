import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
const toolData = [{icon:'/images/git.png',link:'https://git-scm.com/downloads'},{icon: '/images/vscode.png',link:'https://code.visualstudio.com/download'},{icon: '/images/mongodb.png',link:'https://www.mongodb.com/try/download/community'}, {icon:'/images/figma.png',link:'https://www.figma.com/downloads/'}, {icon:'/images/firebase.png', link:'https://firebase.google.com'}]

function About({ isDarkMode }) {
  return (
    <motion.div id='about' className='w-full px-[21%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='text-center mb-2 text-lg '>Introduction</motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className='text-center text-5xl '>About me</motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex  w-full flex-col lg:flex-row items-center gap-20 my-20  '>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none shadow-2xl'>
          <Image className='w-full rounded-3xl' src={isDarkMode?assets.user_image: assets.user_image_white} alt='user' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className='flex-1 '>
          <p className='mb-10 max-w-2xl '>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the
            privilege of collabarating with prestigious organizations, contributing to their success and growth.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li key={index}
                whileHover={{ scale: 1.05 }}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-black
                  dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover/50'>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}

            className='my-6 text-gray-700 dark:text-white/80'>Tools I use</motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className='flex items-center gap-3 sm:gap-5'>
            {toolData.map(({icon,link}, index) => (
              <li
                
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border
                   border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 
                   hover:shadow-black ' key={index}>
                <a href={link} target='_blank'><Image src={icon} alt='tool' width={20}
                  height={20} className='w-5 sm:w-7' /></a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About