import NavLinks from '../components/NavLinks'
import React from 'react';

export default function MainNav() {
  return (
    <nav className="flex flex-col items-center justify-center">
        <NavLinks containerStyles={"bg-primary flex flex-col gap-6"} />
    </nav>
  );
}