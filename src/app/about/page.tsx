'use client'

import React from 'react'
import { FaCode, FaLaptopCode, FaGraduationCap  } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer
} from '@/utils/animations'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <motion.h1 className='text-4xl font-bold mb-8 text-center'{...fadeInDown}>About Me</motion.h1>
      {/* Bio section */}
      <motion.section className='mb-16' {...fadeInUp}>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
          I&apos;m a Full Stack Developer driven by curiosity, creativity, and clean code. 
          I love crafting intuitive interfaces on the frontend and designing powerful, 
          efficient systems on the backend. Whether it&apos;s building a smooth user journey or 
          architecting a secure API, I aim to bring clarity, purpose, and innovation to every 
          project I work on.
        </p>
      </motion.section>

      {/* Skills section */}
      <motion.section className='mb-16'{...fadeIn} transition={{delay:0.2}}>
        <motion.h2 className='section-title' {...fadeInUp}>Skills</motion.h2>
        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-6' variants={staggerContainer} initial="initial" animate="animate">
          {/* Front end Card Skills */}
          <motion.div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md' variants={fadeInUp} whileHover={{ scale: 1.05 }}   transition={{ type: "spring", stiffness: 250 }} >
            <FaCode className="h-8 w-8 text-primary mb-4"/>
            <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
            <ul className='text-secondary space-y-2'>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          {/* Back end Card Skills */}
          <motion.div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md' variants={fadeInUp} whileHover={{ scale: 1.05 }}   transition={{ type: "spring", stiffness: 250 }}>
            <FaLaptopCode className="h-8 w-8 text-primary mb-4"/>
            <h3 className='text-xl font-semibold mb-2'>Backend</h3>
            <ul className='text-secondary space-y-2'>
              <li>Java</li>
              <li>NodeJS</li>
              <li>Spring Boot</li>
              <li>C# / .NET</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>PHP</li>
              <li>Python</li>
            </ul>
          </motion.div>

           {/* Tools & Other Skills */}
          <motion.div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md' variants={fadeInUp} whileHover={{ scale: 1.05 }}   transition={{ type: "spring", stiffness: 250 }}>
            <FaGraduationCap  className="h-8 w-8 text-primary mb-4"/>
            <h3 className='text-xl font-semibold mb-2'>Tools & Other</h3>
            <ul className='text-secondary space-y-2'>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Postman</li>
            </ul>
          </motion.div>

        </motion.div>
      </motion.section>

      {/* Experience section */}
      <motion.section className='mb-16' {...fadeIn} transition={{delay:0.4}}>
        <motion.h2 className='section-title' {...fadeInUp}>Experiences</motion.h2>

        <motion.div className='max-w-3xl mx-auto space-y-8' variants={staggerContainer} initial="initial" animate="animate">
          <motion.div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md' variants={fadeInUp} whileHover={{ scale: 1.02 }}   transition={{ type: "spring", stiffness: 250 }} >
            <h3 className='text-xl font-semibold mb-2'>Software Engineer Intern</h3>
            <p className='text-primary mb-2'>Epic Lanka Technologies (Pvt.) Ltd  •  2023 - 2024  </p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
                <li>Developed and tested RESTful APIs for banking and financial systems using Java, Spring Boot, JUnit, and Mockito.</li>
                <li>Implemented transaction scheduling and automated pending transaction notifications, improving bulk transaction processing efficiency.</li>
                <li>Migrated enterprise databases from Oracle to PostgreSQL, ensuring data integrity and optimized performance.</li>
                <li>Built notification APIs for mobile/email alerts and corporate financial workflows (Request to Pay / Recall Pending).</li>
                <li>Created system architecture diagrams and detailed technical documentation for major financial integrations.</li>
                <li>Researched Docker, Linux server automation, MQTT, Firebase, and cryptography fundamentals to support secure and scalable system design.</li>
            </ul>
          </motion.div>
          
        </motion.div>
      </motion.section>

      {/* Education section */}
      <motion.section className='mb-16' {...fadeIn} transition={{delay:0.6}}>
        <motion.h2 className='section-title' {...fadeInUp}>Education</motion.h2>

        <motion.div className="max-w-3xl mx-auto space-y-8" variants={staggerContainer} initial="initial" animate="animate">

          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} whileHover={{ scale: 1.02 }}   transition={{ type: "spring", stiffness: 250 }}>
            <h3 className="text-xl font-semibold mb-2">Bechelor of Engineering in Software Engineering</h3>
            <p className="text-primary mb-2">University of Westminster , London • 2021 - 2025</p>
            <p className="text-secondary">
              Graduated with Upper Second Honours. Focused on Software Engineering and Web Development
            </p>
          </motion.div>

          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} whileHover={{ scale: 1.02 }}   transition={{ type: "spring", stiffness: 250 }}>
            <h3 className="text-xl font-semibold mb-2">Primary & Secondary Education</h3>
            <p className="text-primary mb-2">Sanghamiththa Balika Vidyalaya, Galle • 2007 - 2020</p>
            <p className="text-secondary">
              Completed 13 years of schooling and A/Ls in the Physical Science stream. Selected to goverment
              university of Applied Sciences.
            </p>
          </motion.div>

        </motion.div>



      </motion.section>

    </div>
  )
}

export default About