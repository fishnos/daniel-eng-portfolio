import React from "react";
import Image from "next/image";
import css3 from "../public/assets/icons/css-3.png";
import framerMotion from "../public/assets/icons/framer-motion.png";
import javaScript from "../public/assets/icons/icons8-javascript.png";
import typeScript from "../public/assets/icons/typescript.png";
import html5 from "../public/assets/icons/html-1.png";
import node from "../public/assets/icons/nodejs-3.png";
import tailwindCSS from "../public/assets/icons/tailwind-css-2.png";
import nextJS from "../public/assets/icons/next-js.png";
import java from "../public/assets/icons/java-4.png";
import python from "../public/assets/icons/icons8-python-96.png";
import { motion } from "framer-motion";

export default function Ticker({ tickerType, tickerDuration }) {
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
        <Image src={javaScript} alt="javaScript" width={30} height={30} />
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
        <Image src={typeScript} alt="typeScript" width={30} height={30} />
        <span className="text-gradient font-bold">TypeScript</span>
      </motion.a>,
      //tailwind css
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
        <Image src={tailwindCSS} alt="tailwind" width={30} height={30} />
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
        <Image src={css3} alt="css3" width={30} height={30} />
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
        <Image src={html5} alt="html" width={30} height={30} />
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
        <Image src={framerMotion} alt="framerMotion" width={30} height={30} />
        <span className="text-gradient font-bold">Framer Motion</span>
      </motion.a>,
      //next
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
        <Image src={nextJS} alt="next" width={30} height={30} />
        <span className="text-gradient font-bold">Next.js</span>
      </motion.a>,
    ],
    //backend
    backend: [
      //java
      <motion.a
        href="https://www.java.com/en/"
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
        <Image src={java} alt="java" width={16} height={16} />
        <span className="text-gradient font-bold">Java</span>
      </motion.a>,
      //python
      <motion.a
        href="https://www.python.org/"
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
        <Image src={python} alt="python" width={30} height={30} />
        <span className="text-gradient font-bold">Python</span>
      </motion.a>,
      //node
      <motion.a
        href="https://nodejs.org/en"
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
        <Image src={node} alt="node" width={30} height={30} />
        <span className="text-gradient font-bold">Node</span>
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
      <ul className={`w-max inline-flex gap-5 text-white text-[20px] whitespace-nowrap py-4 animate-[scroll_${tickerDuration}s_linear_infinite]`}>
        {[...items, ...items].map((item, index) => (
          <li className="items-center flex gap-2 flex-shrink-0" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
