"use client";

import React, { useState } from "react";
import Image from "next/image";
import dronePhoto from "../../public/assets/images/drone-photo.jpg"
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion, useScroll } from "framer-motion";

export default function Projects() {
  const [isOpenPDCS, setIsOpenPDCS] = useState();
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
      {/*TODO: add a reusable component?*/}
      <motion.div
        className="w-full py-4 px-8 bg-white/10 border border-white/15 rounded-2xl backdrop-blur-xs gap-3 justify-center items-start"
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
        <h2 className="w-full flex flex-col justify-center items-start font-extrabold text-[30px] text-gradient">
          Photographical Drone Computing System
          <span className="opacity-60 text-white text-[20px] italic">(Starting Sept. 2025)</span>
        </h2>
        <div>
          <Image
            className="relative w-[100%] h-auto mt-5 border border-white/15 border-[5px] rounded-2xl"
            src={dronePhoto}
            alt="drone-photo"
          />
        </div>
        <AnimatePresence initial={false}>
          {isOpenPDCS && (
            <motion.div
              key="PDCS-compartment"
              initial={{height: 0, opacity: 0}}
              animate={{height: "auto", opacity: 1}}
              exit={{height: 0, opacity: 0}}
              transition={{ease: "easeInOut", duration: 0.4,}}
              className="overflow-hidden mt-4 flex w-full justify-center items-center"
            >
              <div className="grid grid-row-2">
                <h3 className="text-gradient text-[30px] font-bold">
                  Goals
                </h3>
                <h3 className="text-gradient text-[30px] font-bold">
                  Goals
                </h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsOpenPDCS(!isOpenPDCS)}
          className="w-full flex justify-center items-center"
        >
          <motion.div 
            className="flex justify-center items-center mt-5"
            animate={{rotate: isOpenPDCS ? 0 : 180}}
            transition={{ease: "easeInOut", duration: 0.2, delay: 0.05}}
          >
            <IoIosArrowUp size={30} color="white" />
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
}
