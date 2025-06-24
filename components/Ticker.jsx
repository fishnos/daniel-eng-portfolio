import React from 'react'
import { motion } from 'framer-motion';

export default function Ticker({ tickerType }) {
    const tickerTypes = {
        languages: [
            {
                name: "JavaScript", 
                icon: "JS"
            }, 
            {

            }
        ],
        tools: [
            {
                name: "React", 
                icon: "RT"
            }, 
            {

            }
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
        className="w-full h-auto flex flex-col bg-white/10 backdrop-blur-xs justify-between items-center 
                  border border-white/15 rounded-2xl border border-white/15 rounded-2xl 
                  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
                  shrink-0 text-[20px]"
    >
        <ul className="flex gap-5 text-white py-4 ticker">
            {[...items, ...items].map((item) => (
                <li className="flex gap-2">
                    <p>{item.icon}</p>
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    </motion.div>
  );
}