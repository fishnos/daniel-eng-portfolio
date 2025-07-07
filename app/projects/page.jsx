"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import dronePhoto from "../../public/assets/images/pdcs/drone-photo.jpg";
import ehygPhoto from "../../public/assets/images/ehyg/ehyg-initial.png";
import { isAndroid, isIOS, isMobile } from "react-device-detect";
import { IoIosArrowUp } from "react-icons/io";
import { LuConstruction } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import InfoText from "../../components/InfoText";

export default function Projects() {
  const [isOpenPDCS, setIsOpenPDCS] = useState();
  const [isOpenWPILib, setIsOpenWPILib] = useState();
  const [isOpenEHYG, setIsOpenEHYG] = useState();
  const [active, setActive] = useState("Automation");

  const tickerWords = [
    "Coming soon!",
    "Coming soon!",
    "Coming soon!",
    "Coming soon!",
    "Coming soon!",
    "Coming soon!",
    "Coming soon!",
    "Coming soon!",
    "Coming soon!",
    "Coming soon!",
    "Coming soon!",
  ];

  const tabs = ["Automation", "Choreo", "PathPlanner", "Limelight"];
  const info = {
    Automation: <InfoText infoTextName={"Automation"}/>,
    Choreo: <InfoText infoTextName={"Choreo"}/>,
    PathPlanner: <InfoText infoTextName={"PathPlanner"}/>,
    Limelight: <InfoText infoTextName={"Limelight"}/>,
  };

  const pdcsTags = ["AI", "LiDAR", "Cinematography"];
  const ehygTags = ["Community", "Front-end", "Volunteering"];
  const wpilibTags = ["Vision", "Pathplanning", "PID", "Java"];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <motion.h1
        className="text-[50px] text-gradient mt-30 font-extrabold text-glow-hover"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1,
            duration: 0.4,
            ease: "circInOut",
          },
        }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h1>
      {/*wpilib*/}
      <motion.div
        className="w-full py-4 px-8 bg-secondary/10 border border-secondary/15 rounded-2xl backdrop-blur-xs gap-3 justify-center items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.4,
            ease: "circInOut",
          },
        }}
        viewport={{ once: true }}
        id="wpilib-automation"
      >
        <h2
          className={`w-full flex flex-col justify-center ${
            (isIOS || isAndroid) || isMobile ? `items-center` : `items-start`
          }`}
        >
          <span className="font-extrabold text-[30px] text-gradient text-glow-hover">
            WPILib Automation
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {wpilibTags.map((tag, index) => (
              <div
                className="w-auto px-3 py-1 bg-transparent border border-secondary/15 backdrop-blur-xs text-secondary rounded-md font-medium transition flex items-center justify-center text-[12px] sm:text-[15px] mt-2 mb-2"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
          <span className="opacity-60 text-secondary text-[20px] font-bold italic">
            (Nov. 2024-PRESENT)
          </span>
        </h2>
        <button
          onClick={() => setIsOpenWPILib(!isOpenWPILib)}
          className="w-full flex justify-center items-center"
        >
          <motion.div
            className="flex justify-center items-center mt-5"
            animate={{ rotate: isOpenWPILib ? 180 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.25, delay: 0.025 }}
          >
            <IoIosArrowUp size={30} color="var(--color-secondary)" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpenWPILib && (
            <motion.div
              key="wpilib-automation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.25 }}
              className="overflow-hidden mt-4 flex w-full justify-center items-center"
            >
              <div className="flex flex-col justify-center items-start w-full gap-5">
                <div className="w-full">
                  <h3 className="text-gradient text-[30px] font-bold left- mb-3">
                    Game Plan
                  </h3>
                  <div className="w-full flex flex-col gap-5 sm:flex-row sm:gap-0">
                    <div className="w-full flex justify-center">
                      <motion.div
                        className="relative w-[90%] border border-secondary/10 border-[2px] rounded-2xl p-2"
                        initial={{ borderColor: "var(--color-quaternary)" }}
                        whileHover={{
                          borderColor: "var(--color-quaternary-hover)",
                          transition: {
                            delay: 0.05,
                            duration: 0.25,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        <h4 className="opacity-60 italic underline text-[18px] font-bold">
                          Issues
                        </h4>
                        <p className="font-semibold">
                          Throughout{" "}
                          <span className="text-gradient font-bold">
                            First Robotics
                          </span>
                          , precision is key for{" "}
                          <span className="text-gradient font-bold">
                            optimal
                          </span>{" "}
                          scoring and{" "}
                          <span className="text-gradient font-bold">
                            efficiency
                          </span>
                          . Drawing a{" "}
                          <span className="text-gradient font-bold">
                            mental path
                          </span>{" "}
                          on the robot field that prioritizes{" "}
                          <span className="text-gradient font-bold">
                            performance
                          </span>{" "}
                          takes years of practice, and a{" "}
                          <span className="text-gradient font-bold">
                            limited
                          </span>{" "}
                          number of drivers can do so.
                        </p>
                      </motion.div>
                    </div>
                    <div className="w-full flex justify-center">
                      <motion.div
                        className="relative w-[90%] border border-secondary/10 border-[2px] rounded-2xl p-2"
                        initial={{ borderColor: "var(--color-quaternary)" }}
                        whileHover={{
                          borderColor: "var(--color-quaternary-hover)",
                          transition: {
                            delay: 0.05,
                            duration: 0.25,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        <h4 className="opacity-60 italic underline text-[18px] font-bold">
                          Solutions
                        </h4>
                        <p className="font-semibold">
                          To bridge the{" "}
                          <span className="text-gradient font-bold">
                            skill gap
                          </span>
                          , I created an{" "}
                          <span className="text-gradient font-bold">
                            algorithm
                          </span>{" "}
                          that uses{" "}
                          <span className="text-gradient font-bold">PID</span>{" "}
                          controllers and{" "}
                          <span className="text-gradient font-bold">
                            trigonometry
                          </span>{" "}
                          to{" "}
                          <span className="text-gradient font-bold">
                            navigate
                          </span>{" "}
                          the field and reduce{" "}
                          <span className="text-gradient font-bold">
                            driver error
                          </span>
                          . The algorithm waits on{" "}
                          <span className="text-gradient font-bold">
                            user-based
                          </span>{" "}
                          input for{" "}
                          <span className="text-gradient font-bold">
                            pose-based
                          </span>{" "}
                          pathplanning. For{" "}
                          <span className="text-gradient font-bold">
                            drift reduction
                          </span>
                          , our team used a{" "}
                          <span className="text-gradient font-bold">
                            Limelight
                          </span>{" "}
                          and created a{" "}
                          <span className="text-gradient font-bold">
                            pipeline latency
                          </span>{" "}
                          reduction system.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-gradient text-[30px] font-bold left-0">
                    <span className="">Process</span>
                  </h3>
                  <div className="p-4 rounded-xl border border-white/20 w-full mx-auto">
                    <div className="flex gap-8 relative">
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActive(tab)}
                          className={`relative z-10 text-sm font-mono transition-colors duration-300 p-1 ${
                            active === tab ? "text-tertiary font-bold" : "text-secondary/70 font-semibold text-glow-hover"
                          }`}
                        >
                          {tab}
                          {active === tab && (
                            <motion.div
                              layoutId="tab-slider"
                              className="absolute left-0 top-0 h-full w-full rounded-md border border-tertiary"
                              transition={{ type: "spring", stiffness: 400, damping: 50 }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className="relative w-full border border-secondary/10 border-[2px] rounded-2xl py-2 px-3 mt-6"
                    initial={{ borderColor: "var(--color-quaternary)" }}
                    whileHover={{
                      borderColor: "var(--color-quaternary-hover)",
                      transition: {
                        delay: 0.05,
                        duration: 0.25,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{opacity: 0, x: 15}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -3}}
                        transition={{delay: 0.02, duration: 0.4, ease: "easeInOut"}}
                      >
                        {info[active]}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>
                <div className="w-full">
                  <h3 className="text-gradient text-[30px] font-bold left-0">
                    <span className="">Results</span>
                    <hr className="w-full border border-secondary/20 opacity-50 mt-4" />
                    <ul
                      className={`w-max inline-flex gap-5 text-secondary text-[20px] whitespace-nowrap py-4 animate-[scroll-footer_18s_linear_infinite]`}
                    >
                      {[...tickerWords, ...tickerWords].map((words, index) => (
                        <li
                          className="items-center flex gap-4 flex-shrink-0"
                          key={index}
                        >
                          <span className="font-semibold">{words}</span>
                          <LuConstruction className="text-secondary w-6 h-6" />
                        </li>
                      ))}
                    </ul>
                    <hr className="w-full border border-secondary/20 opacity-50 mt" />
                  </h3>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/*EHYG*/}
      <motion.div
        className="w-full py-4 px-8 bg-secondary/10 border border-secondary/15 rounded-2xl backdrop-blur-xs gap-3 justify-center items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.4,
            ease: "circInOut",
          },
        }}
        viewport={{ once: true }}
        id="ehyg-web"
      >
        <h2
          className={`w-full flex flex-col justify-center ${
            (isIOS || isAndroid) || isMobile ? `items-center` : `items-start`
          }`}
        >
          <span className="font-extrabold text-[30px] text-gradient text-glow-hover">
            Eunhae Youth Group Website
          </span>
          <div className="flex flex-wrap items-start justify-center gap-2">
            <div className="flex flex-wrap justify-center gap-2">
              {ehygTags.map((tag, index) => (
                <div
                  className="w-auto px-3 py-1 bg-transparent border border-secondary/15 backdrop-blur-xs text-secondary rounded-md font-medium transition flex items-center justify-center text-[12px] sm:text-[15px] mt-2 mb-2"
                  key={index}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <span className="opacity-60 text-secondary text-[20px] font-bold italic">
            (June 2025-PRESENT)
          </span>
        </h2>
        <button
          onClick={() => setIsOpenEHYG(!isOpenEHYG)}
          className="w-full flex justify-center items-center"
        >
          <motion.div
            className="flex justify-center items-center mt-5"
            animate={{ rotate: isOpenEHYG ? 180 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.25, delay: 0.025 }}
          >
            <IoIosArrowUp size={30} color="var(--color-secondary)" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpenEHYG && (
            <motion.div
              key="ehyg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.25 }}
              className="overflow-hidden mt-4 flex w-full justify-center items-center"
            >
              <div className="flex flex-col justify-center items-start w-full gap-5">
                <div className="w-full">
                  <h3 className="text-gradient text-[30px] font-bold left- mb-3">
                    What Is This?
                  </h3>
                  <div className="w-full flex flex-col gap-5 sm:flex-row sm:gap-0">
                    <div className="w-full flex justify-center">
                      <motion.div
                        className="relative w-[90%] border border-secondary/10 border-[2px] rounded-2xl p-2"
                        initial={{ borderColor: "var(--color-quaternary)" }}
                        whileHover={{
                          borderColor: "var(--color-quaternary-hover)",
                          transition: {
                            delay: 0.05,
                            duration: 0.25,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        <h4 className="opacity-60 italic underline text-[18px] font-bold">
                          EHYG Background
                        </h4>
                        <p className="font-semibold">
                          The Eunhae Youth Group is a{" "}
                          <span className="text-gradient font-bold">
                            welcoming community
                          </span>{" "}
                          that provides a{" "}
                          <span className="text-gradient font-bold">safe</span>{" "}
                          and{" "}
                          <span className="text-gradient font-bold">
                            supportive
                          </span>{" "}
                          environment for young people to{" "}
                          <span className="text-gradient font-bold">learn</span>{" "}
                          and{" "}
                          <span className="text-gradient font-bold">grow</span>{" "}
                          in church. The youth group lacked a{" "}
                          <span className="text-gradient font-bold">
                            website
                          </span>
                          , so{" "}
                          <span className="text-gradient font-bold">
                            my team
                          </span>{" "}
                          and I constructed a{" "}
                          <span className="text-gradient font-bold">
                            responsive
                          </span>{" "}
                          and{" "}
                          <span className="text-gradient font-bold">
                            user-friendly
                          </span>{" "}
                          website for young scholars interested in{" "}
                          <span className="text-gradient font-bold">
                            Christianity
                          </span>
                          .
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-gradient text-[30px] font-bold left-0">
                    <span className="">Progress</span>
                  </h3>
                  <div className="w-full flex justify-center items-center flex flex-col gap-5">
                    <Image
                      className="relative w-[100%] md:w-[80%] h-auto mt-5 border border-secondary/15 border-[5px] rounded-2xl"
                      src={ehygPhoto}
                      alt="ehyg-photo"
                    />
                    <div className="w-full p-3 border border-secondary/10 rounded-2xl">
                      <h4 className="opacity-60 text-secondary text-glow text-[20px] font-bold">
                        June 22, 2025
                      </h4>
                      <p className="font-semibold text-[18px]">
                        Added the{" "}
                        <span className="text-gradient font-bold">initial</span>{" "}
                        page and implemented basic{" "}
                        <span className="text-gradient font-bold">styling</span>{" "}
                        and{" "}
                        <span className="text-gradient font-bold">
                          animations
                        </span>
                        .{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-gradient text-[30px] font-bold left-0">
                    <span className="">Results</span>
                    <hr className="w-full border border-secondary/20 opacity-50 mt-4" />
                    <ul
                      className={`w-max inline-flex gap-5 text-secondary text-[20px] whitespace-nowrap py-4 animate-[scroll-footer_18s_linear_infinite]`}
                    >
                      {[...tickerWords, ...tickerWords].map((words, index) => (
                        <li
                          className="items-center flex gap-4 flex-shrink-0"
                          key={index}
                        >
                          <span className="font-semibold">{words}</span>
                          <LuConstruction className="text-secondary w-6 h-6" />
                        </li>
                      ))}
                    </ul>
                    <hr className="w-full border border-secondary/20 opacity-50 mt" />
                  </h3>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/*PDCS*/}
      <motion.div
        className="w-full py-4 px-8 bg-secondary/10 border border-secondary/15 rounded-2xl backdrop-blur-xs gap-3 justify-center items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.4,
            ease: "circInOut",
          },
        }}
        viewport={{ once: true }}
        id="pdcs-projects"
      >
        <h2
          className={`w-full flex flex-col justify-center ${
            (isIOS || isAndroid) || isMobile ? `items-center` : `items-start`
          }`}
        >
          <span className="font-extrabold text-[30px] text-gradient text-glow-hover">
            Photographical Drone Computing System
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex flex-wrap justify-center gap-2">
              {pdcsTags.map((tag, index) => (
                <div
                  className="w-auto px-3 py-1 bg-transparent border border-secondary/15 backdrop-blur-xs text-secondary rounded-md font-medium transition flex items-center justify-center text-[12px] sm:text-[15px] mt-2 mb-2"
                  key={index}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <span className="opacity-60 text-secondary text-[20px] font-bold italic">
            (Starting Sept. 2025)
          </span>
        </h2>
        <div className="w-full flex items-center justify-center">
          <Image
            className="relative w-[100%] md:w-[90%] h-auto mt-5 border border-secondary/15 border-[5px] rounded-2xl"
            src={dronePhoto}
            alt="drone-photo"
          />
        </div>
        <button
          onClick={() => setIsOpenPDCS(!isOpenPDCS)}
          className="w-full flex justify-center items-center"
        >
          <motion.div
            className="flex justify-center items-center mt-5"
            animate={{ rotate: isOpenPDCS ? 180 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.25, delay: 0.025 }}
          >
            <IoIosArrowUp size={30} color="var(--color-secondary)" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpenPDCS && (
            <motion.div
              key="PDCS-compartment"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.25 }}
              className="overflow-hidden mt-4 flex w-full justify-center items-center"
            >
              <div className="flex flex-col justify-center items-start w-full gap-5">
                <div className="w-full">
                  <h3 className="text-gradient text-[30px] font-bold left- mb-3">
                    Goals
                  </h3>
                  <div className="w-full flex flex-col gap-5 sm:flex-row sm:gap-0">
                    <div className="w-full flex justify-center">
                      <motion.div
                        className="relative w-[90%] border border-secondary/10 border-[2px] rounded-2xl p-2"
                        initial={{ borderColor: "var(--color-quaternary)" }}
                        whileHover={{
                          borderColor: "var(--color-quaternary-hover)",
                          transition: {
                            delay: 0.05,
                            duration: 0.25,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        <h4 className="opacity-60 italic underline text-[18px] font-bold">
                          Issues
                        </h4>
                        <p className="font-semibold">
                          Often, piloting a{" "}
                          <span className="text-gradient font-bold">drone</span>{" "}
                          through tight terrain takes{" "}
                          <span className="text-gradient font-bold">
                            years of experience
                          </span>{" "}
                          and training to{" "}
                          <span className="text-gradient font-bold">
                            safely
                          </span>{" "}
                          record{" "}
                          <span className="text-gradient font-bold">
                            cutting-edge
                          </span>{" "}
                          videos or photographs. Inexperienced cinematographers
                          are often{" "}
                          <span className="text-gradient font-bold">
                            unable
                          </span>{" "}
                          to safely pilot a drone through{" "}
                          <span className="text-gradient font-bold">
                            buildings or caves
                          </span>
                          , raising moral issues and danger for nearby personal.
                        </p>
                      </motion.div>
                    </div>
                    <div className="w-full flex justify-center">
                      <motion.div
                        className="relative w-[90%] border border-secondary/10 border-[2px] rounded-2xl p-2"
                        initial={{ borderColor: "var(--color-quaternary)" }}
                        whileHover={{
                          borderColor: "var(--color-quaternary-hover)",
                          transition: {
                            delay: 0.05,
                            duration: 0.25,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        <h4 className="opacity-60 italic underline text-[18px] font-bold">
                          Solutions
                        </h4>
                        <p className="font-semibold">
                          By creating a high-speed{" "}
                          <span className="text-gradient font-bold">
                            algorithm
                          </span>{" "}
                          using{" "}
                          <span className="text-gradient font-bold">LLM's</span>{" "}
                          and rigorous{" "}
                          <span className="text-gradient font-bold">
                            data training
                          </span>
                          , photographers from{" "}
                          <span className="text-gradient font-bold">
                            all skill levels
                          </span>{" "}
                          will be able to record aerial footage within{" "}
                          <span className="text-gradient font-bold">rough</span>{" "}
                          or{" "}
                          <span className="text-gradient font-bold">
                            cramped
                          </span>{" "}
                          terrains. The LLM will be able to{" "}
                          <span className="text-gradient font-bold">
                            outline a path
                          </span>{" "}
                          and avoid{" "}
                          <span className="text-gradient font-bold">
                            obstacles
                          </span>{" "}
                          while maintaining{" "}
                          <span className="text-gradient font-bold">
                            optimal speeds
                          </span>
                          .
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-gradient text-[30px] font-bold left-0">
                    <span className="">Progress</span>
                    <hr className="w-full border border-secondary/20 opacity-50 mt-4" />
                    <ul
                      className={`w-max inline-flex gap-5 text-secondary text-[20px] whitespace-nowrap py-4 animate-[scroll-footer_18s_linear_infinite_reverse]`}
                    >
                      {[...tickerWords, ...tickerWords].map((words, index) => (
                        <li
                          className="items-center flex gap-4 flex-shrink-0"
                          key={index}
                        >
                          <span className="font-semibold">{words}</span>
                          <LuConstruction className="text-secondary w-6 h-6" />
                        </li>
                      ))}
                    </ul>
                    <hr className="w-full border border-secondary/20 opacity-50 mt" />
                  </h3>
                </div>
                <div className="w-full">
                  <h3 className="text-gradient text-[30px] font-bold left-0">
                    <span className="">Results</span>
                    <hr className="w-full border border-secondary/20 opacity-50 mt-4" />
                    <ul
                      className={`w-max inline-flex gap-5 text-secondary text-[20px] whitespace-nowrap py-4 animate-[scroll-footer_18s_linear_infinite]`}
                    >
                      {[...tickerWords, ...tickerWords].map((words, index) => (
                        <li
                          className="items-center flex gap-4 flex-shrink-0"
                          key={index}
                        >
                          <span className="font-semibold">{words}</span>
                          <LuConstruction className="text-secondary w-6 h-6" />
                        </li>
                      ))}
                    </ul>
                    <hr className="w-full border border-secondary/20 opacity-50 mt" />
                  </h3>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
