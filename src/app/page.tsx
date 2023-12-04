import Image from 'next/image'
import styles from './page.module.css'
import { Button as NavBar } from './components/storyBookComponents/navbar/navBar';
import Link from 'next/link'
import Fetch from './lib/fetch'
import LunchMiddagText from './components/timeDepender/timeDependerLunchMiddag'
import GreetingCardTime from './components/timeDepender/greetingCardTime'
import BackgroundTime from './components/timeDepender/backgroundTime';
import { Button as ButtonSaved } from './components/storyBookComponents/buttons/SavedMeals/SavedMeals';
import { Card as MealCard } from './components/storyBookComponents/cards/mealCard/mealCard'

export default async function Home() {
  const fetch = await Fetch();

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

        <ButtonSaved></ButtonSaved>

      </div>
      <div>
        Utvalda måltider
        Lorem ipsum dolor sit amet, consectetur

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
        </div>
      </div>

      <NavBar />
    </main>
  )
}
