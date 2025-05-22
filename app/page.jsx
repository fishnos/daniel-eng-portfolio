"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
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
      className="h-screen flex items-center"
    >
      <div className="flex flex-col w-full justify-between items-center xl:flex-row">
        <div className="w-full">
          homepage
        </div>
        <div className="flex-1">
          image
        </div>
      </div>
    </motion.section>
  );
}
