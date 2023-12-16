import Layout from '../components/Layout'
import React from 'react'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../components/Icons'
import project1 from '../../public/images/projects/portfolio.png'
import project2 from '../../public/images/projects/ecommerce.png'
import { motion } from 'framer-motion'
import TransitionEffect from '../components/TransitionEffect'
import HireMe from '../components/HireMe'

 const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {

   return (
     <article className='w-full flex items-center justify-between relative rounded-br-2xl
     rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     '>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
      dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

      <Link href={link} target='_blank'
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
         <FramerImage src={img} alt={title} className='w-full h-auto'
         whileHover= {{scale:1.05}}
         transition={{duration:0.2}}
         priority 
         sizes='(max-width:768px) 100vw,
         (max-width:1200px) 50vw, 50vw'
         />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
         <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
         <Link href={link} target='_blank' className='hover:underline underline-offset-1'>
            <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm'>{title}</h2>

         </Link>
         <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
         <div className='mt-2 flex items-center'>
            <Link href={github} target='_blank' className='w-10'>  <GithubIcon />   </Link>
            <Link href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg 
            font-semibold sm:px-4 sm:text-base'
            >  Visit Project  </Link>
         </div>
      </div>
     </article>
   )
}

const Project = ({title, type, img, link, github}) => {
return(
   <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ' />
            <Link href={link} target='_blank'
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
         <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover= {{scale:1.05}}
          transition={{duration:0.2}}
          priority 
          sizes='(max-width:768px) 100vw,
          (max-width:1200px) 50vw, 50vw'
         />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
         <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
         <Link href={link} target='_blank' className='hover:underline underline-offset-1'>
            <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>

         </Link>
  
         <div className='w-full mt-2 flex items-center justify-between md:text-base'>
         <Link href={link} target='_blank'
            className='text-lg font-semibold underline'
            >  Visit</Link>
            <Link href={github} target='_blank' className='w-8 md:w-6'> 
             <GithubIcon />   </Link>

         </div>
      </div>
   </article>
)

}

const projects = () => {
  return (
  <>
   <Head>
    <title>Bhuwan Shrestha | Projects</title>
    <meta name='description' content='any description' />

 </Head>
 <TransitionEffect />
 <main className='w-full h-full mb-16 flex flex-col items-center justify-center dark:text-light'>
    <Layout className='pt-4'>
        <AnimatedText text="Imagination Trumps Knowledge!"
        className='mb-8 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
        />


       <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
       <div className='col-span-12'>
         <FeaturedProject 
         title='Portfolio-Using Next.js and famer motion'
         img={ project1}
         summary='Built an engaging and dynamic portfolio website using Next.js, 
         a powerful React framework, coupled with the seamless animation capabilities of Framer Motion.
          The combination of Next.js and Framer Motion not only ensures a smooth and responsive user experience but also adds 
          a visually captivating touch to showcase my skills, projects, and professional journey.  '
         link='/'
         github='https://github.com/Kode143/Portfolio-Next-Tailwindcss'
         type='Featured Project'
         />

         




       </div>
       
       {/* <div className='col-span-6 sm:col-span-12'>
       <Project 
         title='Crypto Screener Application'
         img={ project1}
         summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
         It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
         local currency.  '
         link='/'
         github='/'
         type='Featured Project'
         />
       </div>

       <div className='col-span-6 sm:col-span-12'>
       <Project 
         title='Crypto Screener Application'
         img={ project1}
         summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
         It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
         local currency.  '
         link='/'
         github='/'
         type='Featured Project'
         />
       </div> */}
       <div className='col-span-12 sm:col-span-12'>
       <FeaturedProject 
         title='Crypto Screener Application'
         img={ project2}
         summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
         It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
         local currency.  '
         link='https://github.com/Kode143/ecommerce'
         github='https://github.com/Kode143/ecommerce'
         type='Featured Project'
         />
       </div>
       {/* <div className='col-span-6 sm:col-span-12'>
       <Project 
         title='Crypto Screener Application'
         img={ project1}
         summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
         It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
         local currency.  '
         link='/'
         github='/'
         type='Featured Project'
         />
       </div>

       <div className='col-span-6 sm:col-span-12'>
       <Project 
         title='Crypto Screener Application'
         img={ project1}
         summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
         It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
         local currency.  '
         link='/'
         github='/'
         type='Featured Project'
         />   
       </div> */}

       </div>


    </Layout>
    <div className='hidden sm:block md:block lg:block xl:hidden 2xl:hidden md:right-0 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 lg:right-0 lg:left-0 lg:top-0 lg:bottom-auto lg:absolute'>
    <HireMe />
</div>
 </main>
  
  </>
  )
}

export default projects