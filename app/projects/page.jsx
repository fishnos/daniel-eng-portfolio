"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div>
      <motion.section
        initial={{opacity: 0, y: 50}}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1,
            duration: 0.4,
            ease: "circInOut",
          },
        }}
        className="min-h-screen flex items-center justify-center relative w-full z-20 font-extrabold text-[35px]"
      >
        my projects
      </motion.section>
    </div>
  );
}
