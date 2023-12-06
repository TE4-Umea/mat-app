'use client'
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Link from "next/link";

export default function ProfileClient({ session }: {
    session: Session | null
}) {


    if (session) {
        return (
            <>
                <button>
                    <Link href="/api/auth/signout">
                        Sign out
                    </Link>
                </button>
            </>
        )
    } else if (!session) {
        return (
            <>
                <button>
                    <Link href="/api/auth/signin">
                        Sign in
                    </Link>
                </button>
            </>
        );
    }
}
