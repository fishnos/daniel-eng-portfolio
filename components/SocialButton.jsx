"using client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaDiscord, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialButton({ containerStyles, iconName }) {
  const iconMap = {
    Discord: <FaDiscord size={30} color="gray" />,
    Github: <FaGithub size={30} color="gray" />,
    Google: <MdEmail size={30} color="gray" />,
  };

  const handlerMap = {
    Discord: () => {
      window.open(
        "https://discord.com/users/764148620660047912",
        "_blank",
        "noopener,noreferrer"
      );
    },
    Github: () => {
      window.open(
        "https://github.com/fishnos?tab=overview&from=2025-06-01&to=2025-06-15",
        "_blank",
        "noopener,noreferrer"
      );
    },
    Google: () => {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=dkosukhintech@gmail.com&su=Subject&body=BodyText",
        "_blank",
        "noopener,noreferrer"
      );
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center h-[50px] w-[50px] border border-secondary/15 rounded-xl border-[3px]"
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
      <button onClick={handlerMap[iconName]}>{iconMap[iconName]}</button>
    </motion.div>
  );
}
