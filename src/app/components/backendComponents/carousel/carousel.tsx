import { CarouselCard } from '../../storyBookComponents/planCarouselCard/planCarouselCard'
import styles from './carousel.module.css'

export default function Carousel() {
    const week = [1, 2, 3, 4, 5, 6, 7]
    const date = new Date()

    const getDayOfWeek = (date, offset) => {
        const newDate = new Date(date)
        newDate.setDate(newDate.getDate() + offset)
        return newDate.toLocaleString('default', { weekday: 'long' })
    }

    return (
        <>
            <div className={styles.scroll}>
                {week.map((offset) => (
                    <div className={styles.buttonContainer} key={offset}>
                        <CarouselCard
                            lunch={true}
                            key={offset}
                            currentDay={getDayOfWeek(date, offset - 1)}
                        ></CarouselCard>
                    </div>
                ))}
            </div>
        </>
    )
}
