"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.7,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="h-screen"
    >
      <div className="flex flex-col w-full items-center xl:flex-row">
        {/*name card*/}
        <div className="min-h-screen flex items-center justify-center relative w-full">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-10 w-full text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
              Hello, I'm{" "}
              <span className="text-gradient text-glow-hover">Daniel Kosukhin</span>
            </h1>
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                2000,
                "Robotics Engineer",
                2000,
                "Problem-Solver",
                2000,
              ]}
              className="text-xl text-gray-200 mb-4"
              wrapper="span"
              speed={40}
              repeat={Infinity}
              cursor={false}
            />
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
        {/*projects display*/}
        <motion.section
          initial={{}}
          className=""
        >
          
        </motion.section>
      </div>
    </motion.section>
  );
}
