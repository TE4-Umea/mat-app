import styles from './page.module.css'
import { getServerSession } from "next-auth";
import ProfileClient from '@/app/components/storyBookComponents/cards/Profile/ProfileClient'
import Link from 'next/link';
import { DropDown } from '../components/storyBookComponents/buttons/DropDown/DropDown'

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
            <h1 className={styles.h1}>Welcome to <span className={styles.span}>Bennu</span>! We&apos;ll begin with configuring your profile.</h1>

            {!session && (<ProfileClient session={session} />)}


            <h2 className={styles.h2}>Your preferred language</h2>
            <DropDown options={['Normal', 'Vegetarian']}></DropDown>
            <h2 className={styles.h2}>Your primary diet</h2>
            <DropDown options={['Svenska', 'English']}></DropDown>
            <br />

            {session && (
                <Link href="/">Continue</Link>
            )}
        </>

    );
}