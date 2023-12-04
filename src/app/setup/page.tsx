import styles from './page.module.css'

export default function Setup() {
    return (
        <>
            <h1 className={styles.h1}>Welcome to <span className={styles.span}>Storken</span>! We&apos;ll begin with configuring your profile.</h1>

            <button></button> {/* Google auth button */}

            <h2 className={styles.h2}>Your preferred language</h2>
            <button></button> {/* Change to dropdown menu when initialized */}
            <h2 className={styles.h2}>Your primary diet</h2>
            <button></button> {/* Change to dropdown menu when initialized */}

            <button></button> {/* Continue button */}
        </>

    )
}