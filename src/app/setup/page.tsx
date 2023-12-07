import styles from './page.module.css'
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import ProfileClient from '@/app/components/storyBookComponents/cards/Profile/ProfileClient'
import Link from 'next/link';

export default async function Setup() {
    const session = await getServerSession();

    // function continueButton() {
    //     if (session) {
    //         <button onClick={redirect('/')}></button>
    //     } else if (!session) {
    //         <button onClick={redirect('/setup')}></button>
    //     }
    // }

    return (
        <>
            <h1 className={styles.h1}>Welcome to <span className={styles.span}>Storken</span>! We&apos;ll begin with configuring your profile.</h1>

            <ProfileClient session={session} />

            <h2 className={styles.h2}>Your preferred language</h2>
            <button></button> {/* Change to dropdown menu when initialized */}
            <h2 className={styles.h2}>Your primary diet</h2>
            <button></button> {/* Change to dropdown menu when initialized */}
            <br />
            {session && (
                <Link href="/">Continue</Link>
            )}
        </>

    );
}