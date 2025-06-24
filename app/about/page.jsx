"use client";

import React from "react";
import idPhoto from "../../public/assets/profile/id-photo.png"
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
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
          <span className="font-extrabold text-glow-hover text-gradient text-[35px]">
            Hey, I'm Daniel
          </span>
          <p className="mt-2 font-bold text-[25px] text-white">
            I am a passionate front-end developer 
            that specializes in mechatronics, located in NYC.
          </p>
        </div>
      </motion.div>
      <motion.div>

      </motion.div>
    </div>
  );
}
