import React from "react";

export default function Gradient({ containerStyles }) {
  return (
    <div
      className={`${containerStyles} fixed inset-0 -z-10 pointer-events-none bg-primary bg-[linear-gradient(to_right,#272a2a_1px,transparent_1px),linear-gradient(to_bottom,#272a2a_1px,transparent_1px)] bg-[size:3rem_3rem]`}
    >
    </div>
  );
}