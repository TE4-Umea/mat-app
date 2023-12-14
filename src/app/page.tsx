import styles from './page.module.css'
import GreetingCardTime from './components/backendComponents/timeDepender/greetingCardTime'
import BackgroundTime from './components/backendComponents/timeDepender/backgroundTime';
import { NavBar } from '@/app/components/storyBookComponents/navbar/navBar';
import { SavedMeals } from './components/storyBookComponents/buttons/SavedMeals/SavedMeals';
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth";
import Carousel from './components/backendComponents/carousel/carousel'
import CarouselMIS from './components/backendComponents/carouselMIS/carouselMIS'
import Fetch from '../app/lib/matFetch'

export default async function Home() {
  const session = await getServerSession();
  const fetch = await Fetch();

  console.log(fetch)
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


        </div>

        <NavBar />
      </main>
    );
  } else if (!session) {
    redirect('/setup')
  }
}
