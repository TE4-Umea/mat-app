import Image from 'next/image'
import styles from './page.module.css'
import { Button as NavBar } from './components/storyBookComponents/navbar/navBar';
import Link from 'next/link'
import Fetch from './lib/fetch'
import LunchMiddagText from './components/timeDepender/timeDependerLunchMiddag'
import { getServerSession } from 'next-auth'
import GreetingCardTime from './components/timeDepender/greetingCardTime'
import BackgroundTime from './components/timeDepender/backgroundTime';


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
        <Link
          href="/pages/saved-meals"
        //   className=
        >
          <span className="">Sparade rätter</span>{' '}
        </Link>
        <Link
          href="/pages/favorite-meals"
        //   className=
        >
          <span className="">Favoritiserade rätter</span>{' '}
        </Link>
      </div>
      <div>
        Utvalda måltider
        Lorem ipsum dolor sit amet, consectetur

        <div className={styles.scroll}>
          <img src={fetch.meals[7].strMealThumb} alt="food" width="300" height="200"></img>
          <img src={fetch.meals[6].strMealThumb} alt="food" width="300" height="200"></img>
          <img src={fetch.meals[5].strMealThumb} alt="food" width="300" height="200"></img>
          <img src={fetch.meals[4].strMealThumb} alt="food" width="300" height="200"></img>
        </div>
      </div>

      <NavBar />
    </main>
  )
}
