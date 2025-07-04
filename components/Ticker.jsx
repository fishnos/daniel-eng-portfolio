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
import TickerIcon from "../components/TickerIcon";
import { motion } from "framer-motion";

export default function Ticker({ tickerType, tickerDuration }) {
  const tickerTypes = {
    //frontend
    frontend: [
      <TickerIcon iconName={"/assets/icons/icons8-javascript.svg"} iconText="Javascript" link="https://www.javascript.com/"/>,
      <TickerIcon iconName={"/assets/icons/typescript.svg"} iconText="Typescript" link="https://www.typescriptlang.org/"/>,
      <TickerIcon iconName={"/assets/icons/react-2.svg"} iconText="React" link="https://react.dev/"/>,
      <TickerIcon iconName={"/assets/icons/tailwind-css-2.svg"} iconText="Tailwind CSS" link="https://tailwindcss.com/"/>,
      <TickerIcon iconName={"/assets/icons/css-3.svg"} iconText="CSS" link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>,
      <TickerIcon iconName={"/assets/icons/framer-motion.svg"} iconText="Framer Motion" link="https://motion.dev/"/>,
      <TickerIcon iconName={"/assets/icons/next-js.svg"} iconText="Next.js" link="https://nextjs.org/"/>,
    ],
    //backend
    backend: [
      <TickerIcon iconName={"/assets/icons/icons8-javascript.svg"} iconText="Javascript" link="https://www.javascript.com/"/>,
      <TickerIcon iconName={"/assets/icons/typescript.svg"} iconText="Typescript" link="https://www.typescriptlang.org/"/>,
      <TickerIcon iconName={"/assets/icons/react-2.svg"} iconText="React" link="https://react.dev/"/>,
      <TickerIcon iconName={"/assets/icons/tailwind-css-2.svg"} iconText="Tailwind CSS" link="https://tailwindcss.com/"/>,
      <TickerIcon iconName={"/assets/icons/css-3.svg"} iconText="CSS" link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>,
      <TickerIcon iconName={"/assets/icons/framer-motion.svg"} iconText="Framer Motion" link="https://motion.dev/"/>,
      <TickerIcon iconName={"/assets/icons/next-js.svg"} iconText="Next.js" link="https://nextjs.org/"/>,
    ],
    //tools
    tools: [
      <TickerIcon iconName={"/assets/icons/icons8-javascript.svg"} iconText="Javascript" link="https://www.javascript.com/"/>,
      <TickerIcon iconName={"/assets/icons/typescript.svg"} iconText="Typescript" link="https://www.typescriptlang.org/"/>,
      <TickerIcon iconName={"/assets/icons/react-2.svg"} iconText="React" link="https://react.dev/"/>,
      <TickerIcon iconName={"/assets/icons/tailwind-css-2.svg"} iconText="Tailwind CSS" link="https://tailwindcss.com/"/>,
      <TickerIcon iconName={"/assets/icons/css-3.svg"} iconText="CSS" link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>,
      <TickerIcon iconName={"/assets/icons/framer-motion.svg"} iconText="Framer Motion" link="https://motion.dev/"/>,
      <TickerIcon iconName={"/assets/icons/next-js.svg"} iconText="Next.js" link="https://nextjs.org/"/>,
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
        className="w-max inline-flex gap-5 text-secondary text-[20px] whitespace-nowrap py-4 animate-[scroll_linear_infinite] will-change-transform scroll-hover"
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
