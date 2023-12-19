import styles from './page.module.css'
import { GreetingCardTime } from '../components/backendComponents/timeDepender/greetingCardTime'
import BackgroundTime from '../components/backendComponents/timeDepender/backgroundTime';
import { NavBar } from '../components/storyBookComponents/navbar/navBar';
import { SavedMeals } from '../components/storyBookComponents/SavedMeals/SavedMeals';
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth";
import Carousel from '../components/backendComponents/carousel/carousel'
import CarouselMIS from '../components/backendComponents/carouselMIS/carouselMIS'
import Fetch from '../lib/matFetch'
import { useTranslation } from '../i18n'

export default async function Home({ params: { lng } }) {
  const session = await getServerSession();
  const { t } = await useTranslation(lng, ['glossary', 'common'])
  console.log({ lng })


  const fetch = await Fetch();

  // console.log(fetch)
  if (session) {
    return (
      <main>
        <BackgroundTime></BackgroundTime>

        <h1 className={styles.startText}>
          <GreetingCardTime lng={lng}></GreetingCardTime>
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
