'use client'
import React from 'react';
import './navBar.css';
import '/src/app/globals.css';
import Link from 'next/link';
import { usePathname } from "next/navigation";

interface ButtonProps {
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
}: ButtonProps) => {
    const pathname = usePathname();

    return (
        <nav className='navBar'>

            <Link href="/">
                <span className={(pathname === "/" ? "active" : "navButton")} id='navHome'>
                    Hem
                </span>
            </Link>

            <Link href="/pages/planning">
                <span className={(pathname === "/pages/planning" ? "active" : "navButton")} id='navPlanning'>
                    Planering
                </span>
            </Link>

            <Link href="/pages/history">
                <span className={(pathname === "/pages/history" ? "active" : "navButton")} id='navHistory'>
                    Historik
                </span>
            </Link>

            <Link href="/pages/profile">
                <span className={(pathname === "/pages/profile" ? "active" : "navButton")} id='navProfile'>
                    Profil
                </span>
            </Link>

        </nav>
    );
};
