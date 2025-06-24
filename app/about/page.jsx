"use client";

import React from "react";
import idPhoto from "../../public/assets/profile/id-photo.png"
import Ticker from "../../components/Ticker"
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="gap-10">
      <div className="px-20 py-8 flex flex-col w-full h-auto bg-white/10 backdrop-blur-xs justify-start items-center mt-35 border border-white/15 rounded-2xl">
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
          className="h-auto w-full flex flex-col xl:flex-row gap-10"
        >
          <Image
            src={idPhoto}
            alt="daniel-photo"
            width={250}
            height={250}
            className="border border-white/15 border-[4px] rounded-full"
          />
          <motion.div 
            className="ml-8 xl:ml-0"
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
          My Languages
        </span>
        <motion.div
          className="w-full flex flex-col gap-1 justify-center items-center bg-white/10 border border-white/15 rounded-2xl backdrop-blur-xs py-2"
        >
          {/*frontend*/}
          <h3 className="mt-2 text-glow font-bold text-[22px]">
            Front-end Experience
          </h3>
          <p className="relative w-[80%] flex justify-center items-center font-semibold text-[14px]">
            Using multitude of languages in my toolkit, I develop captivating and engaging designs
            focused on user-friendliness.
          </p>
          <hr className="relative w-[95%] border border-white/20 opacity-50 mt-5"/>
          <Ticker tickerType={"frontend"}/>
          <hr className="relative w-[95%] border border-white/20 opacity-50"/>
          {/*backend*/}
          {/* <hr className="relative w-[95%] border border-white/20 opacity-50"/>
          <h3 className="mt-2 text-glow font-bold text-[22px]">
            Back-end Experience
          </h3>
          <p className="relative w-[80%] flex justify-center items-center">
            Put this section here when you can actually code in backend...
          </p>
          <Ticker tickerType={"backend"}/> */}
        </motion.div>
        <span className="text-[40px] text-gradient text-glow-hover font-extrabold mt-10">
          My Tools
        </span>
        <Ticker tickerType={"tools"}/>
      </motion.h2>
    </div>
  );
}
