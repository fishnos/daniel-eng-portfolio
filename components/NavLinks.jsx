"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

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

export default function NavLinks({containerStyles}) {
    const pathname = usePathname();

    return (
        <ul className={containerStyles}>
            {links.map((fileLink, index) => {
                const isActive = pathname === fileLink.path;

                const charLength = fileLink.path.length;
                const lineWidth = charLength > 5 ? "after:w-[120%]" : "after:w-[90%]"

                return (
                    <Link 
                        href={fileLink.path} 
                        key={index}
                        className={`
                            relative text-lg capitalize text-accent ${
                                isActive && `after:content-[''] after:block after:absolute
                                after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent
                                after:-translate-y-1/2 after:z-0`
                            }
                        `}
                    >
                        {fileLink.page}
                    </Link>
                );
            })}
        </ul>
    )
}