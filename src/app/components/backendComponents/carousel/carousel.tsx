import LunchMiddagText from '../timeDepender/timeDependerLunchMiddag'
import styles from './carousel.module.css'

export default function Carousel() {
    return (
        <>
            <div className={styles.scroll}>
                <div className={styles.buttonContainer}>
                    <LunchMiddagText></LunchMiddagText>
                </div>
                <div className={styles.buttonContainer}>
                    <LunchMiddagText></LunchMiddagText>
                </div>
                <div className={styles.buttonContainer}>
                    <LunchMiddagText></LunchMiddagText>
                </div>
                <div className={styles.buttonContainer}>
                    <LunchMiddagText></LunchMiddagText>
                </div>
            </div>
        </>
    )
}