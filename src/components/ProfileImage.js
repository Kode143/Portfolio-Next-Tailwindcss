import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import profilePic from '../../public/images/profile/art2.png';
import { CodeIcon, CssIcon, GitIcon, HtmlIcon, NodeIcon, PhpIcon, ReactIcon, ShopIcon } from './Icons';

const Icons = ({ icon, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center 
      py-4 px-6 cursor-pointer absolute
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:flex xs:justify-center xs:px-0 xs:py-0 xs:bg-transparent xs:dark:bg-transparent
      '
      whileHover={{ scale: 1.08 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {icon}
    </motion.div>
  );
};

const ProfileImage = () => {
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
    <div className=' relative flex flex-col items-center justify-center'>
      <motion.div className='w-full h-full'>
        <Image
          src={profilePic}
          alt='Kode'
          className='h-auto md:w-full'
          priority
          sizes='(max-width:768px) 100vw,
             (max-width:1200px) 50vw, 50vw'
        />
      </motion.div>
      {isMobile ? (
      <div className='flex justify-center absolute w-full text-center '>
        <Icons icon={<NodeIcon />} x='0vw' y='-45vw' />
      <Icons icon={<PhpIcon />} x='-27vw' y='-15vw' />
      <Icons icon={<CodeIcon />} x='0vw' y='16vw' />
      <Icons icon={<ShopIcon />} x='27vw' y='-15vw' />
      <Icons icon={<ReactIcon />} x='23vw' y='-35vw' />
      <Icons icon={<GitIcon />} x='30vw' y='5vw' />
      <Icons icon={<CssIcon />} x='-30vw' y='6vw' />
      <Icons icon={<HtmlIcon />} x='-23vw' y='-35vw' />
      {/* Add more mobile icons here */}
    </div>
  ) : (
    <div className='flex justify-between absolute top-1/3 left-1/3 right-1/3'>
        <Icons icon={<NodeIcon />} x='3vw' y='-15vw' />
      <Icons icon={<PhpIcon />} x='-12vw' y='-2vw' />
      <Icons icon={<CodeIcon />} x='3vw' y='13vw' />
      <Icons icon={<ShopIcon />} x='17vw' y='-2vw' />
      <Icons icon={<ReactIcon />} x='13vw' y='-12vw' />
      <Icons icon={<GitIcon  />} x='17vw' y='8vw'   />
      <Icons icon={<CssIcon />} x='-13vw' y='8vw' />
      <Icons icon={<HtmlIcon />} x='-8vw' y='-12vw' />
    </div>
      )}
    </div>
  );
};

export default ProfileImage;
