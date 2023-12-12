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
                <Link className={(pathname === "/pages/profile/stats" ? "profileNavActive" : "profileNavLink")} href='/pages/profile/stats'>
                    Statistik
                </Link>
                <Link className={(pathname === "/pages/profile/settings" ? "profileNavActive" : "profileNavLink")} href='/pages/profile/settings'>
                    Inställningar
                </Link>
                <Link className={(pathname === "/pages/profile/saved-meals" ? "profileNavActive" : "profileNavLink")} href='/pages/profile/saved-meals'>
                    Sparade
                </Link>
            </div>
        </>
    );
};
