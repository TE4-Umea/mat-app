import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth";

import Carousel from '../components/backendComponents/carousel/carousel'
import CarouselMIS from '../components/backendComponents/carouselMIS/carouselMIS'
import BackgroundClouds from '../components/backgroundClouds';
import { GreetingCard } from '../components/storyBookComponents/greetingCard/greetingCard';
import { NavBar } from '../components/storyBookComponents/navbar/navBar';
import { SavedMeals } from '../components/storyBookComponents/savedMeals/savedMeals';
import { useTranslation } from '../i18n'
import Fetch from '../lib/matFetch'
import styles from './page.module.css'

export default async function Home({ params: { lng } }) {
  const session = await getServerSession();
  const { t } = await useTranslation(lng, ['glossary', 'common'])
  console.log({ lng })


  const fetch = await Fetch();
  const today = new Date();

  // console.log(fetch)
  if (session) {
    return (
      <main>
        <BackgroundClouds size={'large'} light={today.getHours() <= 15 ? true : false} />

        <h1 className={styles.startText}>
          <GreetingCard lng={lng} dark={today.getHours() <= 15 ? false : true}>{ }</GreetingCard>
        </h1>

        <Carousel></Carousel>

        <div className={styles.buttonsSaved}>

          <SavedMeals lng={lng}></SavedMeals>

        </div>
        <div className={styles.chosenMeals}>
          <h1>{t('glossary:chosen_meals_title')}</h1>
          <span>{t('glossary:chosen_meals_desc')}</span>


          <CarouselMIS></CarouselMIS>


        </div>

        <NavBar lng={lng} />
      </main>
    );
  } else if (!session) {
    redirect(`/${lng}/setup`)
  }
}
