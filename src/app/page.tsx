import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/navBar'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className={styles.startText}>
        God morgon,
        Kerstkristina! Idag ska du äta
      </div>

      <div className={styles.scroll}>
        <img src="img_5terre.jpg" alt="Cinque Terre" width="300" height="200"></img>
        <img src="img_forest.jpg" alt="Forest" width="300" height="200"></img>
        <img src="img_lights.jpg" alt="Northern Lights" width="300" height="200"></img>
        <img src="img_mountains.jpg" alt="Mountains" width="300" height="200"></img>
      </div>

      <div className={styles.buttonsSaved}>
        <Link
          href="/"
        //   className=
        >
          <span className="">Sparade rätter</span>{' '}
        </Link>
        <Link
          href="/"
        //   className=
        >
          <span className="">Favoritiserade rätter</span>{' '}
        </Link>
      </div>
      <div>
        Utvalda måltider
        Lorem ipsum dolor sit amet, consectetur
        <div className={styles.scroll}>
        <img src="img_5terre.jpg" alt="Cinque Terre" width="300" height="200"></img>
        <img src="img_forest.jpg" alt="Forest" width="300" height="200"></img>
        <img src="img_lights.jpg" alt="Northern Lights" width="300" height="200"></img>
        <img src="img_mountains.jpg" alt="Mountains" width="300" height="200"></img>
      </div>
      </div>

      <NavBar />
    </main>
  )
}
