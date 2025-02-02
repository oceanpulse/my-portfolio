'use client'

import {BsArrowDownRight} from 'react-icons/bs'

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Custom web solutions built with modern technologies. From responsive websites to complex web applications, I create efficient, scalable, and user-friendly digital experiences that help businesses thrive online.',
    href: '/contact',
  },
  {
    num: '02',
    title: 'UI/UX Development',
    description: 'Creating intuitive and engaging user interfaces that combine aesthetic appeal with practical functionality. I focus on user-centered design principles to deliver seamless interactions and memorable experiences.',
    href: '/contact',
  },
  {
    num: '03',
    title: 'Logo Design',
    description: 'Crafting distinctive brand identities through creative logo design. I develop unique visual elements that capture your brands essence and leave a lasting impression on your target audience.',
    href: '/contact',
  },
  {
    num: '04',
    title: 'Blockchain/Web3',
    description: 'Building decentralized applications and smart contracts for the Web3 ecosystem. I help businesses integrate blockchain technology to create secure, transparent, and innovative solutions for the future of the internet.',
    href: '/contact',
  },
  
]

import {motion} from 'framer-motion'
import Link from 'next/link'



const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1, transition: {duration: 0.4, delay: 2.4, ease: 'easeIn' }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div 
                  key={index}
                  initial={{opacity: 0}}
                  animate={{
                    opacity: 1, transition: {duration: 0.4, delay: 2.4, ease: 'easeIn' }
                  }}
                  className='flex-1 flex flex-col justify-center gap-6 group'
                  // className='flex-1 flex flex-col xl:flex-row gap-x-8'
                  
                >
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                  <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'> 
                    <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'> {service.title} </h2>
                <p className='text-white/60'> {service.description} </p>
                <div className='border-b border-white/20 w-full' ></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services