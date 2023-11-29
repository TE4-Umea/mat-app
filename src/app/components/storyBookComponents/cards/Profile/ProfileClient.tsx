'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

export default function ProfileClient() {

    return (
        <SessionProvider>
            <ProfileClientContent />
        </SessionProvider>
    );
}

function ProfileClientContent() {
    const { data: session } = useSession();

    if (session) {
        return (
            <main>
                <button onClick={() => signOut()}>Sign out</button>
            </main>
        )
    } else if (!session) {
        return (
            <>
                <button onClick={() => signIn()}>Sign in</button>
            </>
        );
    }
}
