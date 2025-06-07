"use client";

import { motion } from 'framer-motion';
import React from 'react'

const rectangleVariants = {
    initial: {
        y: "-100%",
        height: "100%",
    },
    animate: {
        y: "0%",
        height: "0%",
    },
    exit: {
        y: ["0%", "-100%"],
        height: ["0%", "100%"],
    }
}

export default function ScreenRectangle() {
  return <>
    <motion.div 
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            delay: 0,
            duration: 0.5,
            ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-30 bg-accent"
    />
    <motion.div 
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            delay: 0.15,
            duration: 0.7,
            ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-20 bg-accent-hover"
    />
     <motion.div 
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            delay: 0.275,
            duration: 0.75,
            ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-10 bg-secondary"
    />
  </>;
}