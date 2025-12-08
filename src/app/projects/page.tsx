"use client";

import { projects } from '@/contents/projects'
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Projects = () => {
    return (
        <div className="container max-w-7xl mx-auto py-20">
            <motion.h1 className="text-4xl font-bold mb-4 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} >My Projects</motion.h1>
            <motion.p className="text-lg text-secondary mb-24 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} >Here are some of my recent projects. Click on the links to view the code or live demo.</motion.p>

             <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-8' variants={staggerContainer} initial="initial" animate="animate" >
                        {
                            projects.map((project) => (
                                <motion.article key={project.title} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6' variants={fadeInUp} whileHover={{ scale: 1.02 }}   transition={{ type: "spring", stiffness: 250 }}  >
                                    <motion.div className='relative as aspect-video mb-4 rounded-lg overflow-hidden' whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} >
                                        <Image src={project.image} alt={project.title} fill className='object-cover' 
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
                                    </motion.div>
            
                                    <motion.h3 className='text-xl font-semibold mb-2' whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }} >{project.title}</motion.h3>
                                    <motion.p className='text-gray-600 dark:text-gray-300 mb-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}  >{project.description}</motion.p>
                                    <motion.div className='flex flex-wrap gap-2 mb-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} >
                                        {
                                            project.technologies.map((tech) => (
                                                <motion.span key={tech} className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} >
                                                    {tech}</motion.span>
                                            ))
                                        }
                                    </motion.div>
            
                                    <motion.div className='flex gap-4 mt-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} >
                                        <motion.a href={project.githubLink} target='_blank' className='flex items-center gap-2 
                                        text-secondary hover:text-primary transition-colors' whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} rel="noopener noreferrer" >
                                            <FaGithub className='w-5 h-5'/> <span>Code</span>
                                        </motion.a>
                                        <motion.a href={project.demoLink} target='_blank' className='flex items-center gap-2 
                                        text-secondary hover:text-primary transition-colors' whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} rel="noopener noreferrer" >
                                            <FaExternalLinkAlt className='w-5 h-5'/> <span>Live Demo</span>
                                        </motion.a>
                                    </motion.div>  
            
                                </motion.article>
                            ))
                        }
                    </motion.div>
        </div>
    )
}

export default Projects;