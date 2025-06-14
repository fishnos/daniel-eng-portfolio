import NavLinks from './NavLinks'
import React from 'react';

export default function NavBar() {
  return <>
    <header className="flex justify-between items-center px-8 py-4 w-full fixed top-0 z-1 bg-transparent">
      <h1 className="font-extrabold text-[22px]">kosukhin.<span className="text-glow text-gradient">tech</span></h1>
      <nav>
        <NavLinks containerStyles={"flex space-x-8 text-white font-semibold text-lg"}/>
      </nav>
    </header>
  </>
}