"use client";

import React from "react";
import idPhoto from "../../public/assets/profile/id-photo.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import Ticker from "../../components/Ticker";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="gap-10">
      <div className="px-10 py-8 flex flex-col w-full h-auto bg-white/10 backdrop-blur-xs justify-center mt-35 border border-white/15 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 75 }}
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
          className="h-auto w-full justify-center items-center flex flex-col md:flex-row gap-10"
        >
          <Image
            src={idPhoto}
            alt="daniel-photo"
            width={250}
            height={250}
            priority
            className="border border-white/15 border-[4px] rounded-full"
          />
          <motion.div
            className="w-full ml-4 md:ml-0"
            initial={{ opacity: 0, y: 75 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.25,
                duration: 0.4,
                ease: "circInOut",
              },
            }}
            viewport={{ once: true }}
          >
            <h1 className="font-extrabold text-gradient text-[35px]">
              Hey, I'm Daniel (▰˘◡˘▰)
            </h1>
            <p className="mt-2 font-bold text-[25px] text-white">
              I am a passionate front-end developer that specializes in
              mechatronics, located in NY.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 75 }}
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
        className="h-auto w-full justify-center items-center flex flex-col gap-2"
      >
        <span className="text-[40px] text-gradient font-extrabold mt-10">
          My Skills
        </span>
        <motion.div className="w-full flex flex-col gap-1 justify-center items-center bg-white/10 border border-white/15 rounded-2xl backdrop-blur-xs py-2">
          {/*frontend*/}
          <h3 className="mt-5 font-bold text-[22px]">Front-end Experience</h3>
          <p className="relative w-[80%] flex justify-center items-center font-semibold text-[14px]">
            Using a multitude of languages in my toolkit, I develop captivating
            and engaging designs focused on user-friendliness.
          </p>
          <hr className="relative w-[75%] border border-white/20 opacity-50 mt-5" />
          <Ticker tickerType={"frontend"} tickerDuration={"20"} />
          <hr className="relative w-[75%] border border-white/20 opacity-50" />
          {/*backend*/}
          <h3 className="mt-8  font-bold text-[22px]">Back-end Experience</h3>
          <p className="relative w-[80%] flex justify-center items-center font-semibold text-[14px]">
            I have recently begun to dive into backend to find innovative
            alternatives, such as my contacts page.
          </p>
          <hr className="relative w-[75%] border border-white/20 opacity-50 mt-5" />
          <Ticker tickerType={"backend"} tickerDuration={"14"} />
          <hr className="relative w-[75%] border border-white/20 opacity-50" />
          {/*tools*/}
          <h3 className="mt-8  font-bold text-[22px]">Tools</h3>
          <p className="relative w-[80%] flex justify-center items-center font-semibold text-[14px]">
            I use cutting-edge tools to match an abundant amount of expertise in
            full-stack development.
          </p>
          <hr className="relative w-[75%] border border-white/20 opacity-50 mt-5" />
          <Ticker tickerType={"tools"} tickerDuration={"20"} />
          <hr className="relative w-[75%] border border-white/20 opacity-50 mb-3" />
        </motion.div>
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 75 }}
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
        className="h-auto w-full justify-center items-center flex flex-col gap-2"
      >
        <span className="text-[40px] text-gradient font-extrabold mt-10">
          My Expertise
        </span>
        <motion.div className="w-full flex flex-col px-8 py-4 gap-1 justify-center items-start bg-white/10 border border-white/15 rounded-2xl">
          {/*programming lead*/}
          <h4 className="font-bold text-[25px]">Programming Lead, 2638</h4>
          <ul className="list-disc list-inside pl-1 space-y-1">
            <li>
              Program in <span className="text-gradient font-bold ">Java</span>{" "}
              and <span className="text-gradient font-bold ">WPILib</span> to
              develop various path-planning systems
            </li>
            <li>
              Spearheaded the integration of{" "}
              <span className="text-gradient font-bold ">Choreo</span> and{" "}
              <span className="text-gradient font-bold ">Pathplanner</span> to
              draw out autonomous pathways
            </li>
            <li>
              Directed the{" "}
              <span className="text-gradient font-bold ">
                electrical wiring
              </span>{" "}
              and <span className="text-gradient font-bold ">programming</span>{" "}
              of our off-season robot
            </li>
          </ul>
          {/*sound chief*/}
          <h4 className="font-bold text-[25px] mt-6">
            Sound Chief and Manager
          </h4>
          <ul className="list-disc list-inside pl-1 space-y-1">
            <li>
              Utilized the{" "}
              <span className="text-gradient font-bold ">Midas M32</span> for
              unmatched efficiency and simplistic sound control
            </li>
            <li>
              Established the wiring of{" "}
              <span className="text-gradient font-bold ">microphones</span>,{" "}
              <span className="text-gradient font-bold ">recievers</span>, and{" "}
              <span className="text-gradient font-bold ">transmitters</span>{" "}
              throughout the theater
            </li>
            <li>
              Orchestrated{" "}
              <span className="text-gradient font-bold  italic">
                Cultural Heritage Night
              </span>{" "}
              and <span className="text-gradient font-bold ">programming</span>,{" "}
              <span className="text-gradient font-bold  italic">
                Legally Blonde
              </span>
              , and the{" "}
              <span className="text-gradient font-bold  italic">One Acts</span>{" "}
              at Theater South
            </li>
          </ul>
          {/*programming club board*/}
          <h4 className="font-bold text-[25px] mt-6">
            Board of the Programming Club
          </h4>
          <ul className="list-disc list-inside pl-1 space-y-1">
            <li>
              Present various{" "}
              <span className="text-gradient font-bold">meetings</span> about
              ACSL or USACO
            </li>
            <li>
              Tutor the basics of{" "}
              <span className="text-gradient font-bold ">
                competitive programming
              </span>{" "}
              and <span className="text-gradient font-bold ">C++</span>
            </li>
          </ul>
          {/*local web developer*/}
          <h4 className="font-bold text-[25px]  mt-6">
            Local website developer
          </h4>
          <ul className="list-disc list-inside pl-1 space-y-1">
            <li>
              Constructed the{" "}
              <span className="text-gradient font-bold  italic">
                Eunhae Youth Group Website
              </span>{" "}
              website for the local Eunhae church
              <a
                className="ml-[10px] inline-flex shrink-0"
                href="https://ehyg.vercel.app/"
                aria-label="View Project"
              >
                <FaExternalLinkAlt color="white" size={15} />
              </a>
            </li>
            <li>
              Currently developing the{" "}
              <span className="text-gradient font-bold italic">
                GNS Web Dev Club Website
              </span>
              <a
                className="ml-[10px] inline-flex shrink-0"
                href="https://gnswebdev.vercel.app/"
                aria-label="View Project"
              >
                <FaExternalLinkAlt color="white" size={15} />
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.h2>
    </div>
  );
}
