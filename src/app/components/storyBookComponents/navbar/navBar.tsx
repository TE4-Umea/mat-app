'use client'
import React from 'react';
import './navBar.css';
import '/src/app/globals.css';
import Link from 'next/link';
import { usePathname } from "next/navigation";

/**
 * Primary UI component for user interaction
 */
export function NavBar() {
    const pathname = usePathname();

    return (
        <>
            <div className='navContainer'>
                <nav className='navBar'>

                    <Link href="/">
                        <span className={(pathname === "/" ? "active" : "navButton")} id='navHome'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 1792 1792" id="home"><path d="M1472 992v480q0 26-19 45t-45 19h-384v-384H768v384H384q-26 0-45-19t-19-45V992q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69-62 74q-8 9-21 11h-3q-13 0-21-7L896 424l-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204V288q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" id='scale'></path></svg>
                            <p>Hem</p>
                        </span>
                    </Link>

                    <Link href="/pages/planning">
                        <span className={(pathname === "/pages/planning" ? "active" : "navButton")} id='navPlanning'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" id="fork"><path d="M16.84,11.63A3,3,0,0,0,19,10.75l2.83-2.83a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L17.55,9.33a1,1,0,0,1-1.42,0h0L19.67,5.8a1,1,0,1,0-1.42-1.42L14.72,7.92a1,1,0,0,1,0-1.41l2.83-2.83a1,1,0,1,0-1.42-1.42L13.3,5.09a3,3,0,0,0,0,4.24h0L12,10.62,3.73,2.32l-.1-.06a.71.71,0,0,0-.17-.11l-.18-.07L3.16,2H3.09l-.2,0a.57.57,0,0,0-.18,0,.7.7,0,0,0-.17.09l-.16.1-.07,0-.06.1a1,1,0,0,0-.11.17,1.07,1.07,0,0,0-.07.19s0,.07,0,.11a11,11,0,0,0,3.11,9.34l2.64,2.63-5.41,5.4a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L9.9,15.57h0l2.83-2.83h0l2-2A3,3,0,0,0,16.84,11.63ZM9.19,13.45,6.56,10.81A9.06,9.06,0,0,1,4,5.4L10.61,12Zm6.24.57A1,1,0,0,0,14,15.44l6.3,6.3A1,1,0,0,0,21,22a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path></svg>
                            <p>Planering</p>
                        </span>
                    </Link>

                    <Link href="/pages/history">
                        <span className={(pathname === "/pages/history" ? "active" : "navButton")} id='navHistory'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" id="history"><path d="M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z"></path></svg>
                            <p>Historik</p>
                        </span>
                    </Link>

                    <Link href="/pages/profile">
                        <span className={(pathname === "/pages/profile" ? "active" : "navButton")} id='navProfile'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 -1 20 24" id="profile"><g fillRule="evenodd"><g transform="translate(-140 -2159)"><g transform="translate(56 160)"><path d="M100.563 2017H87.438c-.706 0-1.228-.697-.961-1.338 1.236-2.964 4.14-4.662 7.523-4.662 3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.961 1.338m-10.646-12c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4s-1.831 4-4.083 4c-2.251 0-4.083-1.794-4.083-4m14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028-3.712-.423-6.86 2.407-6.86 5.958 0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963-.27 1.221.735 2.364 2.01 2.364h15.892c1.276 0 2.28-1.143 2.01-2.364"></path></g></g></g></svg>
                            <p>Profil</p>
                        </span>
                    </Link>

                </nav>
            </div>
            <div className='navMargin'></div>
        </>
    );
};
