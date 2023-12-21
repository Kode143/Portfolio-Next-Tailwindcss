import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import Layout from '../components/Layout'
import Head from 'next/head'
import Experience from '../components/Experience'
import AnimatedText from '../components/AnimatedText'
import TransitionEffect from '../components/TransitionEffect'
import HireMe from '../components/HireMe'

const Skill = ({name, x, y}) => {

  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
 py-4 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
 xs:text-dark xs:dark:text-light xs:font-bold
 '  whileHover={{scale:1.08}} 
 initial={{x:0,y:0}}
 whileInView={{ x:x, y:y, transition:{duration: 1.5}}}

 viewport={{once:true}}
 
 >
  {name}
</motion.div>

  )
}

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
   <>
     <Head>
    <title>Bhuwan Shrestha | Skills</title>
    <meta name='description' content='any description' />
 </Head>
<TransitionEffect />

    <main className='flex w-full flex-col items-center justify-center md:text-6xl  md:mt-4 xs:mt-3'>
        <Layout  className='pt-1'>
        <AnimatedText text='Skills' className='mb-16 xs:mb-4 xs:text-5xl' />
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
    dark:bg-circularDark lg:h-[80vh] md:py-16
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    '>

    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
 p-8 shadow-dark cursor-pointer  dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 sm:text-sm md:text-xl'  whileHover={{scale:1.05}}>
    web
</motion.div>
<Skill name='HTML' x={isMobile ? '0vw' : '0vw'} y={isMobile ? '45vw' : '24vw'} />
<Skill name='CSS' x={isMobile ? '0vw' : '0vw'} y={isMobile ? '-16vw' : '-7vw'} />
<Skill name='Javascript'  x={isMobile ? '-25vw' : '-15vw'} y={isMobile ? '-20vw' : '-10vw'} />
<Skill name='ReactJS'  x={isMobile ? '0vw' : '0vw'} y={isMobile ? '-27vw' : '-15vw'} />
<Skill name='NextJS' x={isMobile ? '0vw' : '0vw'} y={isMobile ? '18vw' : '8vw'} />
<Skill name='GatsbyJS'  x={isMobile ? '31vw' : '31vw'} y={isMobile ? '0vw' : '0vw'}/>
<Skill name='Figma' x={isMobile ? '-25vw' : '-17vw'} y={isMobile ? '18vw' : '10vw'} />
<Skill name='firebase' x={isMobile ? '28vw' : '16vw'} y={isMobile ? '-20vw' : '-10vw'} />
<Skill name='Tilwind CSS'  x={isMobile ? '0vw' : '0vw'} y={isMobile ? '30vw' : '15vw'} />
<Skill name='Web Design'  x={isMobile ? '0vw' : '0'} y={isMobile ? '-40vw' : '-23vw'} />
<Skill name='Github'  x={isMobile ? '-33vw' : '-33vw'} y={isMobile ? '0vw' : '0vw'} />
<Skill name='UI/UX' x={isMobile ? '25vw' : '20vw'} y={isMobile ? '18vw' : '10vw'} />

    </div>
    <Experience />
    </Layout>
    <div className='hidden sm:block md:block lg:block xl:hidden 2xl:hidden md:right-0 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 lg:right-0 lg:left-0 lg:top-0 lg:bottom-auto lg:absolute'>
    <HireMe />
</div>
   </main>
   </>
  )
}

export default Skills