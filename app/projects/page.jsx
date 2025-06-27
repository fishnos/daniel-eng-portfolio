"use client";

import React from "react";
import Image from "next/image";
import dronePhoto from "../../public/assets/images/drone-photo.jpg"
import { motion, useScroll } from "framer-motion";

export default function Projects() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <motion.h1
        className="text-[50px] text-gradient mt-30 font-extrabold"
        initial={{opacity: 0, y: 50}}
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
      >
        My Projects
      </motion.h1>
      <motion.div
        className="w-full py-4 px-8 bg-white/10 border border-white/15 rounded-2xl backdrop-blur-xs gap-3"
        initial={{opacity: 0, y: 50}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.4,
            ease: "circInOut",
          }
        }}
        viewport={{once: true}}
      >
        <h2 className="font-extrabold text-[30px] text-gradient">
          PACS
        </h2>
        <motion.div
          className=""
          initial={{opacity: 1}}
          
        >
          <Image
            className="relative w-[100%] h-auto mt-5 border border-white/15 border-[5px] rounded-2xl"
            src={dronePhoto}
            alt="drone-photo"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
