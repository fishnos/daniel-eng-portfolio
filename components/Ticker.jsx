import React from "react";
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
      <TickerIcon iconName={"/assets/icons/java.svg"} iconText="Java" link="https://www.java.com/en/"/>,
      <TickerIcon iconName={"/assets/icons/python.svg"} iconText="Python" link="https://www.python.org/"/>,
      <TickerIcon iconName={"/assets/icons/nodejs-3.svg"} iconText="Node" link="https://nodejs.org/en"/>,
      <TickerIcon iconName={"/assets/icons/npm.svg"} iconText="npm" link="https://www.npmjs.com/"/>,
      <TickerIcon iconName={"/assets/icons/c.svg"} iconText="C" link="https://www.learn-c.org/"/>,
      <TickerIcon iconName={"/assets/icons/c++.svg"} iconText="C++" link="https://isocpp.org/"/>,
      <TickerIcon iconName={"/assets/icons/c-sharp.svg"} iconText="C#" link="https://learn.microsoft.com/en-us/dotnet/csharp/"/>,
      <TickerIcon iconName={"/assets/icons/redis.svg"} iconText="Redis" link="https://redis.io/docs/latest/"/>,
    ],
    //tools
    tools: [
      <TickerIcon iconName={"/assets/icons/intellij.svg"} iconText="Intellij" link="https://www.jetbrains.com/idea/"/>,
      <TickerIcon iconName={"/assets/icons/pycharm.svg"} iconText="Pycharm" link="https://www.jetbrains.com/pycharm/"/>,
      <TickerIcon iconName={"/assets/icons/arduino.svg"} iconText="Arduino" link="https://www.arduino.cc/"/>,
      <TickerIcon iconName={"/assets/icons/raspberry-pi.svg"} iconText="Raspberry Pi" link="https://www.raspberrypi.com/"/>,
      <TickerIcon iconName={"/assets/icons/vs-code.svg"} iconText="VS Code" link="https://code.visualstudio.com/"/>,
      <TickerIcon iconName={"/assets/icons/figma.svg"} iconText="Figma" link="https://www.figma.com"/>,
      <TickerIcon iconName={"/assets/icons/vercel.svg"} iconText="Vercel" link="https://vercel.com"/>,
      <TickerIcon iconName={"/assets/icons/github.svg"} iconText="Github" link="https://github.com"/>,
      <TickerIcon iconName={"/assets/icons/git.svg"} iconText="Git" link="https://git-scm.com/"/>,
      <TickerIcon iconName={"/assets/icons/cursor.svg"} iconText="Cursor" link="https://www.cursor.com/en"/>,
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
