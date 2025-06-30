"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone } from "react-icons/fa";

export default function ContactButton({ containerStyles, iconName }) {
  const [isHoveredPhone, setIsHoveredPhone] = useState(false);

  const iconMap = {
    Phone: <FaPhone size={30} color="gray" />,
  };

  const handlerMap = {
    Phone: () => {
      window.open(
        "https://discord.com/users/764148620660047912",
        "_blank",
        "noopener,noreferrer"
      );
    },
  };

  return <>
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
          {iconMap[iconName]}
        </a>
      </motion.div>
    </div>
  </>;
}
