import { Card as MealCard } from '../../storyBookComponents/cards/mealCard/mealCard'
import styles from '../carousel/carousel.module.css'


export default function CarouselMIS() {
    return (

        <>
            <div className={styles.scroll}>
                <div className={styles.buttonContainer}>
                    <MealCard></MealCard>
                </div>
                <div className={styles.buttonContainer}>
                    <MealCard></MealCard>
                </div>
                <div className={styles.buttonContainer}>
                    <MealCard></MealCard>
                </div>
                <div className={styles.buttonContainer}>
                    <MealCard></MealCard>
                </div>
                <div className={styles.buttonContainer}>
                    <MealCard></MealCard>
                </div>
                <div className={styles.buttonContainer}>
                    <MealCard></MealCard>
                </div>
            </div>
        </>
    )
}