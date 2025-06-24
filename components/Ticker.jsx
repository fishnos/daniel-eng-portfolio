import React, { useLayoutEffect, useRef, useState } from 'react'
import { FaJsSquare } from "react-icons/fa";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Ticker({ tickerType }) {
    const tickerTypes = {
        languages: [
            <motion.button 
                className="flex flex-row justify-center items-center gap-2 py-2 px-2 border border-white/15 rounded-2xl w-auto h-auto bg-white/0 text-white"
                initial={{scale: 1}}
                whileHover={{
                    boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
                    scale: 1.05,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut"
                    }
                }}
            >
                <FaJsSquare color="white" size={30}/>
                <span className="text-gradient font-bold">JavaScript</span>
            </motion.button>,
            <motion.button 
                className="flex flex-row justify-center items-center gap-2 py-2 px-2 border border-white/15 rounded-2xl w-auto h-auto bg-white/0 text-white"
                initial={{scale: 1}}
                whileHover={{
                    boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
                    scale: 1.05,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut"
                    }
                }}
            >
                <FaJsSquare color="white" size={30}/>
                <span className="text-gradient font-bold">JavaScript</span>
            </motion.button>,
            <motion.button 
                className="flex flex-row justify-center items-center gap-2 py-2 px-2 border border-white/15 rounded-2xl w-auto h-auto bg-white/0 text-white"
                initial={{scale: 1}}
                whileHover={{
                    boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
                    scale: 1.05,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut"
                    }
                }}
            >
                <FaJsSquare color="white" size={30}/>
                <span className="text-gradient font-bold">JavaScript</span>
            </motion.button>,
        ],
        tools: [
            {
                name: "React", 
                icon: "RT"
            }, 
            {
                name: "React", 
                icon: "RT"
            },
            {
                name: "React", 
                icon: "RT"
            },
            {
                name: "React", 
                icon: "RT"
            },
            {
                name: "React", 
                icon: "RT"
            },
            {
                name: "React", 
                icon: "RT"
            },
            {
                name: "React", 
                icon: "RT"
            },
        ],
    }
    const items = tickerTypes[tickerType] || [];

  return (
    <motion.div
        initial={{opacity: 0, y: 75}}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
            delay: 0.1,
            duration: 0.4,
            ease: "circInOut",
            }
        }}
        viewport={{once: true}}
        className="w-full h-auto flex bg-white/10 backdrop-blur-xs items-center 
                  border border-white/15 rounded-2xl border border-white/15 rounded-2xl 
                  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
        <ul className="w-max inline-flex gap-5 text-white text-[20px] whitespace-nowrap py-4 ticker">
            {[...items, ...items].map((item, index) => (
                <li className="items-center flex gap-2 flex-shrink-0" key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
  );
}