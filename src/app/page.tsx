import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.test}>
        <p>Måltider</p>
        <p>Maträtter</p>
        <p>Profil</p>
      </div>
    </main>
  )
}
