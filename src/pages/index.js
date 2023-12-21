import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '../components/Icons'
import HireMe from '../components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '../components/TransitionEffect'
import ProfileImage from '../components/ProfileImage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bhuwan Shrestha</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className='w-full flex items-center text-dark  xs:pt-4 dark:text-light'>
      <Layout className='pt-0 md:pt-8 sm:pt-6 xs:pt-8 xl:pt-0'>
         <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full xs:w-full'>
            <ProfileImage />
              </div>
              <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
             
                <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='!text-6xl text-left pt-3
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-2xl
                '/>
                  <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                  As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                  </p>
                  <div className='flex items-center self-start mt-2 lg:self-center'>
                    <Link href='/myCV.pdf' target={'_blank'}
                    className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                     hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                     dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                     md:p-2 md:px-4 md:text-base
                     ' 
                     download={true}>
                      Resume <LinkArrow className={'w-6 ml-1'}/>
                    </Link>
                    <Link href='mailto:sthabhuwan168@gmail.com' target={'_blank'}
                    className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                    >Contact</Link>
                  </div>
              </div>
          </div>
      </Layout>
      <HireMe />
      <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
        <Image src={lightBulb} alt='kode' className='w-full h-auto' />
      </div>
      </main >
      
    </>
  )
}
