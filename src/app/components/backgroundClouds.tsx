import React from 'react'

import styles from './backgroundClouds.module.css'

interface BackgroundProps {
    light?: boolean

    size?: 'small' | 'large'
}

/**
 * Primary UI component for user interaction
 */
export default function BackgroundClouds({
    light = true,
    size = 'small',
    ...props
}: BackgroundProps) {
    const mode = light ? styles.backgroundLight : styles.backgroundDark
    const sizeMode =
        size === 'small' ? styles.backgroundSmall : styles.backgroundLarge
    return (
        <section
            className={[styles.background, sizeMode, mode].join(' ')}
            {...props}
        >
            <section className={styles.clouds}>
                <div className={styles.cloudSmall}></div>
                <div className={styles.cloudLarge}>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </section>
    )
}
