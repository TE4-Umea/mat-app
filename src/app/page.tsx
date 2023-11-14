import Image from 'next/image'
import styles from './page.module.css'
import Layout from './layout'

export default function Home() {
  return (
    <Layout>
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
          <div className={styles.StartChoiceText}>
            <p>Profil</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
