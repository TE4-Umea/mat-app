import styles from './page.module.css'
// import { signIn, signOut } from 'next-auth/react';
// import { getServerSession } from "next-auth";

export default function Setup() {

    // async function logIn() {
    //     const session = await getServerSession();
    //     if (session) {
    //         return (
    //             <main>
    //                 <button onClick={() => signOut()}>Sign out</button>
    //             </main>
    //         )
    //     } else if (!session) {
    //         return (
    //             <>
    //                 <button onClick={() => signIn()}>Sign in</button>
    //             </>
    //         );
    //     }
    // }
    return (
        <>
            <h1 className={styles.h1}>Welcome to <span className={styles.span}>Storken</span>! We&apos;ll begin with configuring your profile.</h1>

            {/* {logIn()} */}

            <h2 className={styles.h2}>Your preferred language</h2>
            <button></button> {/* Change to dropdown menu when initialized */}
            <h2 className={styles.h2}>Your primary diet</h2>
            <button></button> {/* Change to dropdown menu when initialized */}

            <button></button> {/* Continue button */}
        </>

    )
}