"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextInput from "../../components/TextInput"

export default function Contact() {
  return (
    <AnimatePresence>
      <div className="w-[600px] mx-auto min-h-screen flex flex-col justify-start overflow-hidden gap-10">
        <div
          className="flex flex-col h-auto w-[60vw] flex items-start justify-center relative w-full z-20 mt-30 
            bg-white/15 backdrop-blur-xs border border-white/15 rounded-2xl py-6"
        >
          <motion.h1 
            className="flex relative text-glow-hover text-gradient font-extrabold text-[35px] w-full justify-center"
            initial={{opacity: 0, x: -75}}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.1,
                duration: 0.4,
                ease: "circInOut",
              },
            }}
            viewport={{once: true}}
          >
            Contact me:
          </motion.h1>
          <div className="flex flex-col w-full gap-5">
            <TextInput label="First Name" placeholder="First Name" id="firstname" />
            <TextInput label="Last Name" placeholder="Last Name" id="lastname" />
            <TextInput label="Email" placeholder="youremail@gmail.com" id="gmail" />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
