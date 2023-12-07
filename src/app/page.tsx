import styles from './page.module.css'
import GreetingCardTime from './components/backendComponents/timeDepender/greetingCardTime'
import BackgroundTime from './components/backendComponents/timeDepender/backgroundTime';
import { NavBar } from './components/storyBookComponents/navbar/navBar';
import { SavedMeals } from './components/storyBookComponents/buttons/SavedMeals/SavedMeals';
import { MealCard } from './components/storyBookComponents/cards/mealCard/mealCard'
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth";
import Carousel from './components/backendComponents/carousel/carousel'
import CarouselMIS from './components/backendComponents/carouselMIS/carouselMIS'

export default async function Home() {
  const session = await getServerSession();

  if (session) {
    return (
      <main>
        <BackgroundTime></BackgroundTime>

        <h1 className={styles.startText}>
          <GreetingCardTime></GreetingCardTime>
        </h1>

        <Carousel></Carousel>

        <div className={styles.buttonsSaved}>

          <SavedMeals></SavedMeals>

        </div>
        <div className={styles.chosenMeals}>
          <h1>Utvalda måltider</h1>
          <span>Maträtter skapade av våra kockar, för dig</span>


          <CarouselMIS></CarouselMIS>

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
        </div>

        <NavBar />
      </main>
    );
  } else if (!session) {
    redirect('/setup')
  }
}
