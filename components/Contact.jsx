import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { motion } from 'motion/react'
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b1902eb0-5682-4dd0-9cd2-2cbfcaf72ad7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
    id='contact' className='w-full px-[21%] py-10 scroll-mt-20 bg-footer-img bg-no-repeat 
    bg-center bg-[length:90%_auto]  dark:bg-none '>
      <motion.h4
      initial={{ opacity: 0, y:-20 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 1, delay: 0.2 }}
      className='text-center mb-2 text-lg '>Connect with me</motion.h4>
      <motion.h2
      initial={{ opacity: 0, y:-20 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 1, delay: 0.4 }}
      className='text-center text-5xl '>Get in touch</motion.h2>
      <motion.p
      initial={{ opacity: 0, y:-20 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 1, delay: 0.6 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        I'd love to hear from you! If you have any questions, commets, or feedback, please use the form below.
      </motion.p>
      <motion.form 
      initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1, delay: 0.8 }}
      className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

          <motion.input 
          initial={{x:-50, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{delay:1, duration:1}}
          className='flex-1 p-3 outline-none border-[0.5px]
       border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' type="text" placeholder='Enter your name' required name='name' />
          <motion.input
          initial={{x:50, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{delay:1, duration:1}} className='flex-1 p-3 outline-none border-[0.5px]
       border-gray-400 rounded-md bg-white  dark:bg-dark-hover/30 dark:border-white/90' type="email" placeholder='Enter your email' required name='email' />

        </div>
        <motion.textarea
        initial={{y:100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{delay:1, duration:1}}
        className='w-full p-4 outline-none border-[0.5px] 
       border-gray-400 rounded-md bg-white mb-6  dark:bg-dark-hover/30 dark:border-white/90' rows='6' placeholder='Enter your message' required name='message'></motion.textarea>
        <motion.button
        
        initial={{y:45, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.8, delay:1}}
        type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
           text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover'
        >Submit now <Image src={assets.right_arrow_white} alt="right arrow" className="w-4" /> </motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact