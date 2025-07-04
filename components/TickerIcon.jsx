import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TickerIcon({ iconName, iconText, link }) {
  return (
    <motion.a
      href={link}
      className="flex flex-row justify-center items-center gap-2 py-2 px-4 border border-secondary/15 rounded-2xl w-auto h-auto bg-secondary/0 text-secondary"
      initial={{ scale: 1 }}
      whileHover={{
        boxShadow: "0px 10px 20px rgba(64, 72, 72, 0.42)",
        scale: 1.05,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
    >
      <Image width={25} height={25} src={iconName} alt={iconText} />
      <span className="text-gradient font-bold">{iconText}</span>
    </motion.a>
  );
}
