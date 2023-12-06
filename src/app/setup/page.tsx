import styles from './page.module.css'
import SignUp from '../../profileFix/profileFixSetup'
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'

export default async function Setup() {
    const session = await getServerSession();

    if (!session) {
        return (
            <>
                <h1 className={styles.h1}>Welcome to <span className={styles.span}>Storken</span>! We&apos;ll begin with configuring your profile.</h1>

                <SignUp></SignUp>

                <h2 className={styles.h2}>Your preferred language</h2>
                <button></button> {/* Change to dropdown menu when initialized */}
                <h2 className={styles.h2}>Your primary diet</h2>
                <button></button> {/* Change to dropdown menu when initialized */}

                <button></button> {/* Continue button */}
            </>

        );
    } else if (session) {
        redirect('/')

    }
}