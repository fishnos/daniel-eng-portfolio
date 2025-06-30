"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import { SparklesIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const footerTicker = [
    <span className="font-semibold">kosukhin.tech</span>,
    <SparklesIcon className="text-secondary w-6 h-6"/>,
    <span className="font-semibold">kosukhin.tech</span>,
    <SparklesIcon className="text-secondary w-6 h-6"/>,
    <span className="font-semibold">kosukhin.tech</span>,
    <SparklesIcon className="text-secondary w-6 h-6"/>,
    <span className="font-semibold">kosukhin.tech</span>,
    <SparklesIcon className="text-secondary w-6 h-6"/>,
    <span className="font-semibold">kosukhin.tech</span>,
    <SparklesIcon className="text-secondary w-6 h-6"/>,
    <span className="font-semibold">kosukhin.tech</span>,
    <SparklesIcon className="text-secondary w-6 h-6"/>,
    <span className="font-semibold">kosukhin.tech</span>,
    <SparklesIcon className="text-secondary w-6 h-6"/>,
    <span className="font-semibold">kosukhin.tech</span>,
    <SparklesIcon className="text-secondary w-6 h-6"/>,
  ];

  return (
    <footer className="bg-secondary/20 py-6 px-6 border border-secondary/15 rounded-2xl mt-12">
      <AnimatePresence>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-4">
          {/*thanks message*/}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                ease: "circInOut",
              },
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-2 text-glow">
              Thanks for stopping by! ✿
            </h2>
            <p className="text-lg mb-2">
              Made with care, personality, caffeine, and a good playlist.
            </p>
            <span className="text-sm opacity-80 text-[18px] font-semibold">
              Daniel Kosukhin
            </span>
          </motion.div>
          <div className="flex flex-row justify-center items-start md:justify-start gap-30 ml-0 md:ml-8 secondaryspace-nowrap">
            {/*contacts*/}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1,
                  duration: 0.3,
                  ease: "circInOut",
                },
              }}
              viewport={{ once: true }}
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
              <h3 className="text-xl font-semibold mb-2 mt-5 italic">
                Playlist
              </h3>
              <a
                href="https://open.spotify.com/playlist/6TJmJx0AMNlxeOXH6PD8RH?si=39e54f94cee64568"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-start items-center secondaryspace-nowrap hover:underline text-glow-hover"
              >
                Spotify
                <FaSpotify color="secondary" size={20} className="ml-2" />
              </a>
            </motion.div>
            {/*navigation*/}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1,
                  duration: 0.3,
                  ease: "circInOut",
                },
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:underline text-glow-hover" href="/">
                    My Home
                  </a>
                </li>
                <li>
                  <a className="hover:underline text-glow-hover" href="/about">
                    Who I Am
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline text-glow-hover"
                    href="/projects"
                  >
                    View Projects
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline text-glow-hover"
                    href="/contact"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.div
          key="footer-index"
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
          className="w-full h-auto items-center overflow-hidden 
                [mask-image:linear-gradient(to_right,transparent,black_15%,black_90%,transparent)]"
        >
          <hr className="relative w-full border border-secondary/20 opacity-50 mt-10"/>
          <ul
            className={`w-max inline-flex gap-5 text-secondary text-[20px] secondaryspace-nowrap py-4 animate-[scroll-footer_18s_linear_infinite_reverse]`}
          >
            {[...footerTicker, ...footerTicker].map((item, index) => (
              <li className="items-center flex gap-4 flex-shrink-0" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <hr className="relative w-full border border-secondary/20 opacity-50"/>
        </motion.div>
      </AnimatePresence>
    </footer>
  );
}
