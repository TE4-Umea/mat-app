import { signIn, signOut, useSession } from "next-auth/react";

export default function ProfileClient() {
    const { data: session } = useSession();

    if (session) {
        return (
            <main>
                <button onClick={() => signOut()}>Sign out</button>
            </main>
        )
    } else {
        return (
            <>
                Not signed in <br />
                <button onClick={() => signIn()}>Sign in</button>
            </>
        );
    }
}