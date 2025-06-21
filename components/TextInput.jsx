import React, { useState } from 'react'

export default function TextInput({ id, defaultValue='', label, placeholder }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <>
        <div className="flex flex-col w-full justify-center items-center mt-5">
            {label && (
                <label 
                    htmlFor={id}
                    className="text-glow font-bold"
                >
                    {label}
                </label>
            )}
            <input
                className="items-center ml-4 border border-white/15 rounded-xl w-[300px] py-1 px-2
                    focus:outline-none focus:ring-0 font-semibold focus:border-white/35 focus:border-[2px]
                    bg-primary backdrop-blur-xs"
                placeholder={`${placeholder}`}
                required
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    </>
  );
}