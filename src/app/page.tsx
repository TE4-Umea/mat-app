import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.StartText}>
        Välkommen tillbaka REDACTED
      </div>
      <div className={styles.StartChoice}>
        <div className={styles.StartChoiceText}>
          <p>Måltider</p>
        </div>
        <div className={styles.StartChoiceText}>
          <p>Maträtter</p>
        </div>
      </div>
    </main>
  )
}
