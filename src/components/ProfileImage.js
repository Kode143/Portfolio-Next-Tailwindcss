import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import profilePic from '../../public/images/profile/art2.png';
import { CodeIcon, CssIcon, GitIcon, HtmlIcon, NodeIcon, PhpIcon, ReactIcon, ShopIcon } from './Icons';

const Icons = ({ icon, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center 
       cursor-pointer absolute lg:ps-6 
       xs:flex xs:justify-center xs:px-0 xs:py-0 xs:bg-transparent xs:dark:bg-transparent
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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconsMobile=[

     {icon:<NodeIcon />, x:'0vw', y:'-45vw'},
    { icon:<PhpIcon />, x:'-27vw', y:'-15vw' },
    { icon:<CodeIcon />, x:'0vw', y:'14vw' },
    { icon:<ShopIcon />, x:'27vw', y:'-15vw' },
    { icon:<ReactIcon />, x:'23vw', y:'-35vw' },
    { icon:<GitIcon />, x:'30vw', y:'5vw' },
    { icon:<CssIcon />, x:'-30vw', y:'6vw' },
   {  icon:<HtmlIcon />, x:'-23vw', y:'-35vw' },

  ];

  const iconsDesktop= [
     {icon:<NodeIcon />, x:'3vw' ,y:'-15vw' },
    { icon:<PhpIcon />, x:'-12vw', y:'-2vw' },
     {icon:<CodeIcon />, x:'3vw', y:'13vw' },
    { icon:<ShopIcon />, x:'17vw', y:'-2vw' },
   {  icon:<ReactIcon />, x:'13vw', y:'-12vw'}, 
    { icon:<GitIcon  />, x:'17vw', y:'8vw'   },
    { icon:<CssIcon />, x:'-13vw', y:'8vw'}, 
    { icon:<HtmlIcon />, x:'-8vw', y:'-12vw'},
  ];




  return (
    <div className='relative flex flex-col items-center justify-center '>
      <div className='w-full h-full relative'>
        <Image
          src={profilePic}
          alt='Kode'
          className='h-auto md:w-full'
          priority
          sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
        />
      </div>
      <div
        className={`flex justify-center absolute  w-1/2 md:w-full xs:w-full pt-4 ${
          isMobile ? 'text-center' : 'top-1/3 left-1/4 pr-20 pt-4 right-1/2'
          
        }`}
      >
        {isMobile
          ? iconsMobile.map((iconData, index) => (
              <Icons key={index} {...iconData} />
            ))
          : iconsDesktop.map((iconData, index) => (
              <Icons key={index} {...iconData} />
            ))}
      </div>
    </div>
  );
};

export default ProfileImage;
