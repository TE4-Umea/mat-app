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

      {/* Scroll funktion med bilder på mat */}

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
      <NavBar />
    </main>
  )
}
