"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import SocialButton from "../components/SocialButton";
import { FaLinkedin, FaPhone, FaArrowRight } from "react-icons/fa";
import { TbAlphabetKorean } from "react-icons/tb";
import { MdOutlineQrCode2 } from "react-icons/md";
import { TbDrone } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [isHoveredDrone, setIsHoveredDrone] = useState(false);
  const [isHoveredQR, setIsHoveredQR] = useState(false);
  const [isHoveredEHYG, setIsHoveredEHYG] = useState(false);
  const [isHoveredPhone, setIsHoveredPhone] = useState(false);
  const [isHoveredAboutMe, setIsHoveredAboutMe] = useState(false);
  const [isHoveredGIT, setIsHoveredGIT] = useState(false);

  const handleLinkedInClickEvent = (e) => {
    e.preventDefault();
    window.open(
      "https://www.linkedin.com/in/daniel-kosukhin-82052634b/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="min-h-screen">
        {/*name card*/}
        <AnimatePresence mode="sync">
          <motion.div
            key="name-card"
            initial={{ opacity: 0, y: 75 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.1,
                duration: 0.45,
                ease: "circInOut",
              },
            }}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            className="flex flex-col w-full items-center xl:flex-row"
          >
            <div className="flex items-start mt-30 justify-center relative w-full overflow-hidden">
              <div className="bg-secondary/10 backdrop-blur-xs border border-secondary/20 shadow-xl rounded-2xl p-10 w-full text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
                  Hello, I'm{" "}
                  <span className="text-gradient text-glow-hover">
                    Daniel Kosukhin
                  </span>
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
                    cursor={true}
                  />
                </div>
                <p className="text-gray-300 mb-4 mt-2">
                  I specialize in creating technology that solves problems with
                  optimality and practicality.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {/*TODO: stylize these buttons and fix the small screen overlap bug*/}
                  <motion.a
                    onClick={handleLinkedInClickEvent}
                    onHoverStart={() => setIsHoveredAboutMe(true)}
                    onHoverEnd={() => setIsHoveredAboutMe(false)}
                    initial={{
                      borderColor: "var(--color-quaternary)"
                    }}
                    animate={{
                      borderColor: isHoveredAboutMe ? "var(--color-quaternary-hover)" : "var(--color-quaternary)"
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut"
                    }}
                    className="w-auto px-6 py-2 bg-transparent border backdrop-blur-xs text-secondary rounded-md font-medium transition flex items-center gap-2"
                  >
                    About me
                    <motion.div
                      initial={{x: 0}}
                      animate={{
                        x: isHoveredAboutMe ? 5 : 0
                      }}
                      transition={{
                        delay: 0.1,
                        duration: 0.3,
                        ease: "circInOut"
                      }}
                    >
                      <FaArrowRight size={15} color="var(--color-secondary)" className="ml-1" />
                    </motion.div>
                  </motion.a>
                  <motion.a
                    onClick={handleLinkedInClickEvent}
                    onHoverStart={() => setIsHoveredGIT(true)}
                    onHoverEnd={() => setIsHoveredGIT(false)}
                    initial={{
                      borderColor: "var(--color-quaternary)"
                    }}
                    animate={{
                      borderColor: isHoveredGIT ? "var(--color-quaternary-hover)" : "var(--color-quaternary)"
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut"
                    }}
                    className="w-auto px-6 py-2 bg-transparent border backdrop-blur-xs text-secondary rounded-md font-medium transition flex items-center gap-2"
                  >
                    Get In Touch
                    <motion.div
                      initial={{x: 0}}
                      animate={{
                        x: isHoveredGIT ? 5 : 0
                      }}
                      transition={{
                        delay: 0.1,
                        duration: 0.3,
                        ease: "circInOut"
                      }}
                    >
                      <FaLinkedin size={20} color="var(--color-secondary)" className="ml-1" />
                    </motion.div>
                  </motion.a>
                </div>
                <div className="w-full h-[1px] border border-secondary/15 justify-start justify-center mt-5" />
                <section className="mt-7 ml-4 bg-transparent">
                  <div className="flex gap-10 w-full md:justify-start items-center justify-center">
                    <SocialButton iconName="Github" />
                    <SocialButton iconName="Google" />
                    <SocialButton iconName="Discord" />
                  </div>
                </section>
              </div>
            </div>
            <div className="flex-1 hidden xl:flex relative z-20"></div>
          </motion.div>
          {/*projects display*/}
          <section className="mt-5 flex flex-col justify-start w-full z-30">
            <motion.h2
              key="projects"
              initial={{ opacity: 0, y: 75 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.55,
                  ease: "circInOut",
                },
              }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              className="font-extrabold text-[50px] mt-10 text-glow"
            >
              Projects
              <motion.div
                className="bg-secondary/10 relative flex flex-col justify-center items-start w-full h-auto py-4 border border-secondary/20 rounded-2xl backdrop-blur-xs z-10 gap-5"
                initial={{ opacity: 0, y: 75 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.55,
                    ease: "circInOut",
                  },
                }}
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
              >
                {/*PDCS*/}
                <motion.a
                  href="/projects#pdcs-projects"
                  onHoverStart={() => setIsHoveredDrone(true)}
                  onHoverEnd={() => setIsHoveredDrone(false)}
                  initial={{ width: "60px" }}
                  whileHover={{
                    width: "100%",
                    boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  className="ml-8 mr-8 max-w-[calc(100%-4rem)] z-50 border border-secondary/15 rounded-full h-[60px] flex items-center bg-secondary/15 overflow-hidden cursor-pointer no-underline"
                >
                  <motion.div className="flex items-center justify-center w-[60px] h-[60px]">
                    <TbDrone color="gray" size="40px" />
                  </motion.div>
                  {isHoveredDrone && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isHoveredDrone ? 1 : 0,
                        x: isHoveredDrone ? 0 : -10,
                        transition: {
                          duration: 0.3,
                          delay: 0.2,
                          ease: "easeInOut",
                        },
                      }}
                      className="ml-2 text-glow text-gradient font-extrabold text-[20px]"
                    >
                      PDCS
                    </motion.span>
                  )}
                </motion.a>
                {/*wpilib*/}
                <motion.a
                  href="/projects#wpilib-automation"
                  onHoverStart={() => setIsHoveredQR(true)}
                  onHoverEnd={() => setIsHoveredQR(false)}
                  initial={{ width: "60px" }}
                  whileHover={{
                    width: "100%",
                    boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  className="ml-8 mr-8 max-w-[calc(100%-4rem)] z-50 border border-secondary/15 rounded-full h-[60px] flex items-center justify-end bg-secondary/15 overflow-hidden"
                >
                  {isHoveredQR && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isHoveredQR ? 1 : 0,
                        x: isHoveredQR ? 0 : -10,
                        transition: {
                          duration: 0.3,
                          delay: 0.2,
                          ease: "easeInOut",
                        },
                      }}
                      className="ml-2 text-glow text-gradient font-extrabold text-[20px]"
                    >
                      WPILib Automation
                    </motion.span>
                  )}
                  <motion.div
                    href="/projects"
                    className="flex items-center justify-center w-[60px] h-[60px]"
                  >
                    <MdOutlineQrCode2
                      color="gray"
                      size="40px"
                      className="w-[60px]"
                    />
                  </motion.div>
                </motion.a>
                {/*EHYG Website*/}
                <motion.a
                  href="/projects#ehyg-web"
                  onHoverStart={() => setIsHoveredEHYG(true)}
                  onHoverEnd={() => setIsHoveredEHYG(false)}
                  initial={{ width: "60px" }}
                  whileHover={{
                    width: "100%",
                    boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  className="ml-8 mr-8 max-w-[calc(100%-4rem)] z-50 border border-secondary/15 rounded-full h-[60px] flex items-center bg-secondary/15 overflow-hidden cursor-pointer no-underline"
                >
                  <motion.div className="flex items-center justify-center w-[60px] h-[60px]">
                    <TbAlphabetKorean color="gray" size="40px" />
                  </motion.div>
                  {isHoveredEHYG && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isHoveredEHYG ? 1 : 0,
                        x: isHoveredEHYG ? 0 : -10,
                        transition: {
                          duration: 0.3,
                          delay: 0.2,
                          ease: "easeInOut",
                        },
                      }}
                      className="ml-2 text-glow text-gradient font-extrabold text-[20px]"
                    >
                      Eunhae Youth Group Website
                    </motion.span>
                  )}
                </motion.a>
              </motion.div>
            </motion.h2>
          </section>
          {/*contact*/}
          <section
            className="mt-5 flex flex-col justify-start w-full z-30"
            key="contacts"
          >
            <motion.h2
              key="contacts"
              initial={{ opacity: 0, y: 75 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1,
                  duration: 0.45,
                  ease: "circInOut",
                },
              }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              className="font-extrabold text-[50px] mt-10 text-glow"
            >
              Contact Me
              {/*buttons*/}
              <motion.div
                className="bg-secondary/10 relative flex flex-row justify-end items-start w-full h-auto py-4 border border-secondary/20 rounded-2xl backdrop-blur-xs z-10 gap-5"
                initial={{ opacity: 0, y: 75 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1,
                    duration: 0.45,
                    ease: "circInOut",
                  },
                }}
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative flex flex-row justify-end items-center w-full mr-8 gap-10 z-30">
                  <AnimatePresence>
                    {isHoveredPhone && (
                      <motion.span
                        key="hover-text"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="left-8 absolute justify-start right-14 text-glow text-gradient font-extrabold text-[25px] z-40"
                      >
                        Go to contacts →
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <motion.div
                    className="flex items-center justify-center h-[50px] w-[50px] border border-secondary/15 rounded-xl border-[3px]"
                    onHoverStart={() => setIsHoveredPhone(true)}
                    onHoverEnd={() => setIsHoveredPhone(false)}
                    initial={{ scale: 1 }}
                    whileHover={{
                      boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                        ease: "easeOut",
                      },
                    }}
                  >
                    <a href="/contact">
                      <FaPhone color="gray" size={30} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.h2>
          </section>
        </AnimatePresence>
      </div>
    </>
  );
}