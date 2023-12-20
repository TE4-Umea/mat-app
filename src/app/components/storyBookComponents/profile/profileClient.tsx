'use client'
import './profile.css'

import Link from 'next/link'
import { Session } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'

import { LogOut } from '../logOut/logOut'

export default function ProfileClient({
    session,
    lng,
}: {
    session: Session | null
}) {
    if (session) {
        return (
            <>
                <Link href="/api/auth/signout">
                    <LogOut lng={lng}></LogOut>
                </Link>
            </>
        )
    } else if (!session) {
        return (
            <>
                <Link href="/api/auth/signin">Sign in</Link>
            </>
        )
    }
}
