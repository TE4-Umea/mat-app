import styles from './page.module.css'
import { NavBar } from './components/storyBookComponents/navbar/navBar';
import LunchMiddagText from './components/timeDepender/timeDependerLunchMiddag'
import GreetingCardTime from './components/timeDepender/greetingCardTime'
import BackgroundTime from './components/timeDepender/backgroundTime';
import { SavedMeals } from './components/storyBookComponents/buttons/SavedMeals/SavedMeals';
import { MealCard } from './components/storyBookComponents/cards/mealCard/mealCard'
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  if (session) {
    return (
      <main>
        <BackgroundTime></BackgroundTime>

        <h1 className={styles.startText}>
          <GreetingCardTime></GreetingCardTime>
        </h1>

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

        <div className={styles.buttonsSaved}>

          <SavedMeals></SavedMeals>

        </div>
        <div className={styles.chosenMeals}>
          <h1>Utvalda måltider</h1>
          <span>Maträtter skapade av våra kockar, för dig</span>

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
