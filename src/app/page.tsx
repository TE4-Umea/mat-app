import Image from 'next/image'
import styles from './page.module.css'
import { Button as NavBar } from './components/storyBookComponents/navbar/navBar';
import Link from 'next/link'
import Fetch from './lib/fetch'
import Time from './components/timeDepender/timeDepender'
import LunchText from './components/timeDepender/timeDependerLunch'
import MiddagText from './components/timeDepender/timeDependerMiddag'
import { getServerSession } from 'next-auth'



export default async function Home() {
  const fetch = await Fetch();
  const session = await getServerSession();

  return (
    <main>
      <h1 className={styles.startText}>
        <Time></Time>
        <div className={styles.namecolor}>{session?.user?.name}</div> Idag ska du äta
      </h1>

      <div className={styles.scroll}>

        <div className={styles.buttonContainer}>
          <img src={fetch.meals[0].strMealThumb} alt="food" width="300" height="200"></img>
          <MiddagText></MiddagText>
          <LunchText></LunchText>
        </div>

        <div className={styles.buttonContainer}>
          <img src={fetch.meals[1].strMealThumb} alt="food" width="300" height="200"></img>
          <MiddagText></MiddagText>
          <LunchText></LunchText>
        </div>

        <div className={styles.buttonContainer}>
          <img src={fetch.meals[2].strMealThumb} alt="food" width="300" height="200"></img>
          <MiddagText></MiddagText>
          <LunchText></LunchText>
        </div>

        <div className={styles.buttonContainer}>
          <img src={fetch.meals[3].strMealThumb} alt="food" width="300" height="200"></img>
          <MiddagText></MiddagText>
          <LunchText></LunchText>
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
