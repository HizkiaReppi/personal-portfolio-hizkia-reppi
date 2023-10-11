import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_afbyqma', 'template_swekzty', form.current, 'ORnGq3Z75sShz3R4P')
        .then(() => {
          if (form.current) {
            form.current.reset();
          }
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your message has been sent',
          });
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
    }
  };

  return (
    <motion.section
      variants={staggerContainer(0.5, 0.5)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
    >
      <Element name='contact' className='w-full py-3 px-[6%] md:py-4 md:px-[11%] flex justify-center items-center text-gray-300'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <motion.h2 variants={textVariant(0.2)} className='text-4xl font-semibold inline border-b-4 border-second'>Contact</motion.h2>
          </div>
          <motion.input
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className='p-4 bg-[#0b0b13] mb-3 outline-none border-none rounded-lg'
            type="text"
            placeholder='Your Name'
            name='name'
            autoComplete='name'
            required
          />
          <motion.input
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className='p-4 bg-[#0b0b13] mb-3 outline-none border-none rounded-lg'
            type="email"
            placeholder='Your Email'
            name='email'
            autoComplete='email'
            required
          />
          <motion.textarea
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className='p-4 bg-[#0b0b13] mb-4 outline-none border-none rounded-lg'
            name="message"
            id="message"
            placeholder='Project Description'
            cols={20}
            rows={10}
            required
          ></motion.textarea>
          <motion.button
            variants={fadeIn('right', 'tween', 0.2, 1)}
            type='submit'
            className='bg-second text-white shadow-btn shadow-white py-[10px] px-7 inline-block border border-solid border-transparent text-base font-normal ease transition-all duration-300 cursor-pointer hover:bg-white hover:text-second hover:shadow-second'
          >
            Let's Collaborate
          </motion.button>
        </form>
      </Element>
    </motion.section>
  );
};

export default Contact;
