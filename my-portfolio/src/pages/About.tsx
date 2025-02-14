

import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className='flex flex-col items-center mt-4'>
        <h1 className='text-3xl font-bold text-center text-white'>Hi There <span className='blog-title-emoji'>👋</span></h1>
        <motion.h1 className='text-3xl font-bold text-center text-white mt-2'
        initial={{opacity: 0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}>I am Anand Pandey</motion.h1>
        <h2 className='text-white max-w-lg text-center p-5 md:max-w-2xl md:text-left font-semibold whitespace-normal'>
  I am a second-year CSE student. I am a web developer. I have experience with a variety of tech stacks, including React, Node.js, Express, Typescript, Next.js, Prisma, Tailwind, and many more. I am always learning to better my coding skills. 
  I am currently learning Rust and Go. I am also a web3 enthusiast.
</h2>

    </div>
  )
}

export default About