

import React from 'react'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className='flex flex-col items-center'>
        <motion.h1 className='text-3xl font-semibold text-center text-blue-500 p-5'
        initial={{opacity: 0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}>Hi,There. I am Anand Pandey</motion.h1>
        <p className='text-blue-500 max-w-lg text-center p-5 md:max-w-2xl md:text-left'>I am a second year CSE student. I am a web developer. I have experience with a variety of techstacks, including
            React,Node.js,Express,Typescript,Next.js and many more. I am also a machine learning enthusiast.
        </p>
    </div>
  )
}

export default About