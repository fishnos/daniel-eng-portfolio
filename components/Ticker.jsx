import React from "react";
import C from '../public/assets/icons/c.svg';
import CSharp from '../public/assets/icons/c-sharp.svg';
import CPlusPlus from '../public/assets/icons/c++.svg';
import Css3 from '../public/assets/icons/css-3.svg';
import Figma from '../public/assets/icons/figma.svg';
import FramerMotionIcon from '../public/assets/icons/framer-motion.svg';
import Html5 from '../public/assets/icons/html-1.svg';
import JavascriptIcon from '../public/assets/icons/icons8-javascript.svg';
import Intellij from '../public/assets/icons/intellij.svg';
import NextJSIcon from '../public/assets/icons/next-js.svg';
import JavaIcon from '../public/assets/icons/java.svg';
import Python from '../public/assets/icons/python.svg';
import NodeJSIcon from '../public/assets/icons/nodejs-3.svg';
import NpmIcon from '../public/assets/icons/npm.svg';
import Redis from '../public/assets/icons/redis.svg';
import Pycharm from '../public/assets/icons/pycharm.svg';
import ReactIcon from '../public/assets/icons/react-2.svg';
import TailwindIcon from '../public/assets/icons/tailwind-css-2.svg';
import TypescriptIcon from '../public/assets/icons/typescript.svg';
import Arduino from '../public/assets/icons/arduino.svg';
import VSCodeIcon from '../public/assets/icons/vs-code.svg';
import RaspPi from '../public/assets/icons/raspberry-pi.svg';
import VercelIcon from '../public/assets/icons/vercel.svg';
import Github from '../public/assets/icons/github.svg';
import Git from '../public/assets/icons/git.svg';
import CursorIcon from '../public/assets/icons/cursor.svg';
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
        <JavascriptIcon className="h-[30px] w-[30px]"/>
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
        <TypescriptIcon className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">TypeScript</span>
      </motion.a>,
      //react
      <motion.a
        href="https://react.dev/"
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
        <ReactIcon className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">React</span>
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
        <TailwindIcon className="h-[30px] w-[30px]"/>
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
        <Css3 className="h-[30px] w-[30px] flex-shrink-0"/>
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
        <Html5 className="h-[30px] w-[30px]"/>
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
        <FramerMotionIcon className="h-[30px] w-[30px]"/>
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
        <NextJSIcon className="h-[30px] w-[30px]"/>
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
        <JavaIcon className="h-[30px] w-[30px]"/>
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
        <Python className="h-[30px] w-[30px]"/>
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
        <NodeJSIcon className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Node</span>
      </motion.a>,
      //npm
      <motion.a
        href="https://www.npmjs.com/"
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
        <NpmIcon className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">npm</span>
      </motion.a>,
      //c
      <motion.a
        href="https://www.learn-c.org/"
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
        <C className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">C</span>
      </motion.a>,
      //c++
      <motion.a
        href="https://isocpp.org/"
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
        <CPlusPlus className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">C++</span>
      </motion.a>,
      //c#
      <motion.a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/"
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
        <CSharp className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">C#</span>
      </motion.a>,
      //redis
      <motion.a
        href="https://redis.io/docs/latest/"
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
        <Redis className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Redis</span>
      </motion.a>,
    ],
    //tools
    tools: [
      //intellij
      <motion.a
        href="https://www.jetbrains.com/idea/"
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
        <Intellij className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Intellij</span>
      </motion.a>,
      //pycharm
      <motion.a
        href="https://www.jetbrains.com/pycharm/"
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
        <Pycharm className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Pycharm</span>
      </motion.a>,
      //arduino
      <motion.a
        href="https://www.arduino.cc/"
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
        <Arduino className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Arduino</span>
      </motion.a>,
      //rpi
      <motion.a
        href="https://www.raspberrypi.com/"
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
        <RaspPi className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Raspberry PI</span>
      </motion.a>,
      //vsCode
      <motion.a
        href="https://code.visualstudio.com/"
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
        <VSCodeIcon className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">VS Code</span>
      </motion.a>,
      //figma
      <motion.a
        href="https://www.figma.com/files/team/1490741904183703387/recents-and-sharing?fuid=1490741902089417471"
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
        <Figma className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Figma</span>
      </motion.a>,
      //vercel
      <motion.a
        href="https://vercel.com/daniel-kosukhins-projects"
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
        <VercelIcon className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Vercel</span>
      </motion.a>,
      //github
      <motion.a
        href="https://github.com"
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
        <Github className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Github</span>
      </motion.a>,
      //git
      <motion.a
        href="https://git-scm.com/"
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
        <Git className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Git</span>
      </motion.a>,
      <motion.a
        href="https://www.cursor.com/en"
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
        <CursorIcon className="h-[30px] w-[30px]"/>
        <span className="text-gradient font-bold">Cursor</span>
      </motion.a>,
    ],
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
      <ul
        className="w-max inline-flex gap-5 text-white text-[20px] whitespace-nowrap py-4 animate-[scroll_linear_infinite] will-change-transform scroll-hover"
        style={{
          animationDuration: `${tickerDuration}s`,
          animationDirection: tickerType === "backend" ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <li className="items-center flex gap-2 flex-shrink-0" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
