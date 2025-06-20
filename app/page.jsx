"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import SocialButton from "../components/SocialButton"
import { FaLinkedin, FaGithub, FaGoogle, FaDiscord } from "react-icons/fa";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const handleLinkedInClickEvent = (e) => {
    e.preventDefault();
    window.open(
      "https://www.linkedin.com/in/daniel-kosukhin-82052634b/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleGithubClickedEvent = (e) => {
    e.preventDefault();
    window.open(
      "https://github.com/fishnos?tab=overview&from=2025-06-01&to=2025-06-15",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="h-screen">
        {/*name card*/}
        <AnimatePresence 
          mode="sync"
        >
          <motion.div
            key="name-card" 
            initial={{opacity: 0, y: 75}}
            whileInView={{
              opacity: 1, 
              y: 0,
              transition: {
                delay: 0.1,
                duration: 0.45,
                ease: "circInOut",
              },
            }}
            exit={{opacity: 0}}
            viewport={{ once: true }}
            className="flex flex-col w-full items-center xl:flex-row"
          >
            <div className="flex items-start mt-30 justify-center relative w-full overflow-hidden">
              <div className="bg-white/10 backdrop-blur-xs border border-white/20 shadow-xl rounded-2xl p-10 w-full text-center">
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
                    onClick={handleLinkedInClickEvent}
                    className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md font-medium transition flex items-center gap-2"
                  >
                    Get In Touch
                    <FaLinkedin size={20} color="white" className="ml-1"/>
                  </a>
                </div>
                <div className="w-full h-[1px] border border-white/15 justify-start justify-center mt-5" />
                <section className="mt-7 ml-4 bg-transparent">
                  <div className="flex gap-10 w-full md:justify-start items-center justify-center">
                    <SocialButton iconName="Github"/>
                    <SocialButton iconName="Google"/>
                    <SocialButton iconName="Discord"/>
                  </div>
                </section>
              </div>
            </div>
            <div className="flex-1 hidden xl:flex relative z-20"></div>
          </motion.div>
          {/*projects display*/}
          <section className="mt-5 flex justify-start w-full z-30">
            <motion.h1
              key="projects"
              initial={{opacity: 0, y: 75}}
              whileInView={{
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.55,
                  ease: "circInOut",
                },
              }}
              exit={{opacity: 0}}
              viewport={{ once: true }}
              className="font-extrabold text-[45px]"
            >
              Projects
            </motion.h1>
          </section>
        </AnimatePresence>
      </div>
    </>
  );
}
