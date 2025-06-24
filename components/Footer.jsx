"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Footer() {
    return (
      <footer className="bg-white/20 backdrop-blur-2xs py-12 px-6 border border-white/15 rounded-2xl mt-12">
        <AnimatePresence>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
            {/*thanks message*/}
            <motion.div 
                className="text-center md:text-left"
                initial={{opacity: 0, y: 50}}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.3,
                        ease: "circInOut",
                    }
                }}
                viewport={{once: true}}
            >
                <h2 className="text-3xl font-bold mb-2 text-glow">
                Thanks for stopping by! ✿
                </h2>
                <p className="text-lg mb-2">
                Made with care, personality, caffeine, and a good playlist.
                </p>
                <span className="text-sm opacity-80 text-[18px] font-semibold">Daniel Kosukhin</span>
            </motion.div>
            <div className="flex flex-row justify-center items-start md:justify-start gap-30 ml-0 md:ml-8 whitespace-nowrap">
                {/*contacts*/}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.3,
                            ease: "circInOut",
                        }
                    }}
                    viewport={{once: true}}
                >
                    <h3 className="text-xl font-semibold mb-2">Contact Me</h3>
                    <ul className="space-y-2">
                    <li>
                        <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=dkosukhintech@gmail.com&su=Subject&body=BodyText"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-glow-hover"
                        >
                        Email
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.linkedin.com/in/daniel-kosukhin-82052634b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-glow-hover"
                        >
                        LinkedIn
                        </a>
                    </li>
                    </ul>
                </motion.div>
                {/*navigation*/}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.3,
                            ease: "circInOut",
                        }
                    }}
                    viewport={{once: true}}
                >
                    <h3 className="text-xl font-semibold mb-2">Navigation</h3>
                    <ul className="space-y-2">
                    <li>
                        <a className="hover:underline text-glow-hover" href="/">
                        Home
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline text-glow-hover" href="/about">
                        About
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline text-glow-hover" href="/projects">
                        Projects
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline text-glow-hover" href="/contact">
                        Contact
                        </a>
                    </li>
                    </ul>
                </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </footer>
    );
  }
  