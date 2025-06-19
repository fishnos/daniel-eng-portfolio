"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const handleClickEvent = (e) => {
    e.preventDefault();
    window.open(
      "https://www.linkedin.com/in/daniel-kosukhin-82052634b/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="h-screen">
        {/*name card*/}
        <AnimatePresence mode="sync">
          <motion.div 
            initial={{opacity: 0, y: 75}}
            whileInView={{
              opacity: 1, 
              y: 0,
              transition: {
                delay: 1.7,
                duration: 0.55,
                ease: "circInOut",
              },
            }}
            viewport={{ once: true }}
            className="flex flex-col w-full items-center xl:flex-row"
          >
            <div className="min-h-screen flex items-start mt-20 justify-center relative w-full overflow-hidden">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-10 w-full text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
                  Hello, I'm{" "}
                  <span className="text-gradient text-glow-hover">Daniel Kosukhin</span>
                </h1>
                <div className="h-[30px] overflow-hidden">
                  <TypeAnimation
                    sequence={[
                      "Front-End Developer",
                      2000,
                      "Robotics Engineer",
                      2000,
                      "Problem-Solver",
                      2000,
                    ]}
                    className="text-xl text-gray-200 mb-4 whitespace-nowrap"
                    wrapper="span"
                    speed={40}
                    repeat={Infinity}
                    cursor={false}
                  />
                </div>
                <p className="text-gray-300 mb-4 mt-2">
                  I specialize in creating technology that solves problems with
                  optimality and practicality.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="/projects"
                    className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md font-medium transition"
                  >
                    View My Work →
                  </a>
                  <a
                    onClick={handleClickEvent}
                    className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md font-medium transition"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 hidden xl:flex relative z-20"></div>
          </motion.div>
        </AnimatePresence>
        {/*projects display*/}
        <motion.h1
          initial={{opacity: 0, y: 75}}
          whileInView={{
            opacity: 1, 
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.55,
              ease: "circInOut",
            },
          }}
          viewport={{ once: true }}
          className="flex justify-start h-full w-full z-30"
        >
          Projects
        </motion.h1>
      </div>
    </>
  );
}
