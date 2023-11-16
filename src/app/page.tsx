import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/navBar'

export default function Home() {
  return (
    <main>
      <div className={styles.StartText}>
        Välkommen tillbaka REDACTED
      </div>
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
      <NavBar />
    </main>
  )
}
