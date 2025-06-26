"use client";

import React from "react";
import idPhoto from "../../public/assets/profile/id-photo.png"
import Ticker from "../../components/Ticker"
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="gap-10">
      <div className="px-10 py-8 flex flex-col w-full h-auto bg-white/10 backdrop-blur-xs justify-center mt-35 border border-white/15 rounded-2xl">
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
          className="h-auto w-full justify-center items-center flex flex-col md:flex-row gap-10"
        >
          <Image
            src={idPhoto}
            alt="daniel-photo"
            width={250}
            height={250}
            className="border border-white/15 border-[4px] rounded-full"
          />
          <motion.div 
            className="w-full ml-4 md:ml-0"
            initial={{opacity: 0, y: 75}}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.25,
                duration: 0.4,
                ease: "circInOut",
              }
            }}
            viewport={{once: true}}
          >
            <h1 className="font-extrabold text-glow-hover text-gradient text-[35px]">
              Hey, I'm Daniel (▰˘◡˘▰)
            </h1>
            <p className="mt-2 font-bold text-[25px] text-white">
              I am a passionate front-end developer 
              that specializes in mechatronics, located in NY.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <motion.h2
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
        className="h-auto w-full justify-center items-center flex flex-col gap-2"
      >
        <span className="text-[40px] text-gradient text-glow-hover font-extrabold mt-10">
          My Skills
        </span>
        <motion.div
          className="w-full flex flex-col gap-1 justify-center items-center bg-white/10 border border-white/15 rounded-2xl backdrop-blur-xs py-2"
        >
          {/*frontend*/}
          <h3 className="mt-5 text-glow font-bold text-[22px]">
            Front-end Experience
          </h3>
          <p className="relative w-[80%] flex justify-center items-center font-semibold text-[14px]">
            Using multitude of languages in my toolkit, I develop captivating and engaging designs
            focused on user-friendliness.
          </p>
          <hr className="relative w-[75%] border border-white/20 opacity-50 mt-5"/>
          <Ticker tickerType={"frontend"} tickerDuration={"20"}/>
          <hr className="relative w-[75%] border border-white/20 opacity-50"/>
          {/*backend*/}
          <h3 className="mt-8 text-glow font-bold text-[22px]">
            Back-end Experience
          </h3>
          <p className="relative w-[80%] flex justify-center items-center font-semibold text-[14px]">
            I have recently began to dive into backend to find innovative alternatives, 
            such as my contacts page!
          </p>
          <hr className="relative w-[75%] border border-white/20 opacity-50 mt-5"/>
          <Ticker tickerType={"backend"} tickerDuration={"14"}/>
          <hr className="relative w-[75%] border border-white/20 opacity-50"/>
          {/*tools*/}
          <h3 className="mt-8 text-glow font-bold text-[22px]">
            Tools
          </h3>
          <p className="relative w-[80%] flex justify-center items-center font-semibold text-[14px]">
            I use cutting-edge tools to match an abundant amount of expertise in full-stack development.
          </p>
          <hr className="relative w-[75%] border border-white/20 opacity-50 mt-5"/>
          <Ticker tickerType={"tools"} tickerDuration={"14"}/>
          <hr className="relative w-[75%] border border-white/20 opacity-50 mb-3"/>
        </motion.div>
      </motion.h2>
      <motion.h2
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
        className="h-auto w-full justify-center items-center flex flex-col gap-2"
      >
        <span className="text-[40px] text-gradient text-glow-hover font-extrabold mt-10">
          My Expertise
        </span>
        <motion.div
          className="w-full flex flex-col px-4 py-4 gap-1 justify-center items-start bg-white/10 border border-white/15 rounded-2xl backdrop-blur-xs py-2"
        >
          <h4 className="font-bold text-[25px] text-glow">
            Programming Lead, 2638
          </h4>
          <ul className="w-full flex flex-col gap-1 justify-center items-center list-disc list-outside pl-4">
            <li>
              Program in <span className="text-glow-hover text-gradient">Java</span> and <span className="text-glow-hover text-gradient">WPILib</span> to develop various path-planning systems 
            </li>
            <li>
              Spearheaded the integration of <span className="text-glow-hover text-gradient">Choreo</span> and <span className="text-glow-hover text-gradient">Pathplanner</span> to draw out autonomous pathways
            </li>
            <li>
              Orchestrated the <span className="text-glow-hover text-gradient">electrical wiring</span> and <span className="text-glow-hover text-gradient">programming</span> of our off-season robot
            </li>
          </ul>
        </motion.div>
      </motion.h2>
    </div>
  );
}
