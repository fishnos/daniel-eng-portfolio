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
import Image from "next/image";
import { motion } from "framer-motion";

export default function TickerIcon({ iconName, iconText, link }) {
    return (
        <motion.a
            href={link}
            className="flex flex-row justify-center items-center gap-2 py-2 px-4 border border-secondary/15 rounded-2xl w-auto h-auto bg-secondary/0 text-secondary"
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
            <Image 
                width={25} 
                height={25} 
                src={iconName}
                alt={iconText}
            />
            <span className="text-gradient font-bold">{iconText}</span>
        </motion.a>
    );
}