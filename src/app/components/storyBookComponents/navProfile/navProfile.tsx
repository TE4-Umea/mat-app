'use client'
import React from 'react';
import './navProfile.css';
import '/src/app/globals.css';
import Link from 'next/link';
import { usePathname } from "next/navigation";

/**
 * Primary UI component for user interaction
 */
export function NavProfile() {
    const pathname = usePathname();

    return (
        <>
            <div className='profileNavContainer'>
                <Link className={(pathname === "/pages/profile" ? "profileNavActive" : "profileNavLink")} href=''>
                    Statistik
                </Link>
                <Link className={(pathname === "/" ? "profileNavActive" : "profileNavLink")} href=''>
                    Inställningar
                </Link>
                <Link className={(pathname === "/" ? "profileNavActive" : "profileNavLink")} href=''>
                    Sparade
                </Link>
            </div>
        </>
    );
};
