'use client'

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'

const about = {
    title: 'About',
    description: 'I am a creative problem-solver with a passion for building innovative web and blockchain solutions. With a hands-on approach to learning and brilliant hand-eye coordination, I thrive in dynamic environments, turning complex challenges into polished, impactful results.',
    info: [
      {
        fieldName: 'Name',
        fieldValue: 'Clint Edward'
      },
      {
        fieldName: 'Whatsapp',
        fieldValue: '(+27) 061 476 5122'
      },
      {
        fieldName: 'Experience',
        fieldValue: '+4'
      },
      {
        fieldName: 'Email',
        fieldValue: 'oceanicpulse24@gmail.com'
      },
      {
        fieldName: 'Nationality',
        fieldValue: 'South African'
      },
      {
        fieldName: 'Freelance',
        fieldValue: 'Available'
      },
      {
        fieldName: 'Language',
        fieldValue: 'English, Afrikaans'
      },
    ],
    skills: [
      {
        name: 'HTML',
        icon: <FaHtml5 />
      },
      {
        name: 'CSS',
        icon: <FaCss3 />
      },
      {
        name: 'JavaScript',
        icon: <FaJs />
      },
      {
        name: 'React',
        icon: <FaReact />
      },
      {
        name: 'NodeJs',
        icon: <FaNodeJs />
      },
      {
        name: 'Tailwind',
        icon: <SiTailwindcss />
      },
      {
        name: 'NextJs',
        icon: <SiNextdotjs />
      },
      {
        name: 'Figma',
        icon: <FaFigma />
      },
    ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'I have over four years of experience in web development and software engineering, including three years specializing in blockchain and decentralized applications. My journey includes building scalable dApps, working with cross-functional teams, and delivering high-impact client projects. From developing event management platforms on the Avalanche Blockchain to crafting secure banking applications, I bring creativity, precision, and a results-driven mindset to every project.',
  items: [
    {
      company: 'Freelance',
      position: 'Full Stack Developer',
      duration: '2022 - Present',
    },
    {
      company: 'Elit Web3 Solutions',
      position: 'Full Stack Developer',
      duration: '2021 - 2024',
    },
    {
      company: 'Esri South Africa',
      position: 'GIS Technician/Systems Admin',
      duration: '2018 - 2021',
    }
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'I have a solid foundation in web development, with experience in HTML, CSS, JavaScript, React, NodeJs, Tailwind, NextJs, Figma and more. I am always eager to learn new technologies and improve my skills.',
  items: [
    {
      institution: 'Codespace Acedmy',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2018',
    },
    {
      institution: 'University of Salzburg',
      degree: 'Post Graduate Diploma GIS',
      duration: '2013 - 2015',
    },
    {
      institution: 'Northlink Tygerberg',
      degree: 'NQF5 Project Management',
      duration: '2008',
    },
   
  ]
}

const skills = {
  title: 'My skills',
  description: '',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, ToolTrigger} from '@/components/ui/tooltip'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {motion} from 'framer-motion'
import { AiOutlineScroll } from 'react-icons/ai'

const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
        ease: 'easeIn'        }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 '
    >
      <div className='container mx-auto '>
        <Tabs 
          defautlvalue="experience" 
          className='flex flex-col xl:flex-row gap-[60px] '
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 '>
            <TabsTrigger value="experience" className='rounded-xl'>Experience</TabsTrigger>
            <TabsTrigger value="education" className='rounded-xl'>Education</TabsTrigger>
            <TabsTrigger value="skills" className='rounded-xl'>Skills</TabsTrigger>
            <TabsTrigger value="about" className='rounded-xl'>About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full '>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        
                      <li 
                        key={index}
                        className='flex flex-col gap-1 bg-[#232329] h-[184px] py-6 px-10 rounded-xl justify-center items-center lg:items-start'
                      >
                        <span className='text-accent'> {item.duration} </span>
                        <h3 className='text-xl max-w-[280px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'>  </span>
                          <p className='text-white/60'> {item.company} </p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        
                      <li 
                        key={index}
                        className='flex flex-col gap-1 bg-[#232329] h-[184px] py-6 px-10 rounded-xl justify-center items-center lg:items-start'
                      >
                        <span className='text-accent'> {item.duration} </span>
                        <h3 className='text-xl max-w-[280px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'>  </span>
                          <p className='text-white/60'> {item.institution} </p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {skills.title}
                  </h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0' >{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div
                              className='text-6xl group-hover:text-accent transition-all duration-300'
                            >{skill.icon}</div>
                          </TooltipTrigger >
                          <TooltipContent className='rounded-xl'>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>

                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'> 
                        
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume