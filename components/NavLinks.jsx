"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import TextTransition from './TextTransition';

const links = [
    {
        page: 'home',
        path: '/',
    },
    {
        page: 'about',
        path: '/about',
    },
    {
        page: 'projects',
        path: '/projects',
    },
    {
        page: 'contact',
        path: '/contact',
    },
];

export default function NavLinks({ containerStyles }) {
    const pathname = usePathname();

    return (
        <ul className={containerStyles}>
            {links.map((fileLink, index) => {
                const isActive = pathname === fileLink.path;

                // const charLength = fileLink.path.length;
                // const lineWidth = charLength > 5 ? "after:w-[105%]" : "after:w-[85%]"

                return (
                    <Link 
                        href={fileLink.path} 
                        key={index}
                        className={`relative text-lg uppercase text-primary font-bold`}
                    >
                        <span className={`relative z-10 ${isActive ? "text-tertiary" : "text-secondary"}`}>{fileLink.page}</span>
                    </Link>
                );
            })}
        </ul>
    )
}