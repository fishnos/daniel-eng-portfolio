"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div>
        <motion.section 
            initial={{opacity: 0}}
            animate={{
                opacity: 1, 
                transition: {
                    delay: 1.7, 
                    duration: 0.4, 
                    ease: "easeIn"
                }
            }}
        >
            about me
        </motion.section>
    </div>
  )
}