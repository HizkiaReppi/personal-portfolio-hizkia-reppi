import React from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from '../utils/motion';

const Footer: React.FC = () => {
  const date: number = new Date().getFullYear();

  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className='bg-[#0b0b13] p-6 mt-12 text-center text-white text-xs md:text-sm'
    >
      <p>Copyright &copy; {date} Hizkia Reppi. All Right Reserved</p>
    </motion.footer>
  )
}

export default Footer
