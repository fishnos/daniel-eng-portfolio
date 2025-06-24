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
          <div className="ml-8 xl:ml-0">
            <h1 className="font-extrabold text-glow-hover text-gradient text-[35px]">
              Hey, I'm Daniel (▰˘◡˘▰)
            </h1>
            <p className="mt-2 font-bold text-[25px] text-white">
              I am a passionate front-end developer 
              that specializes in mechatronics, located in NYC.
            </p>
          </div>
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
        className="h-auto w-full justify-center items-center flex flex-col xl:flex-row gap-2"
      >
        <span className="text-[40px] text-gradient text-glow-hover font-extrabold mt-10">
          My Languages
        </span>
        <Ticker tickerType={"languages"}/>
        <span className="text-[40px] text-gradient text-glow-hover font-extrabold mt-10">
          My Tools
        </span>
        <Ticker tickerType={"tools"} />
      </motion.h2>
    </div>
  );
}
