import { MealCard } from '../../storyBookComponents/mealCard/mealCard'
import styles from '../carousel/carousel.module.css'


export default function CarouselMIS() {
    return (

        <>
            <div className={styles.scroll}>
                <div className={styles.buttonContainer}>
                    <MealCard tags={['Mat', 'I', 'Skål']}></MealCard>
                </div>
                <div className={styles.buttonContainer}>
                    <MealCard tags={['Skål', 'I', 'Mat']}></MealCard>
                </div>
                <div className={styles.buttonContainer}>
                    <MealCard tags={['I', 'Skål', 'Mat']}></MealCard>
                </div>
                <div className={styles.buttonContainer}>
                    <MealCard tags={['I', 'Mat', 'Skål']}></MealCard>
                </div>
                <div className={styles.buttonContainer}>
                    <MealCard tags={['Skål', 'Mat', 'I']}></MealCard>
                </div>
                <div className={styles.buttonContainer}>
                    <MealCard tags={['Mat', 'Skål', 'I']}></MealCard>
                </div>
            </div>
        </>
    )
}