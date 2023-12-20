'use client'
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Link from "next/link";
import './Profile.css';
import { LogOut } from '../../../components/storyBookComponents/LoggOut/LoggOut'
import { GoogleLoggIn } from '../../../components/storyBookComponents/GoogleLoggIn/GoogleLoggIn'

export default function ProfileClient({ session, lng }: {
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
                <Link href="/api/auth/signin">
                <GoogleLoggIn lng={lng}></GoogleLoggIn>
                </Link>
            </>
        );
    }
}
