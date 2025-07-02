"use client";

import NavLinks from './NavLinks'
import { X, Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return <>
    <div className="">
      <header className="flex translate-x-[5vw] justify-between items-center px-8 py-10 mt-5 h-[25px] w-[90vw] fixed top-0 z-50 backdrop-blur-sm border border-secondary/15 rounded-full">
        <h1 className="font-extrabold text-[22px]">
          <a href="/">
            kosukhin.<span className="text-glow-hover text-gradient">com</span>
          </a>
        </h1>
        <nav>
          <NavLinks containerStyles={"hidden md:block flex space-x-8 text-secondary font-semibold justify-between text-lg"}/>
        </nav>
        <button
          onClick={toggleNavbar}
          className="md:hidden right-8 fixed z-40"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </header>
    </div>
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{opacity: 0}}
            animate={{
              opacity: 1,
              delay: 1.7,
              duration: 0.4,
              ease: "easeOut",
            }}
            exit={{opacity: 0}}
            className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            key={isOpen}
          />
          <motion.nav 
            initial={{opacity: 0}}
            animate={{
              opacity: 1,
              delay: 1.7,
              duration: 0.4,
              ease: "easeOut",
            }}
            exit={{opacity: 0}}
            className="md:hidden fixed top-[100px] flex flex-col absolute w-full items-center justify-center py-6 z-100 h-[60vh]"
          >
            <NavLinks containerStyles="flex flex-col space-y-6"/>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  </>;
}