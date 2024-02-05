import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { navVariants } from '../utils/motion';
import logo from '../assets/logo.svg';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  screenWidth: number;
}

const Navbar: React.FC<NavbarProps> = ({ screenWidth }) => {
  const [nav, setNav] = useState(false);
  const [iconSize, setIconSize] = useState(30);

  const countSize = (): number => {
    if (screenWidth < 640) return 18;
    if (screenWidth >= 640 && screenWidth < 768) return 20;
    if (screenWidth >= 768 && screenWidth < 1024) return 23;
    if (screenWidth >= 1024 && screenWidth < 1280) return 28;
    if (screenWidth >= 1280 && screenWidth < 1536) return 30;
    return 30;
  };

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    setIconSize(countSize());
  }, [screenWidth]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < -1) {
        setNav(true);
      } else {
        setNav(false);
      }
    });
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className='fixed top-0 right-0 w-full z-[1000] bg-main flex justify-between items-center py-3 px-[3%] md:py-4 md:px-[11%] duration-300 shadow-lg'
    >
      <div>
        <img src={logo} alt="Hizkia Reppi" style={{ width: '50px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex font-semibold'>
        {navItems.map((item: { id: string; label: string }) => (
          <li className='group' key={item.id}>
            <Link to={item.id} className='text-white py-0 px-1 group-hover:text-second group-hover:duration-300' smooth={true} duration={500}>
              {item.label}
            </Link>
            <p className='border-b-2 border-b-second py-[2px] my-0 duration-500 ease-in-out w-0 group-hover:w-[75%] group-hover:duration-500 group-hover:ease-in-out'></p>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} onScroll={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'absolute top-[-500px] left-0 w-full opacity-0 duration-200 ease' : 'absolute top-full left-0 flex flex-col w-full shadow-md text-left bg-[#0b0b13] duration-200 ease'}>
        {navItems.map((item: { id: string; label: string }) => (
          <li className='py-6 text-md group' key={item.id}>
            <Link onClick={handleClick} className='block py-2 px-3 my-0 mx-1 border-l-2 border-second group-hover:text-second group-hover:duration-300' to={item.id} smooth={true} duration={500}>
              {item.label}
            </Link>
            <p className='border-b-2 border-b-second py-[2px] my-0 duration-500 ease-in-out w-0 group-hover:w-[50%] group-hover:duration-500 group-hover:ease-in-out'></p>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className='fixed lg:flex flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[130px] md:w-[160px] h-12 md:h-[60px] flex justify-between items-center ml-[-80px] md:ml-[-100px] hover:ml-0 duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/hizkiareppi/">
              Linkedin <FaLinkedin size={iconSize} />
            </a>
          </li>
          <li className='w-[130px] md:w-[160px] h-12 md:h-[60px] flex justify-between items-center ml-[-80px] md:ml-[-100px] hover:ml-0 duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/hizkiareppi">
              Github <FaGithub size={iconSize} />
            </a>
          </li>
          <li className='w-[130px] md:w-[160px] h-12 md:h-[60px] flex justify-between items-center ml-[-80px] md:ml-[-100px] hover:ml-0 duration-300 bg-[#6FC2B0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:email.hizkiareppi@gmail.com">
              Email <HiOutlineMail size={iconSize} />
            </a>
          </li>
          <li className='w-[130px] md:w-[160px] h-12 md:h-[60px] flex justify-between items-center ml-[-80px] md:ml-[-100px] hover:ml-0 duration-300 bg-[#565F69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/Hizkia-Jefren-Reppi.pdf" download={'Hizkia-Jefren-Reppi.pdf'}>
              Resume <BsFillPersonLinesFill size={iconSize} />
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
