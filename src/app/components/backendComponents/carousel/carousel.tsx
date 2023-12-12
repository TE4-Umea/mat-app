import { CarouselCard } from '../../storyBookComponents/cards/planCarouselCard/planCarouselCard'
import styles from './carousel.module.css'

export default function Carousel() {
    return (
        <>
            <div className={styles.scroll}>
                <div className={styles.buttonContainer}>
                    <CarouselCard lunch={true}></CarouselCard>
                </div>
                <div className={styles.buttonContainer}>
                    <CarouselCard lunch={true}></CarouselCard>
                </div>
                <div className={styles.buttonContainer}>
                    <CarouselCard lunch={true}></CarouselCard>
                </div>
                <div className={styles.buttonContainer}>
                    <CarouselCard lunch={true}></CarouselCard>
                </div>
            </div>
        </>
    )
}