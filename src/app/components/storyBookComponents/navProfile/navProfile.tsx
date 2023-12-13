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
                <Link className={(pathname === "/profile/stats" ? "profileNavActive" : "profileNavLink")} href='/profile/stats'>
                    Statistik
                </Link>
                <Link className={(pathname === "/profile/settings" ? "profileNavActive" : "profileNavLink")} href='/profile/settings'>
                    Inställningar
                </Link>
                <Link className={(pathname === "/profile/saved-meals" ? "profileNavActive" : "profileNavLink")} href='/profile/saved-meals'>
                    Sparade
                </Link>
            </div>
        </>
    );
};
