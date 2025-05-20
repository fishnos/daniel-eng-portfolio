"use client";

import ScreenRectangle from '../components/ScreenRectangle'
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function ScreenTransition() {
  const pathname = usePathname();

  return <>
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className=
          'h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex'
        >
          <ScreenRectangle />
        </div>
      </div>
    </AnimatePresence>
  </>;
}