import NavLinks from '@/components/NavLinks'
import React from 'react';

export default function MainNav() {
  return (
    <nav>
        <NavLinks containerStyles={"bg-secondary flex flex-col gap-6"} />
    </nav>
  );
}