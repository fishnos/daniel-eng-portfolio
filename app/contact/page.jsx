"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextInput from "../../components/TextInput";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, message }),
    });

    if (res.ok) {
      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } else {
      console.error(await res.json());
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      <div className="w-full max-w-[550px] py-5 rounded-2xl mx-auto min-h-screen flex flex-col gap-10 pt-12 mt-30">
        <motion.h1
          className="text-center text-[50px] font-extrabold text-glow-hover text-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-5 items-center"
          initial={{ opacity: 0 }}
          whileInView={{
            delay: 0.1,
            opacity: 1,
            transition: { delay: 0.1, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <TextInput
            id="firstName"
            label="First Name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextInput
            id="lastName"
            label="Last Name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextInput
            id="email"
            label="Email"
            placeholder="youremail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <motion.div
            className="flex flex-col w-full items-center mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.15, duration: 0.4, ease: "circInOut" },
            }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="text-glow font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="
                mx-auto w-[400px] min-h-[160px]
                border border-white/25 rounded-2xl
                bg-primary backdrop-blur-xs
                py-2 px-2 resize-none
                focus:outline-none focus:ring-0 focus:border-[2px]
                font-semibold placeholder-gray-500
              "
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            className="
              self-center mt-4 flex items-center justify-center
              w-[150px] h-[50px]
              rounded-full border-[3px] border-white/35
              bg-primary backdrop-blur-xs
              font-bold text-[14px] text-glow-hover
              focus:outline-none focus:ring-0
            "
            whileHover={{ scale: 1.075 }}
            transition={{ type: "easeInOut", stiffness: 300 }}
          >
            {status === "sending"
              ? "Sending…"
              : status === "success"
              ? "Sent!"
              : status === "error"
              ? "Error :("
              : "Send a message"}
          </motion.button>
        </motion.form>
      </div>
    </AnimatePresence>
  );
}
