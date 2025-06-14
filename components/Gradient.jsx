import React from "react";

export default function Gradient() {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full bg-primary 
        bg-[linear-gradient(to_right,#1a2a2f_1px,transparent_1px),
        linear-gradient(to_bottom,#1a2a2f_1px,transparent_1px)] 
        bg-[size:3rem_3rem]"
    ></div>
  );
}
