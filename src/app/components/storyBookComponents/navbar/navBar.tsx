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

            <Link className={(pathname == "/" ? "active" : "")} href="/">
                <span className='navButton' id='navHome'>
                    Hem
                </span>
            </Link>

            <Link className={(pathname == "/pages/planning" ? "active" : "")} href="/pages/planning">
                <span className='navButton' id='navPlanning'>
                    Planering
                </span>
            </Link>

            <Link className={(pathname == "/pages/history" ? "active" : "")} href="/pages/history">
                <span className='navButton' id='navHistory'>
                    Historik
                </span>
            </Link>

            <Link className={(pathname == "/pages/profile" ? "active" : "")} href="/pages/profile">
                <span className='navButton' id='navProfile'>
                    Profil
                </span>
            </Link>

        </nav>
    );
};
