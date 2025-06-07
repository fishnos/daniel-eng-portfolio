import React from 'react';
import { motion } from 'framer-motion'

//work on this class if you actually want to later

export default function Blob({containerStyles}) {
  return (
    <div className={containerStyles}>
        <svg viewBox="-10 0 200 200">
            <motion.path 
                fill="#5810ff" 
                transform="translate(100 100)"
            />
        </svg>
    </div>
  )
}