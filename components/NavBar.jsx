"use client";

import NavLinks from './NavLinks'
import { X, Menu } from 'lucide-react';
import { motion } from 'framer-motion'
import React, { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return <>
    <header className="flex justify-between items-center px-8 py-4 w-full fixed top-0 z-30 bg-transparent">
      <h1 className="font-extrabold text-[22px]">kosukhin.<span className="text-glow-hover text-gradient">tech</span></h1>
      <nav>
        <NavLinks containerStyles={"hidden md:block flex space-x-8 text-white font-semibold justify-between text-lg"}/>
      </nav>
      <button
        onClick={toggleNavbar}
        className="md:hidden right-8 fixed z-40"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </header>
    {isOpen && (
      //TODO: add a fade out animation
      <>
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            delay: 1.7,
            duration: 0.4,
            ease: "easeIn",
          }}
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
        />
        <nav className="md:hidden top-[100px] flex flex-col absolute w-full items-center justify-center py-6 z-200">
          <NavLinks containerStyles="flex flex-col space-y-6"/>
        </nav>
      </>
    )}
  </>
}