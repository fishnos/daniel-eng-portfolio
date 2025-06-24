import React, { useLayoutEffect, useRef, useState } from "react";
import { SiJavascript, SiTypescript, SiTailwindcss, SiCss3, SiHtml5} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Ticker({ tickerType }) {
  const tickerTypes = {
    //frontend
    frontend: [
      //javascript
      <motion.a
        href="https://www.javascript.com/"
        className="flex flex-row justify-center items-center gap-2 py-2 px-4 border border-white/15 rounded-2xl w-auto h-auto bg-white/0 text-white"
        initial={{ scale: 1 }}
        whileHover={{
          boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
          scale: 1.05,
          transition: {
            duration: 0.2,
            ease: "easeInOut",
          },
        }}
      >
        <SiJavascript size={30} />
        <span className="text-gradient font-bold">JavaScript</span>
      </motion.a>,
      //typescript
      <motion.a
        href="https://www.typescriptlang.org/"
        className="flex flex-row justify-center items-center gap-2 py-2 px-4 border border-white/15 rounded-2xl w-auto h-auto bg-white/0 text-white"
        initial={{ scale: 1 }}
        whileHover={{
          boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
          scale: 1.05,
          transition: {
            duration: 0.2,
            ease: "easeInOut",
          },
        }}
      >
        <SiTypescript size={30} />
        <span className="text-gradient font-bold">TypeScript</span>
      </motion.a>,
      //tailwind
      <motion.a
        href="https://tailwindcss.com/"
        className="flex flex-row justify-center items-center gap-2 py-2 px-4 border border-white/15 rounded-2xl w-auto h-auto bg-white/0 text-white"
        initial={{ scale: 1 }}
        whileHover={{
            boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
            scale: 1.05,
            transition: {
            duration: 0.2,
            ease: "easeInOut",
            },
        }}
      >
        <SiTailwindcss size={30} />
        <span className="text-gradient font-bold">Tailwind CSS</span>
      </motion.a>,
      //css
      <motion.a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        className="flex flex-row justify-center items-center gap-2 py-2 px-4 border border-white/15 rounded-2xl w-auto h-auto bg-white/0 text-white"
        initial={{ scale: 1 }}
        whileHover={{
            boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
            scale: 1.05,
            transition: {
            duration: 0.2,
            ease: "easeInOut",
            },
        }}
      >
        <SiCss3 size={30} />
        <span className="text-gradient font-bold">CSS</span>
      </motion.a>,
      //html
      <motion.a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        className="flex flex-row justify-center items-center gap-2 py-2 px-4 border border-white/15 rounded-2xl w-auto h-auto bg-white/0 text-white"
        initial={{ scale: 1 }}
        whileHover={{
            boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
            scale: 1.05,
            transition: {
            duration: 0.2,
            ease: "easeInOut",
            },
        }}
      >
        <SiHtml5 size={30} />
        <span className="text-gradient font-bold">HTML</span>
      </motion.a>,
      //framer-motion
      <motion.a
        href="https://motion.dev/"
        className="flex flex-row justify-center items-center gap-2 py-2 px-4 border border-white/15 rounded-2xl w-auto h-auto bg-white/0 text-white"
        initial={{ scale: 1 }}
        whileHover={{
            boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
            scale: 1.05,
            transition: {
            duration: 0.2,
            ease: "easeInOut",
            },
        }}
      >
        <SiHtml5 size={30} />
        <span className="text-gradient font-bold">Framer Motion</span>
      </motion.a>,
    ],
    //backend
    backend: [
      <motion.a
        href="https://www.javascript.com/"
        className="flex flex-row justify-center items-center gap-2 py-2 px-4 border border-white/15 rounded-2xl w-auto h-auto bg-white/0 text-white"
        initial={{ scale: 1 }}
        whileHover={{
          boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
          scale: 1.05,
          transition: {
            duration: 0.2,
            ease: "easeInOut",
          },
        }}
      >
        <FaJava size={30} />
        <span className="text-gradient font-bold">Java</span>
      </motion.a>,
    ],
    //tools
    tools: [],
  };
  const items = tickerTypes[tickerType] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1,
          duration: 0.4,
          ease: "circInOut",
        },
      }}
      viewport={{ once: true }}
      className="w-full h-auto items-center overflow-hidden 
                [mask-image:linear-gradient(to_right,transparent,black_15%,black_90%,transparent)]"
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
