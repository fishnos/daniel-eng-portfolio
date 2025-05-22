import React from 'react'
import { motion } from 'framer-motion'

export default function TextTransition({ containerStyles, fileLink }) {
  return (
    <motion.h1
        initial={{ color: "black" }}
        animate={{ color: "black, white" }}
        transition={{ delay: 2, duration: 0.5,  ease: "easeInOut" }}
        className={containerStyles}
    >
        {fileLink}
    </motion.h1>
  );
}